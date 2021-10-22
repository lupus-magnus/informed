import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import { WeatherBoxes, DailyReport, InformedLogoIcon } from "../../components";

import {
  CloudIcon,
  HeavyRainIcon,
  SunIcon,
  LightRainIcon,
} from "../../components/icons";
import {
  WeatherContext,
  WeatherMainOptions,
} from "../../contexts/WeatherContext";
import { WeatherApiResponseProps } from "../../types/weather-data";

const logo = require("../../../assets/app/logo_transparent.png");

const styles = StyleSheet.create({
  weatherIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    width: "100%",
  },
  separator: {
    width: "60%",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderColor: "#555",
  },
  iconStyle: {
    flexShrink: 1,
    maxWidth: "90%",
  },
  weatherSectionContainer: {
    backgroundColor: "rgba(243,244,241,0.2)",
    alignItems: "center",
    height: "100%",
    borderRadius: 20,
    justifyContent: "space-between",
  },
  logo: {
    height: 160,
    width: 105,
    opacity: 0.2,
  },
  logoContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
});

const dailyReportData = {
  climate: "Chuva leve",
  maxTemp: 26.5,
  minTemp: 18,
};

const weatherAnimatedIcons = {
  chuva: <HeavyRainIcon animated style={styles.iconStyle} />,
  chuvisco: (
    <LightRainIcon
      animated
      style={{ ...styles.iconStyle, transform: [{ scale: 0.9 }] }}
    />
  ),
  sol: <SunIcon animated style={styles.iconStyle} />,
  nublado: <CloudIcon animated style={styles.iconStyle} />,
};

const IconContainer: React.FC<{ mainWeather: WeatherMainOptions }> = ({
  mainWeather,
}) => {
  const weatherMappingObj = {
    Thunderstorm: "chuva",
    Drizzle: "chuvisco",
    Rain: "chuva",
    Snow: "chuva",
    Clear: "sol",
    Clouds: "nublado",
  } as const;

  const mappedWeather = weatherMappingObj[mainWeather];
  return (
    <View style={styles.weatherIconContainer}>
      {weatherAnimatedIcons[mappedWeather]}
    </View>
  );
};

const WeatherSection: React.FC = () => {
  // const [isLoading, setIsLoading] = useState(true);
  const { weatherData } = useContext(WeatherContext);

  const handleWeatherMapping = (mainWeatherRaw: string): string => {
    const mainWeather = mainWeatherRaw.toLowerCase();
    return mainWeather;
  };
  // const handleWeatherMapping = (mainWeatherRaw: string): string => {

  // }
  return (
    <View style={styles.weatherSectionContainer}>
      {!weatherData.fulfilled ? (
        <View
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <InformedLogoIcon style={{ minHeight: "80%" }} />
        </View>
      ) : (
        <>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
          </View>
          <WeatherBoxes />
          <IconContainer
            mainWeather={
              (weatherData.data as WeatherApiResponseProps).today.weather[0]
                .main
            }
          />
          <View style={styles.separator} />
          <DailyReport
            climate={
              (weatherData.data as WeatherApiResponseProps).today.weather[0]
                .main
            }
            maxTemp={Math.floor(
              (weatherData.data as WeatherApiResponseProps).today.temperature
                .max
            )}
            minTemp={Math.floor(
              (weatherData.data as WeatherApiResponseProps).today.temperature
                .min
            )}
          />
        </>
      )}
    </View>
  );
};

export default WeatherSection;
