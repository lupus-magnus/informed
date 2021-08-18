import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Typography from "../../components/Typography/Typography";

import CloudIcon from "../../components/icons/CloudIcon";
import SunIcon from "../icons/SunIcon";

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
        <View style={styles.weatherIconContainer}>
          <CloudIcon width={60} height={30} style={styles.iconStyle} />
        </View>
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
          <SunIcon width={30} height={30} style={styles.iconStyle} />
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
        <View style={styles.weatherIconContainer}>
          <CloudIcon width={60} height={30} style={styles.iconStyle} />
        </View>
      </View>
    </View>
  );
};

export default WeatherBoxes;

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
