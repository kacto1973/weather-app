export async function getWeather(nombreCiudad) {
  const fetchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${nombreCiudad}&appid=22866b901f0841c146aa3a87dd521a4d&units=metric&lang=es`;
  const res = await fetch(fetchUrl);
  return res.json();
}

export async function getForecast(nombreCiudad) {
  const fetchUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${nombreCiudad}&appid=22866b901f0841c146aa3a87dd521a4d&units=metric`;
  const res = await fetch(fetchUrl);
  return res.json();
}

export async function getPlaces(nombreCiudad) {
  const cityName = nombreCiudad.trim();

  if (!cityName) {
    alert("Por favor ingresa una ciudad");
    return;
  }

  const apiKey = "5ae2e3f221c38a28845f05b6f737692089db5f8080bca096fcb65f53";

  try {
    // Mostrar mensaje de carga (opcional)
    console.log(`Buscando lugares en ${cityName}...`);

    // 1. Primero obtener las coordenadas de la ciudad
    const geonameResponse = await fetch(
      `https://api.opentripmap.com/0.1/en/places/geoname?name=${cityName}&apikey=${apiKey}`,
    );

    const geonameData = await geonameResponse.json();

    if (!geonameData || !geonameData.lat) {
      alert("No se encontró la ciudad. Por favor verifica el nombre.");
      return;
    }

    // 2. Obtener lugares turísticos cercanos
    const placesResponse = await fetch(
      `https://api.opentripmap.com/0.1/en/places/radius?radius=5000&lon=${geonameData.lon}&lat=${geonameData.lat}&limit=20&apikey=${apiKey}`,
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
