import React from "react";
import { StyleSheet, View, ImageBackground, Image, Text } from "react-native";
import Typography from "../Typography/Typography";
const logo = require("../../../assets/app/logo_transparent.png");

const WeatherSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(243,244,241,0.2)",
    alignItems: "center",
    height: "40%",
    width: "95%",
    marginTop: "20%",
    borderRadius: 20,
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
