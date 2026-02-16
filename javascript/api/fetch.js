import { CONFIG } from "../../config.js";

export async function getWeather(nombreCiudad) {
  const fetchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${nombreCiudad}&appid=${CONFIG.OPEN_WEATHER_API_KEY}&units=metric&lang=es`;
  const res = await fetch(fetchUrl);
  return res.json();
}

export async function getForecast(nombreCiudad) {
  const fetchUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${nombreCiudad}&appid=${CONFIG.OPEN_WEATHER_API_KEY}&units=metric`;
  const res = await fetch(fetchUrl);
  return res.json();
}

export async function getPlaces(nombreCiudad) {
  const cityName = nombreCiudad.trim();

  try {
    // Mostrar mensaje de carga (opcional)
    console.log(`Buscando lugares en ${cityName}...`);

    // 1. Primero obtener las coordenadas de la ciudad
    const geonameResponse = await fetch(
      `https://api.opentripmap.com/0.1/en/places/geoname?name=${cityName}&apikey=${CONFIG.OPEN_TRIP_MAP_API_KEY}`,
    );

    const geonameData = await geonameResponse.json();

    if (!geonameData || !geonameData.lat) {
      alert("No se encontró la ciudad. Por favor verifica el nombre.");
      return;
    }

    // 2. Obtener lugares turísticos cercanos
    const placesResponse = await fetch(
      `https://api.opentripmap.com/0.1/en/places/radius?radius=5000&lon=${geonameData.lon}&lat=${geonameData.lat}&limit=20&apikey=${CONFIG.OPEN_TRIP_MAP_API_KEY}`,
    );

    const placesData = await placesResponse.json();

    // 3. Mostrar los resultados
    console.log(`Lugares encontrados en ${cityName}:`, placesData);

    return placesData;
  } catch (error) {
    console.error("Error:", error);
    alert("Ocurrió un error al buscar los lugares");
  }
}
