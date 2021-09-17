import './style.css'

const api_key = '621dd8327c6b6da21938d21e41f1f9da';
const movie_db = [
  {'title': 'The Shawshank Redemption', 'year': 1994},
  {'title': 'The Godfather', 'year': 1972},
  {'title': 'The Godfather: Part II', 'year': 1974},
  {'title': 'The Dark Knight', 'year': 2008},
  {'title': '12 Angry Men', 'year': 1957},
  {'title': 'Schindler\'s List', 'year': 1993},
  {'title': 'The Lord Of The Rings: The Return Of The King', 'year': 2003},
  {'title': 'Pulp Fiction', 'year': 1994},
  {'title': 'The Good, The Bad and the Ugly', 'year': 1966},
  {'title': 'The Lord Of The Rings: The Fellowship Of The Ring', 'year': 2001},
  {'title': 'Fight Club', 'year': 1999},
  {'title': 'Forrest Gump', 'year': 1994},
  {'title': 'Inception', 'year': 2010},
  {'title': 'The Lord of the Rings: The Two Towers', 'year': 2002},
  {'title': 'Star Wars: Episode V - The Empire Strikes Back', 'year': 1980},
  {'title': 'The Matrix', 'year': 1999},
  {'title': 'Goodfellas', 'year': 1990},
  {'title': 'One Flew Over The Cuckoo\'s Nest', 'year': 1975},
  {'title': 'Seven Samurai', 'year': 1954},
  {'title': 'Se7en', 'year': 1995},
  {'title': 'Life Is Beautiful', 'year': 1997},
  {'title': 'City Of God', 'year': 2002},
  {'title': 'The Silence Of The Lambs', 'year': 1991},
  {'title': 'It\'s A Wonderful Life', 'year': 1946},
  {'title': 'Star Wars: Episode IV - A New Hope', 'year': 1977},
  {'title': 'Saving Private Ryan', 'year': 1998},
  {'title': 'Spirited Away', 'year': 2001},
  {'title': 'The Green Mile', 'year': 1999},
  {'title': 'Parasite', 'year': 2019},
  {'title': 'Interstellar', 'year': 2014},
  {'title': 'Léon: The Professional', 'year': 1994},
  {'title': 'The Usual Suspects', 'year': 1995},
  {'title': 'Harakiri', 'year': 1962},
  {'title': 'The Lion King', 'year': 1994},
  {'title': 'Back To The Future', 'year': 1985},
  {'title': 'The Pianist', 'year': 2002},
  {'title': 'Terminator 2: Judgment Day', 'year': 1991},
  {'title': 'American History X', 'year': 1998},
  {'title': 'Modern Times', 'year': 1936},
  {'title': 'Psycho', 'year': 1960},
  {'title': 'Gladiator', 'year': 2000},
  {'title': 'Hamilton', 'year': 2020},
  {'title': 'City Lights', 'year': 1931},
  {'title': 'The Departed', 'year': 2006},
  {'title': 'The Untouchables', 'year': 1987},
  {'title': 'Whiplash', 'year': 2014},
  {'title': 'The Prestige', 'year': 2006},
  {'title': 'Grave Of The Fireflies', 'year': 1988},
  {'title': 'Once Upon A Time In The West', 'year': 1968},
  {'title': 'Casablanca', 'year': 1942},
  {'title': 'Cinema Paradiso', 'year': 1988},
  {'title': 'Rear Window', 'year': 1954},
  {'title': 'Alien', 'year': 1979},
  {'title': 'Apocalypse Now', 'year': 1979},
  {'title': 'Memento', 'year': 2000},
  {'title': 'Raiders Of The Lost Ark', 'year': 1981},
  {'title': 'The Great Dictator', 'year': 1940},
  {'title': 'Django Unchained', 'year': 2012},
  {'title': 'The Lives Of Others', 'year': 2006},
  {'title': 'Joker', 'year': 2019},
  {'title': 'Paths Of Glory', 'year': 1957},
  {'title': 'WALL·E', 'year': 2008},
  {'title': 'The Shining', 'year': 1980},
  {'title': 'Avengers: Infinity War', 'year': 2018},
  {'title': 'Sunset Boulevard.', 'year': 1950},
  {'title': 'Witness For The Prosecution', 'year': 1957},
  {'title': 'Spider-man: Into The Spider-Verse', 'year': 2018},
  {'title': 'Princess Mononoke', 'year': 1997},
  {'title': 'Oldboy', 'year': 2003},
  {'title': 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', 'year': 1964},
  {'title': 'The Dark Knight Rises', 'year': 2012},
  {'title': 'Once Upon A Time In America', 'year': 1984},
  {'title': 'Aliens', 'year': 1986},
  {'title': 'Avengers: Endgame', 'year': 2019},
  {'title': 'Your Name', 'year': 2016},
  {'title': 'Coco', 'year': 2017},
  {'title': 'American Beauty', 'year': 1999},
  {'title': 'Braveheart', 'year': 1995},
  {'title': '3 idiots', 'year': 2009},
  {'title': 'Das Boot', 'year': 1981},
  {'title': 'Toy Story', 'year': 1995},
  {'title': 'High And Low', 'year': 2016},
  {'title': 'Amadeus', 'year': 1984},
  {'title': 'Capernaum', 'year': 2018},
  {'title': 'Like Stars On Earth', 'year': 2007},
  {'title': 'Star Wars: Episode VI - Return Of The Jedi', 'year': 1983},
  {'title': 'Inglourious Basterds', 'year': 2009},
  {'title': 'Reservoir Dogs', 'year': 1992},
  {'title': 'Good Will Hunting', 'year': 1997},
  {'title': '2001: A Space Odyssey', 'year': 1968},
  {'title': 'Requiem For A Dream', 'year': 2000},
  {'title': 'Vertigo', 'year': 1958},
  {'title': 'M', 'year': 1931},
  {'title': 'Dangal', 'year': 2016},
  {'title': 'Eternal Sunshine Of The Spotless Mind', 'year': 2004},
  {'title': 'The Hunt', 'year': 2012},
  {'title': 'Citizen Kane', 'year': 1941},
  {'title': '1917', 'year': 2019},
  {'title': 'Full Metal Jacket', 'year': 1987},
  {'title': 'Bicycle Thieves', 'year': 1948}
];

$('#open').on('click', openNav);
$('#close').on('click', closeNav);
$('#poster').on('click', userClicked);
$('#reset').on('click', () => {
  localStorage.removeItem('movie_db');
  userClicked();
});
$('#next').on('click', userClicked);

// document.body.addEventListener('click', userClicked);

function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function userClicked() {
  initDatabase();
  var db = getDatabase();
  const rand = generateRandom(0, db.length-1);
  const title = db[rand]['title'];
  const year = db[rand]['year'];

  $('#title').html(title);

  const settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${title}&year=${year}`,
    "method": "GET",
  };
  
  $.ajax(settings).done(function (response) {
    const movie = findMovie(title, response['results']);
    updatePoster(movie);
    updateDatabase(db, title);
  });
}

function updateDatabase(db, title) {
  const updated_db = db.filter(movie => movie['title'] !== title);
  setDatabase(updated_db);
}

function updatePoster(movie) {
  $('#poster').attr('src', `https://image.tmdb.org/t/p/original${movie['poster_path']}`);
}

function findMovie(title, results) {
  if (results.length === 1) { return results[0]; }
  else {
    for (const idx in results) {
      const movie = results[idx];
      if (movie['title'] === title) { return movie; }
    }
  }
  return results[0];
}

function initDatabase() {
  if (localStorage.getItem('movie_db') !== null) { return; }
  else { localStorage.setItem('movie_db', JSON.stringify(movie_db)); }
}

function getDatabase() {
  return JSON.parse(localStorage.getItem('movie_db')); 
}

function setDatabase(db) {
  localStorage.setItem('movie_db', JSON.stringify(db));
}

/* Set the width of the side navigation to 250px */
function openNav() {
  console.log('open');
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  console.log('close');
  document.getElementById("mySidenav").style.width = "0";
}