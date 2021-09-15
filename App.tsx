import React from "react";
import { StyleSheet, ImageBackground, useWindowDimensions } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { myFonts } from "./src/components";
import { WeatherSection, NewsSection } from "./src/views";
import { PopInView } from "./src/animations";

export default function App() {
  const { height, width } = useWindowDimensions();
  let [fontsLoaded] = useFonts(myFonts);
  const sectionWidth = 0.9 * width;
  const sectionHeight = 0.4 * height;

  if (!fontsLoaded) return <AppLoading />;
  return (
    <>
      <ImageBackground
        source={require("./assets/app/rio.jpg")}
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
