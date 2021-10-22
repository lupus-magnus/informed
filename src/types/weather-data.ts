export type MainOptions =
  | "Thunderstorm"
  | "Drizzle"
  | "Rain"
  | "Clear"
  | "Clouds";

export type DailyWeather = {
  description: string;
  icon: string;
  id: number;
  main: MainOptions;
};

export type DailyData = {
  temperature: {
    max: number;
    min: number;
  };
  timestamp: number;
  weather: DailyWeather[];
};

export type WeatherApiResponseProps = {
  forecast: DailyData[];
  today: DailyData;
};
