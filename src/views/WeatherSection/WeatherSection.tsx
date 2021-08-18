import React from "react";
import { StyleSheet, View, Image } from "react-native";

import { WeatherBoxes, DailyReport } from "../../components";
import SunIcon from "../../components/icons/SunIcon";

const logo = require("../../../assets/app/logo_transparent.png");
const thermometer = require("../../../assets/weather/thermometer.png");

const dailyReportData = {
  climate: "Chuva leve",
  maxTemp: 26.5,
  minTemp: 18,
};

const IconContainer: React.FC = () => {
  return (
    <View style={styles.weatherIconContainer}>
      <SunIcon style={styles.iconStyle} />
    </View>
  );
};

const WeatherSection: React.FC = () => {
  return (
    <View style={styles.weatherSectionContainer}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      <WeatherBoxes />
      <IconContainer />
      <DailyReport
        climate={dailyReportData.climate}
        maxTemp={dailyReportData.maxTemp}
        minTemp={dailyReportData.minTemp}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  weatherIconContainer: {
    justifyContent: "center",
    alignItems: "center",

    // borderStyle: "solid",
    // borderWidth: 1,
    // borderColor: "black",

    flexGrow: 1,
    width: "100%",
  },
  iconStyle: {
    flexShrink: 1,
    maxWidth: "90%",
  },
  weatherSectionContainer: {
    backgroundColor: "rgba(243,244,241,0.2)",
    alignItems: "center",
    height: "40%",
    width: "95%",
    marginTop: "20%",
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

export default WeatherSection;
