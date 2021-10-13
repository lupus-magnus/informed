import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import { WeatherBoxes, DailyReport, InformedLogoIcon } from "../../components";
import SunIcon from "../../components/icons/SunIcon";
import { CloudIcon } from "../../components/icons";

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
  sun: (
    <SunIcon
      animated
      style={{
        ...styles.iconStyle,
      }}
    />
  ),
  clouds: <CloudIcon animated style={styles.iconStyle} />,
};

const IconContainer: React.FC = () => {
  return (
    <View style={styles.weatherIconContainer}>
      {weatherAnimatedIcons.clouds}
    </View>
  );
};

const WeatherSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);
  return (
    <View style={styles.weatherSectionContainer}>
      {isLoading ? (
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
          <IconContainer />
          <View style={styles.separator} />
          <DailyReport
            climate={dailyReportData.climate}
            maxTemp={dailyReportData.maxTemp}
            minTemp={dailyReportData.minTemp}
          />
        </>
      )}
    </View>
  );
};

export default WeatherSection;
