export default async function getForecast(nombreCiudad) {
  const fetchUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    nombreCiudad +
    "&appid=22866b901f0841c146aa3a87dd521a4d&units=metric&lang=es";
  const res = await fetch(fetchUrl);

  return res.json();
}
