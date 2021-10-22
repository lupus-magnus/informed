import React from "react";
import { StyleSheet, View } from "react-native";
import Typography from "../../components/Typography/Typography";

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
const WeatherBoxes: React.FC = () => {
  return (
    <View style={styles.boxContainer}>
      <Box size="sm" text="HOJE">
        <HeavyRainIcon height={35} style={styles.iconStyle} />
      </Box>

      <Box size="sm" text="AMANHÃ">
        <SunIcon height={35} style={styles.iconStyle} />
      </Box>

      <Box size="sm" text="DEPOIS">
        <CloudIcon height={35} style={styles.iconStyle} />
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
