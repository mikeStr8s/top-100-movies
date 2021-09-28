import './style.css';
import { movies } from './movies';
import { getMovie, Result } from './network-manager';

interface Movie {
  title: string;
  year: number;
}

const MOVIE_DB = 'movie_db';
const WATCHED_DB = 'watched_db';
const API_KEY = '621dd8327c6b6da21938d21e41f1f9da';
const API_URL = 'https://api.themoviedb.org/3/search/movie';


const sideNav = document.querySelector<HTMLDivElement>('#sidenav')!;
const closeBtn = document.querySelector<HTMLAnchorElement>('#close')!;
const openBtn = document.querySelector<HTMLAnchorElement>('#open')!;
const nextBtn = document.querySelector<HTMLAnchorElement>('#next')!;
const resetBtn = document.querySelector<HTMLAnchorElement>('#reset')!;
const search = document.querySelector<HTMLInputElement>('#search')!;
const search_results = document.querySelector<HTMLDivElement>('#search-results')!;
const poster = document.querySelector<HTMLImageElement>('#poster')!;
closeBtn.addEventListener('click', closeSideNav);
openBtn.addEventListener('click', openSideNav);
nextBtn.addEventListener('click', nextMovieClicked);
poster.addEventListener('click', nextMovieClicked);
resetBtn.addEventListener('click', resetApplicationClicked);
search.oninput = updateSearch;

function setup(): void {
  console.log('Setup initialized');
  initDatabase();
}

function closeSideNav(): void {
  console.log('Close Nav Clicked');
  sideNav.style.width = '0';
}

function openSideNav(): void {
  console.log('Open Nav Clicked');
  sideNav.style.width = '250px';
}

async function nextMovieClicked(): Promise<void> {
  const db = getDatabase(MOVIE_DB);
  const rand_movie = db[generateRandomInRange(0, db.length - 1)];
  const results = await getMovie(API_URL + `?api_key=${API_KEY}&query=${rand_movie.title}&year=${rand_movie.year}`);
  updatePoster(results.results[0])
  removeFromDatabase(rand_movie, db);
}

function resetApplicationClicked(): void {
  setDatabase(MOVIE_DB, movies);
  setDatabase(WATCHED_DB, []);
}

function updateSearch(e: Event): void {
  const full_db = movies;
  const curr_db = getDatabase(MOVIE_DB);

  search_results.innerHTML = '';

  full_db.map(movie => {
    if (movie.title.toLowerCase().indexOf((<HTMLInputElement>e.target)!.value.toLowerCase()) !== -1) {
      const in_curr_db = curr_db.map(movie => movie.title).indexOf(movie.title) >= 0 ? true : false;

      const title_span = document.createElement('span');
      const add_button = document.createElement('button');
      const rem_button = document.createElement('button');

      title_span.setAttribute('class', 'nav-text');
      title_span.innerText = movie.title;
      add_button.setAttribute('class', 'grid-btn');
      add_button.innerText = '+';
      rem_button.setAttribute('class', 'grid-btn');
      rem_button.innerText = '-';

      if (in_curr_db) {
        add_button.disabled = true;
      } else {
        rem_button.disabled = true;
      }

      add_button.addEventListener('click', () => {
        addToDatabase(movie);
        add_button.disabled = true;
        rem_button.disabled = false;
      });
      rem_button.addEventListener('click', () => {
        removeFromDatabase(movie, getDatabase(MOVIE_DB));
        add_button.disabled = false;
        rem_button.disabled = true;
      });

      search_results.appendChild(title_span);
      search_results.appendChild(add_button);
      search_results.appendChild(rem_button);
    }
  });
}

function updatePoster(result: Result): void {
  poster.setAttribute('src', `https://image.tmdb.org/t/p/original${result.poster_path}`);
}

function removeFromDatabase(movie: Movie, db: Movie[]): void {
  var watched_db = getDatabase(WATCHED_DB);
  watched_db.push(movie);
  setDatabase(WATCHED_DB, watched_db);
  setDatabase(MOVIE_DB, db.filter(m => m.title !== movie.title));
}

function addToDatabase(movie: Movie): void {
  var watched_db = getDatabase(WATCHED_DB).filter(watched => watched.title !== movie.title);
  var current_db = getDatabase(MOVIE_DB);
  current_db.push(movie);
  setDatabase(WATCHED_DB, watched_db);
  setDatabase(MOVIE_DB, current_db);
}

function generateRandomInRange(max: number, min: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function initDatabase(): boolean {
  if (localStorage.getItem(MOVIE_DB) !== null) {
    console.log('Local database already exists, skipping init.');
    return false;
  }
  else { 
    console.log('Local database does not exist, init executed.');
    localStorage.setItem(MOVIE_DB, JSON.stringify(movies));
    localStorage.setItem(WATCHED_DB, "[]");
    return true;
  }
}

function getDatabase(db_name: string): Movie[] {
  return JSON.parse(localStorage.getItem(db_name)!);
}

function setDatabase(db_name: string, db: Movie[]): void {
  localStorage.setItem(db_name, JSON.stringify(db));
}

document.addEventListener('DOMContentLoaded', setup);
