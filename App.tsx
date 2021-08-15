import React from "react";
import { StyleSheet, View, ImageBackground, Image, Text } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Typography, myFonts } from "./src/components";

const logo = require("./assets/app/logo_transparent.png");

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
        <View style={styles.container}>
          <Text> Texto de controle na fonte padrao.</Text>
          <Typography fontFamily="rajdhani" type={1}>
            Rajdhani 1
          </Typography>

          <Typography fontFamily="rajdhani" type={2}>
            Radjdhani 2
          </Typography>

          <Typography fontFamily="rajdhani" type={3}>
            Rajdhani 3
          </Typography>

          <Image source={logo} style={styles.logo} />

          <Typography fontFamily="noto-sans" type={1}>
            Noto-Sans 1
          </Typography>
          <Typography fontFamily="noto-sans" type={2}>
            Noto-Sans 2
          </Typography>
          <Typography fontFamily="noto-sans" type={3}>
            Noto-Sans 3
          </Typography>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(243,244,241,0.2)",
    alignItems: "center",
    height: 470,
    width: "95%",
    marginTop: "20%",
    borderRadius: 20,
  },
  logo: {
    marginTop: 100,
    position: "absolute",
    height: 160,
    width: 105,
    opacity: 0.2,
  },
  background: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
  },
});
