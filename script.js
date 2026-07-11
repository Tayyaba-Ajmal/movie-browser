const GENRE_COLORS = {
  Action: ["#7a3520", "#c96a2f"],
  Drama: ["#2c4a4c", "#4f8083"],
  "Sci-Fi": ["#2b3866", "#4d63a8"],
  Thriller: ["#6e1f2c", "#a22c3b"],
  Comedy: ["#8a5a15", "#d9a441"],
  Animation: ["#4a3166", "#7a56a8"],
  Horror: ["#1c1518", "#4a1418"],
  Romance: ["#6e3140", "#a85c6b"],
  Crime: ["#2e3138", "#565b66"],
  Mystery: ["#402a52", "#6f4d8c"],
  Fantasy: ["#20503c", "#3e7c5a"],
  Music: ["#7a4a10", "#c9832e"],
};

const MOVIES = [
  {
    id: 1,
    title: "The Godfather",
    year: 1972,
    genres: ["Crime", "Drama"],
    director: "Francis Ford Coppola",
    cast: ["Marlon Brando", "Al Pacino", "James Caan"],
    rating: 9.2,
    runtime: 175,
    synopsis:
      "A New York crime dynasty passes control from an aging patriarch to his reluctant youngest son, tracing how the family's business reshapes the man meant to escape it.",
  },
  {
    id: 2,
    title: "Pulp Fiction",
    year: 1994,
    genres: ["Crime", "Drama"],
    director: "Quentin Tarantino",
    cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    rating: 8.9,
    runtime: 154,
    synopsis:
      "Hitmen, a boxer, and a gangster's wife cross paths across Los Angeles in a loop of overlapping stories told wildly out of order.",
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    genres: ["Action", "Crime", "Thriller"],
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    rating: 9.0,
    runtime: 152,
    synopsis:
      "Gotham's masked protector faces an anarchic new adversary whose chaos tests every principle the city's guardians hold onto.",
  },
  {
    id: 4,
    title: "Fight Club",
    year: 1999,
    genres: ["Drama"],
    director: "David Fincher",
    cast: ["Edward Norton", "Brad Pitt", "Helena Bonham Carter"],
    rating: 8.8,
    runtime: 139,
    synopsis:
      "An insomniac office worker and a rogue soap salesman build an underground fighting ring that spirals into something far more dangerous.",
  },
  {
    id: 5,
    title: "Inception",
    year: 2010,
    genres: ["Sci-Fi", "Thriller", "Action"],
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    rating: 8.8,
    runtime: 148,
    synopsis:
      "A thief who steals secrets from inside dreams is offered a shot at redemption if he can plant an idea instead of extracting one.",
  },
  {
    id: 6,
    title: "Interstellar",
    year: 2014,
    genres: ["Sci-Fi", "Drama"],
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    rating: 8.7,
    runtime: 169,
    synopsis:
      "With Earth failing, a former pilot leaves his children behind to search a distant galaxy for a new home for humanity.",
  },
  {
    id: 7,
    title: "Parasite",
    year: 2019,
    genres: ["Thriller", "Drama"],
    director: "Bong Joon-ho",
    cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
    rating: 8.6,
    runtime: 132,
    synopsis:
      "A struggling family schemes its way into the household of a wealthy one, until the line between the two grows dangerously unstable.",
  },
  {
    id: 8,
    title: "Spirited Away",
    year: 2001,
    genres: ["Animation", "Fantasy"],
    director: "Hayao Miyazaki",
    cast: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki"],
    rating: 8.6,
    runtime: 125,
    synopsis:
      "A young girl wanders into a spirit world ruled by a sorceress and must work in a bathhouse of gods to free her transformed parents.",
  },
  {
    id: 9,
    title: "No Country for Old Men",
    year: 2007,
    genres: ["Crime", "Thriller"],
    director: "Joel & Ethan Coen",
    cast: ["Tommy Lee Jones", "Javier Bardem", "Josh Brolin"],
    rating: 8.2,
    runtime: 122,
    synopsis:
      "A hunter who stumbles on a drug deal gone wrong pockets the cash and finds himself hunted by an implacable killer.",
  },
  {
    id: 10,
    title: "The Shining",
    year: 1980,
    genres: ["Horror"],
    director: "Stanley Kubrick",
    cast: ["Jack Nicholson", "Shelley Duvall", "Danny Lloyd"],
    rating: 8.4,
    runtime: 146,
    synopsis:
      "A writer takes a winter caretaking job at an isolated hotel, where its empty halls begin to unravel his mind and endanger his family.",
  },
  {
    id: 11,
    title: "Whiplash",
    year: 2014,
    genres: ["Drama", "Music"],
    director: "Damien Chazelle",
    cast: ["Miles Teller", "J.K. Simmons", "Melissa Benoist"],
    rating: 8.5,
    runtime: 106,
    synopsis:
      "A driven young drummer at an elite conservatory clashes with a ruthless instructor determined to push him past his limits.",
  },
  {
    id: 12,
    title: "La La Land",
    year: 2016,
    genres: ["Romance", "Music", "Comedy"],
    director: "Damien Chazelle",
    cast: ["Ryan Gosling", "Emma Stone", "John Legend"],
    rating: 8.0,
    runtime: 128,
    synopsis:
      "A jazz pianist and an aspiring actress fall for each other in Los Angeles while their ambitions quietly pull them in different directions.",
  },
  {
    id: 13,
    title: "Mad Max: Fury Road",
    year: 2015,
    genres: ["Action"],
    director: "George Miller",
    cast: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
    rating: 8.1,
    runtime: 120,
    synopsis:
      "In a scorched wasteland, a drifter joins a rebel warrior fleeing a tyrant across the desert in a single relentless chase.",
  },
  {
    id: 14,
    title: "The Grand Budapest Hotel",
    year: 2014,
    genres: ["Comedy", "Drama"],
    director: "Wes Anderson",
    cast: ["Ralph Fiennes", "Tony Revolori", "Saoirse Ronan"],
    rating: 8.1,
    runtime: 99,
    synopsis:
      "A legendary concierge and his loyal lobby boy get tangled in a stolen painting and a family feud across a fictional European resort.",
  },
  {
    id: 15,
    title: "Get Out",
    year: 2017,
    genres: ["Horror", "Thriller"],
    director: "Jordan Peele",
    cast: ["Daniel Kaluuya", "Allison Williams", "Bradley Whitford"],
    rating: 7.7,
    runtime: 104,
    synopsis:
      "A young man's visit to his girlfriend's family estate reveals a welcome that grows more unsettling with every polite smile.",
  },
  {
    id: 16,
    title: "Amélie",
    year: 2001,
    genres: ["Romance", "Comedy"],
    director: "Jean-Pierre Jeunet",
    cast: ["Audrey Tautou", "Mathieu Kassovitz", "Rufus"],
    rating: 8.3,
    runtime: 122,
    synopsis:
      "A shy Parisian waitress secretly orchestrates small acts of kindness for those around her while avoiding her own chance at love.",
  },
  {
    id: 17,
    title: "Coco",
    year: 2017,
    genres: ["Animation", "Fantasy"],
    director: "Lee Unkrich",
    cast: ["Anthony Gonzalez", "Gael García Bernal", "Benjamin Bratt"],
    rating: 8.4,
    runtime: 105,
    synopsis:
      "A boy who dreams of being a musician is swept into the Land of the Dead, where he must uncover the truth behind his family's ban on music.",
  },
  {
    id: 18,
    title: "Blade Runner 2049",
    year: 2017,
    genres: ["Sci-Fi", "Thriller"],
    director: "Denis Villeneuve",
    cast: ["Ryan Gosling", "Harrison Ford", "Ana de Armas"],
    rating: 8.0,
    runtime: 164,
    synopsis:
      "A replicant detective uncovers a buried secret that threatens to unravel the fragile order between humans and their synthetic workforce.",
  },
  {
    id: 19,
    title: "Knives Out",
    year: 2019,
    genres: ["Mystery", "Comedy"],
    director: "Rian Johnson",
    cast: ["Daniel Craig", "Ana de Armas", "Chris Evans"],
    rating: 7.9,
    runtime: 130,
    synopsis:
      "A famed detective investigates the death of a wealthy novelist, drawing every self-interested member of his family under suspicion.",
  },
  {
    id: 20,
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
    genres: ["Romance", "Sci-Fi"],
    director: "Michel Gondry",
    cast: ["Jim Carrey", "Kate Winslet", "Kirsten Dunst"],
    rating: 8.3,
    runtime: 108,
    synopsis:
      "After a painful breakup, a man undergoes a procedure to erase every memory of his ex, only to rediscover why he fell for her in the first place.",
  },
  {
    id: 21,
    title: "Your Name",
    year: 2016,
    genres: ["Animation", "Romance", "Fantasy"],
    director: "Makoto Shinkai",
    cast: ["Ryunosuke Kamiki", "Mone Kamishiraishi"],
    rating: 8.4,
    runtime: 106,
    synopsis:
      "Two teenagers in different cities begin mysteriously swapping bodies in their sleep, forging a bond that reaches across time itself.",
  },
  {
    id: 22,
    title: "The Social Network",
    year: 2010,
    genres: ["Drama"],
    director: "David Fincher",
    cast: ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake"],
    rating: 7.7,
    runtime: 120,
    synopsis:
      "A Harvard sophomore's late-night coding project grows into a global network, fracturing every friendship that helped build it.",
  },
  {
    id: 23,
    title: "Everything Everywhere All at Once",
    year: 2022,
    genres: ["Sci-Fi", "Comedy"],
    director: "Daniel Kwan & Daniel Scheinert",
    cast: ["Michelle Yeoh", "Ke Huy Quan", "Stephanie Hsu"],
    rating: 7.8,
    runtime: 139,
    synopsis:
      "An overwhelmed laundromat owner discovers she must connect with versions of herself across infinite parallel lives to save them all.",
  },
  {
    id: 24,
    title: "Dune",
    year: 2021,
    genres: ["Sci-Fi", "Action"],
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac"],
    rating: 8.0,
    runtime: 155,
    synopsis:
      "The heir of a noble house is thrust onto a desert planet whose deadly landscape and native people hold the key to his family's survival.",
  },
];

let state = {
  search: "",
  genre: "All",
  sort: "rating-desc",
  favorites: new Set(),
  favOnly: false,
};

function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
function gradientFor(genres) {
  const g = GENRE_COLORS[genres[0]] || ["#33313c", "#5a5568"];
  return `linear-gradient(155deg, ${g[0]} 0%, ${g[1]} 100%)`;
}
function starIcon() {
  return `<svg viewBox="0 0 24 24"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9L5.7 21l1.7-7L2 9.2l7.1-.6z"/></svg>`;
}
function trailerUrl(m) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(m.title + " " + m.year + " official trailer")}`;
}
function watchUrl(m) {
  return `https://www.justwatch.com/us/search?q=${encodeURIComponent(m.title)}`;
}

function posterEl(movie, size) {
  const big = size === "big";
  return `
    <div class="poster" style="background:${gradientFor(movie.genres)}">
      <div class="poster-title" style="${big ? "font-size:34px" : ""}">${movie.title}</div>
    </div>`;
}

/* ---------- HERO ---------- */
let heroIndex = 0;
let heroTimer = null;
const heroMovies = [...MOVIES].sort((a, b) => b.rating - a.rating).slice(0, 4);

function renderHero() {
  const panel = document.getElementById("heroPanel");
  panel.innerHTML =
    heroMovies
      .map(
        (m, i) => `
    <div class="hero-slide ${i === 0 ? "active" : ""}" data-i="${i}">
      <div class="hero-bg" style="background:${gradientFor(m.genres)}"></div>
      <div class="hero-content">
        <p class="hero-eyebrow">Featured tonight</p>
        <h1 class="hero-title">${m.title}</h1>
        <div class="hero-meta">
          <span class="ticket">${starIcon()} ${m.rating.toFixed(1)}</span>
          <span class="year-tag">${m.year}</span>
          <span class="genre-pill">${m.genres[0]}</span>
        </div>
        <p class="hero-desc">${m.synopsis}</p>
        <div class="hero-buttons">
          <a class="btn-primary" href="${watchUrl(m)}" target="_blank" rel="noopener">Where to watch</a>
          <a class="btn-ghost" href="${trailerUrl(m)}" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 4l14 8-14 8V4z"/></svg>
            Trailer
          </a>
          <button class="btn-ghost" onclick="window.__openModal(${m.id})">Details</button>
          <button class="btn-ghost" onclick="window.__toggleFav(event, ${m.id})" aria-label="Toggle watchlist">
            <svg viewBox="0 0 24 24" fill="${state.favorites.has(m.id) ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2"><path d="M12 21s-7.5-4.6-10-9.3C.6 8 2.2 4.5 5.6 4c2-.3 3.7.7 4.9 2.4C11.7 4.7 13.4 3.7 15.4 4c3.4.5 5 4 3.6 7.7C16.5 16.4 12 21 12 21z"/></svg>
          </button>
        </div>
      </div>
    </div>
  `,
      )
      .join("") +
    `<div class="hero-dots">${heroMovies.map((_, i) => `<button class="hero-dot ${i === 0 ? "active" : ""}" data-i="${i}" onclick="window.__goHero(${i})"><span class="fill"></span></button>`).join("")}</div>`;
  startHeroTimer();
}
function goHero(i) {
  heroIndex = i;
  document
    .querySelectorAll(".hero-slide")
    .forEach((s) => s.classList.toggle("active", +s.dataset.i === i));
  document.querySelectorAll(".hero-dot").forEach((d) => {
    const active = +d.dataset.i === i;
    d.classList.remove("active");
    void d.offsetWidth;
    d.classList.toggle("active", active);
  });
}
function startHeroTimer() {
  clearInterval(heroTimer);
  heroTimer = setInterval(() => {
    goHero((heroIndex + 1) % heroMovies.length);
  }, 7000);
}
window.__goHero = (i) => {
  goHero(i);
  startHeroTimer();
};

/* ---------- FILTER BAR ---------- */
function renderFilters() {
  const genres = ["All", ...new Set(MOVIES.flatMap((m) => m.genres))];
  const bar = document.getElementById("filterBar");
  const chipsHtml = genres
    .map(
      (g) =>
        `<button class="chip ${g === state.genre ? "active" : ""}" data-genre="${g}">${g}</button>`,
    )
    .join("");
  bar.innerHTML =
    chipsHtml + `<span class="result-count" id="resultCount"></span>`;
  bar.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      state.genre = chip.dataset.genre;
      renderFilters();
      renderGrid();
    });
  });
}

/* ---------- GRID ---------- */
function getFiltered() {
  let list = MOVIES.filter((m) => {
    const matchesGenre =
      state.genre === "All" || m.genres.includes(state.genre);
    const q = state.search.trim().toLowerCase();
    const matchesSearch =
      !q ||
      m.title.toLowerCase().includes(q) ||
      m.director.toLowerCase().includes(q) ||
      m.cast.some((c) => c.toLowerCase().includes(q));
    const matchesFav = !state.favOnly || state.favorites.has(m.id);
    return matchesGenre && matchesSearch && matchesFav;
  });
  const [key, dir] = state.sort.split("-");
  list.sort((a, b) => {
    let va = key === "title" ? a.title : a[key];
    let vb = key === "title" ? b.title : b[key];
    if (typeof va === "string")
      return dir === "asc" ? va.localeCompare(vb) : vb.localeCompare(va);
    return dir === "asc" ? va - vb : vb - va;
  });
  return list;
}

function renderGrid() {
  const grid = document.getElementById("movieGrid");
  const list = getFiltered();
  const countEl = document.getElementById("resultCount");
  if (countEl)
    countEl.textContent = `${list.length} film${list.length !== 1 ? "s" : ""}`;

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
        <h3>No films match</h3>
        <p>Try a different title, genre, or clear your search.</p>
      </div>`;
    return;
  }

  grid.innerHTML = list
    .map(
      (m) => `
    <div class="card" data-id="${m.id}" onclick="window.__openModal(${m.id})">
      <div class="poster" style="background:${gradientFor(m.genres)}">
        <button class="poster-fav ${state.favorites.has(m.id) ? "active" : ""}" onclick="window.__toggleFav(event, ${m.id})" aria-label="Toggle watchlist" title="${state.favorites.has(m.id) ? "Remove from watchlist" : "Add to watchlist"}">
          <svg viewBox="0 0 24 24" stroke-width="2"><path d="M12 21s-7.5-4.6-10-9.3C.6 8 2.2 4.5 5.6 4c2-.3 3.7.7 4.9 2.4C11.7 4.7 13.4 3.7 15.4 4c3.4.5 5 4 3.6 7.7C16.5 16.4 12 21 12 21z"/></svg>
        </button>
        <a class="poster-play" href="${trailerUrl(m)}" target="_blank" rel="noopener" onclick="event.stopPropagation()" aria-label="Watch trailer">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4l13 8-13 8V4z"/></svg>
        </a>
        <div class="poster-title">${m.title}</div>
        <span class="ticket poster-ticket">${starIcon()} ${m.rating.toFixed(1)}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${m.title}</h3>
        <div class="card-meta"><span>${m.year}</span><span class="dot"></span><span>${m.runtime} min</span></div>
        <div class="card-genres">${m.genres.map((g) => `<span>${g}</span>`).join("")}</div>
      </div>
    </div>
  `,
    )
    .join("");
}

/* ---------- MODAL ---------- */
function openModal(id) {
  const m = MOVIES.find((x) => x.id === id);
  if (!m) return;
  const overlay = document.getElementById("modalOverlay");
  const content = document.getElementById("modalContent");
  content.innerHTML = `
    <div class="modal-poster" style="background:${gradientFor(m.genres)}">
      <div class="poster-title">${m.title}</div>
    </div>
    <div class="modal-info">
      <button class="modal-close" onclick="window.__closeModal()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
      <p class="modal-eyebrow">${m.director}</p>
      <h2 class="modal-title">${m.title}</h2>
      <div class="modal-row">
        <span class="ticket">${starIcon()} ${m.rating.toFixed(1)}</span>
        <span class="year-tag">${m.year}</span>
        <span class="year-tag">${m.runtime} min</span>
        ${m.genres.map((g) => `<span class="genre-pill">${g}</span>`).join("")}
      </div>
      <p class="modal-synopsis">${m.synopsis}</p>
      <div class="modal-grid">
        <div class="modal-field"><label>Director</label><div>${m.director}</div></div>
        <div class="modal-field"><label>Runtime</label><div>${m.runtime} minutes</div></div>
      </div>
      <div class="modal-field">
        <label>Cast</label>
        <div class="cast-list">
          ${m.cast
            .map((c) => {
              const g = GENRE_COLORS[m.genres[0]] || ["#33313c", "#5a5568"];
              return `<span class="cast-chip"><span class="cast-avatar" style="background:${g[1]}">${initials(c)}</span>${c}</span>`;
            })
            .join("")}
        </div>
      </div>
      <div class="modal-actions">
        <a class="btn-primary" href="${watchUrl(m)}" target="_blank" rel="noopener">Where to watch</a>
        <a class="btn-ghost" href="${trailerUrl(m)}" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 4l14 8-14 8V4z"/></svg>
          Trailer
        </a>
        <button class="btn-ghost" onclick="window.__toggleFav(event, ${m.id})">${state.favorites.has(m.id) ? "Remove from watchlist" : "Add to watchlist"}</button>
      </div>
    </div>
  `;
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

/* ---------- FAVORITES ---------- */
function toggleFav(e, id) {
  if (e) e.stopPropagation();
  if (state.favorites.has(id)) state.favorites.delete(id);
  else state.favorites.add(id);
  document.getElementById("favCount").textContent = state.favorites.size;
  renderGrid();
  if (document.getElementById("modalOverlay").classList.contains("open"))
    openModal(id);
  document
    .querySelectorAll(".hero-slide.active .btn-ghost svg")
    .forEach((svg) => {});
  renderHero();
  goHero(heroIndex);
}

/* ---------- WIRE UP ---------- */
window.__openModal = openModal;
window.__closeModal = closeModal;
window.__toggleFav = toggleFav;

document.getElementById("searchInput").addEventListener("input", (e) => {
  state.search = e.target.value;
  renderGrid();
});
document.getElementById("sortSelect").addEventListener("change", (e) => {
  state.sort = e.target.value;
  renderGrid();
});
document.getElementById("favToggle").addEventListener("click", (e) => {
  state.favOnly = !state.favOnly;
  e.currentTarget.classList.toggle("active", state.favOnly);
  renderGrid();
});
document.getElementById("logoReset").addEventListener("click", () => {
  state = { ...state, search: "", genre: "All", favOnly: false };
  document.getElementById("searchInput").value = "";
  document.getElementById("favToggle").classList.remove("active");
  renderFilters();
  renderGrid();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
document.getElementById("modalOverlay").addEventListener("click", (e) => {
  if (e.target.id === "modalOverlay") closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

renderHero();
renderFilters();
renderGrid();
