export function displayCityCard(weather, forecast, places) {
  console.log("Hola desde display city card");

  localStorage.setItem("currentWeather", JSON.stringify(weather));
  localStorage.setItem("currentForecast", JSON.stringify(forecast));
  localStorage.setItem("currentPlaces", JSON.stringify(places));

  const filteredPlaces = places.features.filter(
    (place) => place.properties.name,
  );

  const section = document.getElementById("card-display-section");
  section.innerHTML = "";

  const esFavorito = isFavorite();

  const cityCardArticle = document.createElement("article");
  cityCardArticle.className =
    "bg-white h-full max-h-[500px] w-[80%] md:w-[700px] rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 max-w-sm md:max-w-4xl mx-auto";

  cityCardArticle.innerHTML = `
      
        <!-- Cabecera con ciudad y favorito -->
        <div
          class="bg-gradient-to-r from-blue-600 to-blue-400 p-4 md:p-6 text-white"
        >
          <div class="flex justify-between items-start md:items-center">
            <div>
              <h3 class="text-xl md:text-3xl font-bold">${weather.name}, ${weather.sys.country}</h3>
              <p
                class="text-blue-100 text-sm md:text-base flex items-center gap-1 mt-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Ciudad Seleccionada
              </p>
            </div>
            <button
              class="text-md rounded-md px-4 py-2 bg-white font-bold hover:bg-yellow-400 text-black hover:text-white transition-colors duration-300"
              id="favorite-btn"
            >
              ${esFavorito ? "Favorito ⭐" : "Agregar a favoritos"}
            </button>
          </div>
        </div>

        <!-- Contenido principal -->
        <div class="p-4 md:p-6">
          <!-- Clima actual - Mobile: vertical, Desktop: horizontal -->
          <div
            class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0 mb-6"
          >
            <div class="flex items-center gap-4">
              <span class="text-5xl md:text-6xl">${getWeatherIcon(weather.weather[0].icon)}</span>
              <div>
                <span class="text-4xl md:text-5xl font-bold text-gray-800"
                  >${Math.round(weather.main.temp)}°</span
                >
                <span class="text-gray-500">C</span>
                <p class="text-gray-600 text-sm md:text-base font-medium">
                  ${getWeatherDescription(weather.weather[0].icon)}
                </p>
              </div>
            </div>
            <div class="text-left md:text-right text-gray-600 ml-16 md:ml-0">
              <p class="text-xs md:text-sm">Sensación térmica</p>
              <p class="text-lg md:text-xl font-semibold">${Math.round(weather.main.feels_like)}°C</p>
            </div>
          </div>

          <!-- Detalles del clima - Responsive grid -->
          <div
            class="grid grid-cols-3 gap-2 md:gap-4 py-4 border-y border-gray-200"
          >
            <div class="text-center">
              <p class="text-gray-500 text-xs md:text-sm">Humedad</p>
              <p class="text-lg md:text-xl font-bold text-gray-800">${weather.main.humidity}%</p>
            </div>
            <div class="text-center">
              <p class="text-gray-500 text-xs md:text-sm">Viento</p>
              <p class="text-lg md:text-xl font-bold text-gray-800">${(weather.wind.speed * 3.6).toFixed(1)} km/h</p>
            </div>
            <div class="text-center">
              <p class="text-gray-500 text-xs md:text-sm">Prob. lluvia</p>
              <p class="text-lg md:text-xl font-bold text-gray-800">${(forecast.list[0].pop * 100).toFixed(0)}% </p>
            </div>
          </div>

        

          <!-- Pronóstico 5 días - Mobile: horizontal scroll, Desktop: grid normal -->
          <div class="mt-6 pt-4">
            <h4 class="font-semibold text-gray-800 text-base md:text-lg mb-3">
              Pronóstico 5 días
            </h4>
            <div
              class="flex md:grid md:grid-cols-5 gap-4 overflow-x-auto pb-2 md:pb-0 md:overflow-visible"
            >
              <div class="flex-shrink-0 w-16 md:w-auto text-center">
                <p class="text-gray-600 text-sm md:text-base">Lun</p>
                <span class="text-2xl md:text-3xl block">${getWeatherIcon(forecast.list[0].weather[0].icon)}</span>
                <p class="font-bold text-sm md:text-base">${Math.round(forecast.list[0].main.temp_max)}°</p>
              </div>
              <div class="flex-shrink-0 w-16 md:w-auto text-center">
                <p class="text-gray-600 text-sm md:text-base">Mar</p>
                <span class="text-2xl md:text-3xl block">${getWeatherIcon(forecast.list[7].weather[0].icon)}</span>
                <p class="font-bold text-sm md:text-base">${Math.round(forecast.list[7].main.temp_max)}°</p>
             
              </div>
              <div class="flex-shrink-0 w-16 md:w-auto text-center">
                <p class="text-gray-600 text-sm md:text-base">Mié</p>
                <span class="text-2xl md:text-3xl block">${getWeatherIcon(forecast.list[15].weather[0].icon)}</span>
                <p class="font-bold text-sm md:text-base">${Math.round(forecast.list[15].main.temp_max)}°</p>
             
              </div>
              <div class="flex-shrink-0 w-16 md:w-auto text-center">
                <p class="text-gray-600 text-sm md:text-base">Jue</p>
                <span class="text-2xl md:text-3xl block">${getWeatherIcon(forecast.list[23].weather[0].icon)}</span>
                <p class="font-bold text-sm md:text-base">${Math.round(forecast.list[23].main.temp_max)}°</p>
             
              </div>
              <div class="flex-shrink-0 w-16 md:w-auto text-center">
                <p class="text-gray-600 text-sm md:text-base">Vie</p>
                <span class="text-2xl md:text-3xl block">${getWeatherIcon(forecast.list[31].weather[0].icon)}</span>
                <p class="font-bold text-sm md:text-base">${Math.round(forecast.list[31].main.temp_max)}°</p>
             
              </div>
            </div>
          </div>
        </div>
      `;

  const placesArticle = document.createElement("article");
  placesArticle.className =
    "my-10 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 max-w-sm md:max-w-4xl mx-auto";
  placesArticle.innerHTML = `
    <div class="p-4 md:p-6">
      <h4 class="font-semibold text-gray-800 text-base md:text-lg mb-3">Lugares turísticos cercanos</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        ${filteredPlaces
          .map(
            (place) => `
          <div class="border rounded-lg p-4 flex flex-col gap-2">
            <h5 class="font-bold text-gray-800">${place.properties.name || "Lugar sin nombre"}</h5>
          </div>
        `,
          )
          .join("")}
      </div>
    </div>
  `;

  section.appendChild(cityCardArticle);

  const placesSection = document.getElementById("places-section");
  placesSection.innerHTML = "";
  placesSection.appendChild(placesArticle);

  const favoriteBtn = document.getElementById("favorite-btn");
  favoriteBtn.addEventListener("click", () => {
    const nombreCiudad = document.getElementById("search-city-input").value;
    if (isFavorite()) {
      deleteFromFavorites(nombreCiudad);
    } else {
      addToFavorites(nombreCiudad);
    }
    loadFavorites();
    displayCityCard(weather, forecast, places);
  });
}

function isFavorite() {
  const nombreCiudad = document.getElementById("search-city-input").value;
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  return favorites.includes(nombreCiudad.toLowerCase());
}

function addToFavorites(nombreCiudad) {
  console.log("Agregando a favoritos: ", nombreCiudad);

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  const exists = favorites.find((item) => item === nombreCiudad.toLowerCase());

  if (!exists) {
    favorites.push(nombreCiudad.toLowerCase());
    //sobreescribimos el antiguo favoritos con el nuevo
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
}

function deleteFromFavorites(nombreCiudad) {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  const newFavorites = favorites.filter(
    (item) => item != nombreCiudad.toLowerCase(),
  );

  //sobreescribimos el antiguo favoritos con el nuevo
  localStorage.setItem("favorites", JSON.stringify(newFavorites));
}

function getFavorites() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return favorites;
}

export function saveToHistory(nombreCiudad) {
  const history = JSON.parse(localStorage.getItem("history")) || [];

  const exists = history.find((item) => item === nombreCiudad.toLowerCase());

  if (!exists) {
    history.push(nombreCiudad.toLowerCase());
    //sobreescribimos el antiguo historial con el nuevo
    localStorage.setItem("history", JSON.stringify(history));
  }
}

function deleteFromHistory(nombreCiudad) {
  const history = JSON.parse(localStorage.getItem("history")) || [];

  const newHistory = history.filter(
    (item) => item != nombreCiudad.toLowerCase(),
  );

  //sobreescribimos el antiguo historial con el nuevo
  localStorage.setItem("history", JSON.stringify(newHistory));
}

function getHistory() {
  const history = JSON.parse(localStorage.getItem("history")) || [];

  return history;
}

export function loadFavorites() {
  const favoritesList = document.getElementById("favorites-list");
  favoritesList.innerHTML = "";

  const favorites = getFavorites();

  favorites.forEach((ciudad) => {
    const li = document.createElement("li");
    li.className =
      "hover:scale-105 relative transition-transform duration-300 rounded-md px-4 py-4 my-2 w-[300px] flex justify-center cursor-pointer bg-gradient-to-r from-blue-600 to-blue-400 p-4 md:p-6 text-white font-bold";

    li.innerHTML = `
      <span>${ciudad}</span>
      <button class="delete-btn absolute right-2 top-1 text-white font-bold text-xl" aria-label="Eliminar">
        X
      </button>
    `;

    const deleteBtn = li.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteFromFavorites(ciudad);
      li.remove();

      const currentCity = document
        .getElementById("search-city-input")
        .value.toLowerCase();
      if (currentCity === ciudad) {
        displayCityCard(
          JSON.parse(localStorage.getItem("currentWeather")),
          JSON.parse(localStorage.getItem("currentForecast")),
          JSON.parse(localStorage.getItem("currentPlaces")),
        );
      } else {
        loadFavorites();
      }
    });

    li.addEventListener("click", (e) => {
      console.log("Ciudad seleccionada desde los favoritos: ", ciudad);
      document.getElementById("search-city-input").value = ciudad;
      document.getElementById("search-city-button").click();
    });

    favoritesList.appendChild(li);
  });
}

export function loadHistory() {
  const historyList = document.getElementById("search-history-list");
  historyList.innerHTML = "";

  const history = getHistory();

  history.forEach((ciudad) => {
    const li = document.createElement("li");
    li.className =
      "hover:scale-105 bg-white relative transition-transform duration-300 border border-2 border-gray-300 rounded-md px-4 py-4 my-2 shadow-lg w-[300px] flex justify-center cursor-pointer";

    li.innerHTML = `
      <span>${ciudad}</span>
      <button class="delete-btn absolute right-2 top-1 text-red-500 hover:text-red-700 font-bold text-xl" aria-label="Eliminar">
        X
      </button>
    `;

    const deleteBtn = li.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteFromHistory(ciudad);
      li.remove();
    });

    li.addEventListener("click", (e) => {
      console.log("Ciudad seleccionada desde el historial: ", ciudad);
      document.getElementById("search-city-input").value = ciudad;
      document.getElementById("search-city-button").click();
    });

    historyList.appendChild(li);
  });
}

function getWeatherIcon(iconCode) {
  const iconMap = {
    "01d": "☀️",
    "01n": "🌙",
    "02d": "⛅",
    "02n": "☁️",
    "03d": "☁️",
    "03n": "☁️",
    "04d": "☁️",
    "04n": "☁️",
    "09d": "🌧️",
    "09n": "🌧️",
    "10d": "🌦️",
    "10n": "🌧️",
    "11d": "⛈️",
    "11n": "⛈️",
    "13d": "❄️",
    "13n": "❄️",
    "50d": "🌫️",
    "50n": "🌫️",
  };
  return iconMap[iconCode] || "☀️";
}

function getWeatherDescription(iconCode) {
  const descripcionMap = {
    "01d": "Cielo despejado",
    "01n": "Cielo despejado",
    "02d": "Parcialmente nublado",
    "02n": "Parcialmente nublado",
    "03d": "Nubes dispersas",
    "03n": "Nubes dispersas",
    "04d": "Muy nublado",
    "04n": "Muy nublado",
    "09d": "Lluvia ligera",
    "09n": "Lluvia ligera",
    "10d": "Lluvia",
    "10n": "Lluvia",
    "11d": "Tormenta",
    "11n": "Tormenta",
    "13d": "Nieve",
    "13n": "Nieve",
    "50d": "Niebla",
    "50n": "Niebla",
  };

  return descripcionMap[iconCode] || "Clima variable";
}
