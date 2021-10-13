import React, { useEffect, useContext } from "react";
import { StyleSheet, ImageBackground, useWindowDimensions } from "react-native";
import { WeatherSection, NewsSection } from "../views";
import { PopInView } from "../animations";
import { getWeatherForecast } from "../api";
import { ConfigsContext } from "../contexts/ConfigsContext";
import { LocationProps } from "../types/location";

export default function HomeScreen() {
  const { height, width } = useWindowDimensions();
  const sectionWidth = 0.9 * width;
  const sectionHeight = 0.4 * height;
  const { location } = useContext(ConfigsContext);

  useEffect(() => {
    if (location) {
      const { lat, lon } = location as LocationProps;
      getWeatherForecast(lat, lon);
      console.log("Opa! Location:", lat, lon);
    }
  }, [location]);

  return (
    <>
      <ImageBackground
        source={require("../../assets/app/backgrounds/rio.jpg")}
        resizeMode="cover"
        style={{ width: width, height: height * 1.1, ...styles.background }}
      >
        <PopInView
          delay={600}
          duration={400}
          style={{
            width: sectionWidth,
            height: sectionHeight,
            ...styles.section,
          }}
        >
          <WeatherSection />
        </PopInView>
        <PopInView
          delay={1500}
          duration={400}
          style={{
            width: sectionWidth,
            height: sectionHeight,
            ...styles.section,
          }}
        >
          <NewsSection />
        </PopInView>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
  },
  section: {
    maxWidth: "95%",
    marginTop: "15%",
  },
});
