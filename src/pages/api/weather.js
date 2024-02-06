export default async function handler(req, res) {
  const city = req.query.city;
  const country = req.query.country;
  const api_key = "7c91776fb1267161889e298c3e7ceb4b";
  const access_token =
    "pk.eyJ1IjoiYmFkcmFsNTc3NyIsImEiOiJjbHM1Z2JveXcxZXF1MmpwYWI1bXZxczE1In0.idkVgmnev2edzbZrlY0FdA";

  const coordinates = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?country=${country}&access_token=${access_token}`
  );
  const coordinate = await coordinates.json();

  const lat = coordinate.features[0].geometry.coordinates[1];
  const lon = coordinate.features[0].geometry.coordinates[0];

  const weathers = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=Metric&appid=${api_key}`
  );

  const weather = await weathers.json();

  res.status(200).json(weather);
}
