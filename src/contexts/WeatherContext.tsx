import React, { useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LocationProps } from "../types/location";
import { getWeatherForecast } from "../api";
import { ConfigsContext } from "./ConfigsContext";
import { WeatherApiResponseProps } from "../types/weather-data";

export type WeatherMainOptions =
  | "Thunderstorm"
  | "Drizzle"
  | "Rain"
  | "Clear"
  | "Clouds";

type WeatherDataProps = {
  fulfilled: boolean;
  data: WeatherApiResponseProps | {};
};

type WeatherContextProps = {
  weatherData: WeatherDataProps;
  weatherMappingObj: {
    thunderstorm: string;
    drizzle: string;
    rain: string;
    snow: string;
    clear: string;
    clouds: string;
  };
};

export const WeatherContext = React.createContext({} as WeatherContextProps);

const WeatherProvider: React.FC = ({ children }) => {
  const [weatherData, setWeatherData] = useState<WeatherDataProps>({
    fulfilled: false,
    data: {},
  });
  const [hasWeatherStored, setHasWeatherStored] = useState(false);
  const [lastWeatherFetchedDay, setLastWeatherFetchedDay] = useState<
    null | number
  >(null);
  const { location } = useContext(ConfigsContext);
  // TODO: Dá pra armazenar o timestamp do today como lastChecked. Assim dá sempre pra fazer o cálculo se já passou 24h.
  // FIXME: Tô tendo algum bug com esse fluxo. Os null parecem estar retornando como truthy.

  // Checks if there is any valid data in the user storage. If there is, fill weatherData state with it.
  const handleGetStoredWeather = async () => {
    console.log("checking if there is an existing last weather stored...");
    const value = await AsyncStorage.getItem("@weather_last_fetched");
    try {
      if (value) {
        console.log("retrieved weather value:", value);
        const retrievedData = JSON.parse(value) as WeatherApiResponseProps;
        const lastTimeFetched = retrievedData.today.timestamp;
        console.log(
          "lastTimeFetched - from getStoredWeather:",
          lastTimeFetched
        );
        setHasWeatherStored(true);
        setLastWeatherFetchedDay(lastTimeFetched);
        return { retrievedData, lastTimeFetched };
      } else {
        return { retrievedData: undefined, lastTimeFetched: undefined };
      }
    } catch (e) {
      console.log("Erro:", e);
      return { retrievedData: undefined, lastTimeFetched: undefined };
    }
  };

  // Implements the logic to decide when to make new requests to the api.
  const handleManageWeatherRequests = async () => {
    const oneDay = 60 * 60 * 24;
    const timeNow = Math.floor(new Date().getTime() / 1000); // getTime() counts miliseconds, while unixTimeStamp counts seconds. That's why we divide by 1000.
    const { retrievedData, lastTimeFetched } = await handleGetStoredWeather();
    const shouldRequestNewData =
      !lastTimeFetched || (timeNow - lastTimeFetched) / oneDay > 1;
    console.log(
      "hours passed since last fetch:",
      (timeNow - (lastTimeFetched as number)) / oneDay
    );

    if (shouldRequestNewData) {
      setWeatherData({
        fulfilled: false,
        data: {},
      });
      getNewWeatherData();
    } else {
      setWeatherData({
        fulfilled: true,
        data: retrievedData as WeatherApiResponseProps,
      });
    }
  };

  const getNewWeatherData = async () => {
    const { lat, lon } = location as LocationProps;
    const newWeatherData = await getWeatherForecast(lat, lon);
    setWeatherData({ fulfilled: true, data: newWeatherData });
    const serializedWeatherData = JSON.stringify(newWeatherData);
    await AsyncStorage.setItem("@weather_last_fetched", serializedWeatherData);
  };

  // Entrypoint for managing weather data requests.
  useEffect(() => {
    if (location) {
      handleManageWeatherRequests();
    }
  }, [location]);

  const weatherMappingObj = {
    thunderstorm: "chuva",
    drizzle: "chuvisco",
    rain: "chuva",
    snow: "chuva",
    clear: "sol",
    clouds: "nublado",
  };

  return (
    <WeatherContext.Provider value={{ weatherData, weatherMappingObj }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
