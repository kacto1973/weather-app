export default function displayCityCard(cityObject) {
  console.log("Hola desde display city card");
  const section = document.getElementById("card-display-section");

  const article = document.createElement("article");
  article.className =
    "my-10 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 max-w-sm md:max-w-4xl mx-auto";

  article.innerHTML = `
      
        <!-- Cabecera con ciudad y favorito -->
        <div
          class="bg-gradient-to-r from-blue-600 to-blue-400 p-4 md:p-6 text-white"
        >
          <div class="flex justify-between items-start md:items-center">
            <div>
              <h3 class="text-xl md:text-3xl font-bold">${cityObject.name}, ${cityObject.sys.country}</h3>
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
                Capital de Alemania
              </p>
            </div>
            <button
              class="text-2xl md:text-3xl hover:scale-110 transition-transform"
              aria-label="Añadir a favoritos"
            >
              ☆
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
              <span class="text-5xl md:text-6xl">⛅</span>
              <div>
                <span class="text-4xl md:text-5xl font-bold text-gray-800"
                  >18°</span
                >
                <span class="text-gray-500">C</span>
                <p class="text-gray-600 text-sm md:text-base font-medium">
                  Parcialmente nublado
                </p>
              </div>
            </div>
            <div class="text-left md:text-right text-gray-600 ml-16 md:ml-0">
              <p class="text-xs md:text-sm">Sensación térmica</p>
              <p class="text-lg md:text-xl font-semibold">17°C</p>
            </div>
          </div>

          <!-- Detalles del clima - Responsive grid -->
          <div
            class="grid grid-cols-3 gap-2 md:gap-4 py-4 border-y border-gray-200"
          >
            <div class="text-center">
              <p class="text-gray-500 text-xs md:text-sm">Humedad</p>
              <p class="text-lg md:text-xl font-bold text-gray-800">76%</p>
            </div>
            <div class="text-center">
              <p class="text-gray-500 text-xs md:text-sm">Viento</p>
              <p class="text-lg md:text-xl font-bold text-gray-800">15 km/h</p>
            </div>
            <div class="text-center">
              <p class="text-gray-500 text-xs md:text-sm">Prob. lluvia</p>
              <p class="text-lg md:text-xl font-bold text-gray-800">30%</p>
            </div>
          </div>

          <!-- Recomendaciones - Mobile: vertical, Desktop: 2 columnas -->
          <div class="mt-6">
            <h4
              class="font-semibold text-gray-800 text-base md:text-lg mb-3 flex items-center gap-2"
            >
              <span class="text-xl">💡</span>
              Recomendaciones para hoy
            </h4>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
              <li
                class="flex items-start gap-2 text-sm md:text-base text-gray-700"
              >
                <span class="text-green-500 text-lg">✓</span>
                <span
                  ><span class="font-medium">Puerta de Brandeburgo</span> -
                  Ideal para fotos</span
                >
              </li>
              <li
                class="flex items-start gap-2 text-sm md:text-base text-gray-700"
              >
                <span class="text-green-500 text-lg">✓</span>
                <span
                  ><span class="font-medium">Museo de Pérgamo</span> -
                  Temperatura templada</span
                >
              </li>
              <li
                class="flex items-start gap-2 text-sm md:text-base text-gray-700"
              >
                <span class="text-green-500 text-lg">✓</span>
                <span
                  ><span class="font-medium">East Side Gallery</span> - Paseo al
                  aire libre</span
                >
              </li>
              <li
                class="flex items-start gap-2 text-sm md:text-base text-gray-700"
              >
                <span class="text-green-500 text-lg">✓</span>
                <span
                  ><span class="font-medium">Café en Kreuzberg</span> - Tarde
                  tranquila</span
                >
              </li>
              <li
                class="flex items-start gap-2 text-sm md:text-base text-gray-700 md:col-span-2"
              >
                <span class="text-green-500 text-lg">✓</span>
                <span
                  ><span class="font-medium">Torre de TV</span> - Vista
                  panorámica de la ciudad</span
                >
              </li>
            </ul>
          </div>

          <!-- Pronóstico 5 días - Mobile: horizontal scroll, Desktop: grid normal -->
          <div class="mt-6 pt-4 border-t border-gray-200">
            <h4 class="font-semibold text-gray-800 text-base md:text-lg mb-3">
              Pronóstico 5 días
            </h4>
            <div
              class="flex md:grid md:grid-cols-5 gap-4 overflow-x-auto pb-2 md:pb-0 md:overflow-visible"
            >
              <div class="flex-shrink-0 w-16 md:w-auto text-center">
                <p class="text-gray-600 text-sm md:text-base">Lun</p>
                <span class="text-2xl md:text-3xl block">⛅</span>
                <p class="font-bold text-sm md:text-base">19°/14°</p>
              </div>
              <div class="flex-shrink-0 w-16 md:w-auto text-center">
                <p class="text-gray-600 text-sm md:text-base">Mar</p>
                <span class="text-2xl md:text-3xl block">☀️</span>
                <p class="font-bold text-sm md:text-base">22°/15°</p>
              </div>
              <div class="flex-shrink-0 w-16 md:w-auto text-center">
                <p class="text-gray-600 text-sm md:text-base">Mié</p>
                <span class="text-2xl md:text-3xl block">🌧️</span>
                <p class="font-bold text-sm md:text-base">16°/12°</p>
              </div>
              <div class="flex-shrink-0 w-16 md:w-auto text-center">
                <p class="text-gray-600 text-sm md:text-base">Jue</p>
                <span class="text-2xl md:text-3xl block">☁️</span>
                <p class="font-bold text-sm md:text-base">17°/13°</p>
              </div>
              <div class="flex-shrink-0 w-16 md:w-auto text-center">
                <p class="text-gray-600 text-sm md:text-base">Vie</p>
                <span class="text-2xl md:text-3xl block">⛅</span>
                <p class="font-bold text-sm md:text-base">20°/14°</p>
              </div>
            </div>
          </div>

          <!-- Última actualización -->
          <div
            class="mt-4 text-xs md:text-sm text-gray-500 flex flex-col md:flex-row justify-between items-start md:items-center gap-2"
          >
            <span>🕐 Actualizado: 10:30 AM</span>
            <span
              class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs md:text-sm w-fit"
            >
              ⭐ Favorito
            </span>
          </div>
        </div>
      `;

  section.appendChild(article);
}
