const key = "AJw2EABep70mQZARDthUvaFARDToIlOr";
//get weather information

// Done
// Get City Part
const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;
  const response = await fetch(base + query);
  if (response.status != 200) {
    throw new Error("CANNOT REACH");
  }
  const data = await response.json();

  return data[0];
};
// Done
// Get weather Part
const getWeather = async (id) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];
};

// getCity("manchester")
//   .then((data) => {
//     return getWeather(data.Key);
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// getWeather(329260);
