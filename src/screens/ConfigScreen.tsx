import React from "react";
import { View, Text, ImageBackground, useWindowDimensions } from "react-native";

const ConfigScreen: React.FC = () => {
  const { height, width } = useWindowDimensions();

  return (
    <ImageBackground
      source={require("../../assets/app/backgrounds/configs-background.png")}
      resizeMode="cover"
      style={{ width: width, height: height }}
      blurRadius={3}
    >
      {/* <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Config Screen</Text>
      </View> */}
    </ImageBackground>
  );
};

export default ConfigScreen;
