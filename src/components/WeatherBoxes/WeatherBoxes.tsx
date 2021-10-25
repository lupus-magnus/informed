import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Typography from "../../components/Typography/Typography";
import { WeatherMainOptions } from "../../contexts/WeatherContext";

import { LightRainIcon, HeavyRainIcon, CloudIcon, SunIcon } from "../icons";

type BoxProps = {
  size: "big" | "sm";
  text: "HOJE" | "DEPOIS" | "AMANHÃ";
};
const Box: React.FC<BoxProps> = ({ size, text, ...props }) => {
  const boxStyle =
    size === "big"
      ? { ...styles.box }
      : { ...styles.box, ...styles.scaledDownBox };

  return (
    <View style={boxStyle}>
      <Typography
        style={size !== "big" ? styles.scaledDownText : { fontSize: 18 }}
        color="rgba(85, 85, 85, 1)"
        fontFamily="noto-sans"
        type={1}
      >
        {text}
      </Typography>
      <View style={styles.weatherIconContainer}>{props.children}</View>
    </View>
  );
};

const WeatherBoxes: React.FC<{ data: any }> = ({ data }) => {
  const weatherMappedIcons = {
    chuva: <HeavyRainIcon height={35} style={styles.iconStyle} />,
    chuvisco: (
      <LightRainIcon
        height={35}
        style={{ ...styles.iconStyle, transform: [{ scale: 0.9 }] }}
      />
    ),
    sol: <SunIcon height={35} style={styles.iconStyle} />,
    nublado: <CloudIcon height={35} style={styles.iconStyle} />,
  } as const;

  const weatherMappingObj = {
    Thunderstorm: "chuva",
    Drizzle: "chuvisco",
    Rain: "chuva",
    Snow: "chuva",
    Clear: "sol",
    Clouds: "nublado",
  } as const;

  const { today, forecast } = data.data;
  const [tomorrow, dayAfter] = forecast;

  const todayWeather =
    weatherMappingObj[today.weather[0].main as WeatherMainOptions];
  const mappedTodayWeather = weatherMappedIcons[todayWeather];

  const tomorrowWeather =
    weatherMappingObj[tomorrow.weather[0].main as WeatherMainOptions];
  const mappedTomorrowWeather = weatherMappedIcons[tomorrowWeather];

  const dayAfterWeather =
    weatherMappingObj[dayAfter.weather[0].main as WeatherMainOptions];
  const mappedDayAfterWeather = weatherMappedIcons[dayAfterWeather];

  useEffect(() => {
    console.log("tomorrow:", tomorrow);
    console.log("dayAfter:", dayAfter);
  }, []);
  return (
    <View style={styles.boxContainer}>
      <Box size="sm" text="HOJE">
        {mappedTodayWeather}
      </Box>

      <Box size="sm" text="AMANHÃ">
        {mappedTomorrowWeather}
      </Box>

      <Box size="sm" text="DEPOIS">
        {mappedDayAfterWeather}
      </Box>
    </View>
  );
};

export default WeatherBoxes;

const styles = StyleSheet.create({
  weatherIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    width: "100%",
  },
  iconStyle: {
    flexShrink: 1,
    maxWidth: "90%",
  },

  box: {
    height: 66,
    width: 66,
    backgroundColor: "rgba(196,196,196, 0.8)",
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: "center",
  },
  boxContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  scaledDownBox: {
    transform: [{ scale: 0.9 }],
  },
  scaledDownText: {
    fontSize: 13,
  },
});
