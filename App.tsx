import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

const logo = require("./assets/app/logo_transparent.png");

export default function App() {
  return (
    <>
      <ImageBackground
        source={require("./assets/app/rio.jpg")}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.container}>
          <Image
            source={logo}
            style={{
              width: 105,
              height: 160,
              marginTop: 100,
            }}
          />
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f4f1",
    opacity: 0.2,
    alignItems: "center",
    height: 470,
    width: "95%",
    marginTop: "20%",
    borderRadius: 20,
  },
  logo: {
    height: 100,
    width: 100,
  },
  background: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
  },
});
