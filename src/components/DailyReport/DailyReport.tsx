import React from "react";
import { StyleSheet, View, Image, Pressable, Alert } from "react-native";
import { CountUp } from "use-count-up";

import { useNavigation } from "@react-navigation/core";
import Typography from "../../components/Typography/Typography";
import { NavigateProp } from "../../../App";
import { WeatherMainOptions } from "../../contexts/WeatherContext";
const thermometer = require("../../../assets/weather/thermometer.png");
const gearIcon = require("../../../assets/generic/gear.png");

type dailyReportDataProps = {
  climate: string;
  maxTemp: number;
  minTemp: number;
};

const DailyReport: React.FC<dailyReportDataProps> = (data) => {
  const navigation = useNavigation<NavigateProp>();
  const translateClimate = {
    Thunderstorm: "Chuva",
    Drizzle: "Chuvisco",
    Rain: "Chuva",
    Snow: "Neve",
    Clear: "Ensolarado",
    Clouds: "Nublado",
  };
  return (
    <View style={styles.reportContainer}>
      <View style={{ alignSelf: "flex-end" }}>
        <Typography style={styles.reportText} fontFamily="rajdhani" type={1}>
          Clima: {translateClimate[data.climate as WeatherMainOptions]}
        </Typography>
        <Typography style={styles.reportText} fontFamily="rajdhani" type={1}>
          Máxima:{" "}
          <CountUp isCounting start={-10} end={data.maxTemp} duration={3.5} />°
        </Typography>
        <Typography style={styles.reportText} fontFamily="rajdhani" type={1}>
          Mínima:{" "}
          <CountUp isCounting start={-10} end={data.minTemp} duration={3.5} />°
        </Typography>
      </View>
      <Pressable
        android_ripple={{ color: "#0001", borderless: true }}
        style={styles.imageComponent}
        onPress={() => navigation.navigate("Configs")}
      >
        <Image style={styles.gear} source={gearIcon} />
      </Pressable>
      <Image style={styles.thermometer} source={thermometer} />
    </View>
  );
};

export default DailyReport;

const styles = StyleSheet.create({
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
  imageComponent: {
    marginLeft: 70,
    alignSelf: "center",
  },
  gear: {
    width: 40,
    height: 40,
    alignSelf: "center",
  },
});
