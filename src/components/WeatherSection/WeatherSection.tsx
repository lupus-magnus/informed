import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Typography from "../Typography/Typography";

const logo = require("../../../assets/app/logo_transparent.png");
const thermometer = require("../../../assets/weather/thermometer.png");
import { CountUp } from "use-count-up";

import SunIcon from "../icons/SunIcon";
import CloudIcon from "../icons/CloudIcon";

const WeatherBoxes: React.FC = () => {
  return (
    <View style={styles.boxContainer}>
      <View style={{ ...styles.box, ...styles.scaledDownBox }}>
        <Typography
          style={styles.scaledDownText}
          color="rgba(85, 85, 85, 1)"
          fontFamily="noto-sans"
          type={1}
        >
          ONTEM
        </Typography>
      </View>
      <View style={styles.box}>
        <Typography
          style={{ fontSize: 20 }}
          color="rgba(85, 85, 85, 1)"
          fontFamily="noto-sans"
          type={1}
        >
          HOJE
        </Typography>

        <View style={styles.weatherIconContainer}>
          <CloudIcon width={60} height={30} style={styles.iconStyle} />
        </View>
      </View>
      <View style={{ ...styles.box, ...styles.scaledDownBox }}>
        <Typography
          style={styles.scaledDownText}
          color="rgba(85, 85, 85, 1)"
          fontFamily="noto-sans"
          type={1}
        >
          AMANHÃ
        </Typography>
      </View>
    </View>
  );
};

const dailyReportData = {
  climate: "Chuva leve",
  maxTemp: 26.5,
  minTemp: 18,
};

type dailyReportDataProps = {
  climate: string;
  maxTemp: number;
  minTemp: number;
};

const DailyReport: React.FC<dailyReportDataProps> = (data) => {
  return (
    <View style={styles.reportContainer}>
      <View style={{ alignSelf: "flex-end" }}>
        <Typography style={styles.reportText} fontFamily="rajdhani" type={1}>
          Clima: {data.climate}
        </Typography>
        <Typography style={styles.reportText} fontFamily="rajdhani" type={1}>
          Máxima:{" "}
          <CountUp isCounting start={-10.0} end={data.maxTemp} duration={2.5} />
          °
        </Typography>
        <Typography style={styles.reportText} fontFamily="rajdhani" type={1}>
          Mínima:{" "}
          <CountUp isCounting start={-10.0} end={data.minTemp} duration={3.5} />
          °
        </Typography>
      </View>
      <Image style={styles.thermometer} source={thermometer} />
    </View>
  );
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
  reportText: {
    color: "#555555",
  },
  reportContainer: {
    width: "100%",
    flexDirection: "row",
    marginLeft: 30,
    justifyContent: "space-between",
    paddingBottom: 10,
  },

  thermometer: {
    alignSelf: "center",
  },
});

export default WeatherSection;
