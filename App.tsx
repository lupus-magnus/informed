import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { myFonts } from "./src/components";
import { WeatherSection, NewsSection } from "./src/views";

export default function App() {
  let [fontsLoaded] = useFonts(myFonts);

  if (!fontsLoaded) return <AppLoading />;
  return (
    <>
      <ImageBackground
        source={require("./assets/app/rio.jpg")}
        resizeMode="cover"
        style={styles.background}
      >
        <WeatherSection />
        <NewsSection />
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
  },
});
