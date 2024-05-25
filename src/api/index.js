const baseURL = 'https://api.weatherapi.com/v1/current.json?key=04c168697c964cb8967152712242405';

export const getWeatherDataForCity = async (city) => {
  if (!city || typeof city !== 'string') {
    throw new Error("Invalid city parameter");
  }

  const response = await fetch(`${baseURL}&q=${encodeURIComponent(city)}&aqi=yes`);
  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }
  
  return await response.json();
};
