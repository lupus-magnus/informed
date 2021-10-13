const apiKey = "df515d0721951aa4125d1fdd58d63243";

const filterWeatherData = (data: any) => {
  const originalForecast = data.daily.map((day: any) => ({
    timestamp: day.dt,
    weather: day.weather,
    temperature: {
      max: day.temp.max,
      min: day.temp.min,
    },
  }));
  const today = originalForecast[0];

  const forecast = originalForecast.slice(1, 3);
  const filteredWeatherData = {
    today,
    forecast,
  };
  return filteredWeatherData;
};

export const getWeatherForecast = async (
  lat: number | string,
  lon: number | string
): Promise<any> => {
  const endpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=metric`;
  const res = await fetch(endpoint, {
    method: "GET",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:93.0) Gecko/20100101 Firefox/93.0",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  const filteredData = filterWeatherData(data);

  console.log("weather API response:", filteredData);
};
