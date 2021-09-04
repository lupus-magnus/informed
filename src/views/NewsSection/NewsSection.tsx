import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import Typography from "../../components/Typography/Typography";

const mockImage = require("../../../assets/mock/handshake.jpeg");

const NewsSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={{ borderRadius: 10 }}
        source={mockImage}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.textContainer}>
          <Typography
            color="white"
            style={styles.newsTitle}
            fontFamily="noto-sans"
            type={1}
          >
            Manchete da notícia
          </Typography>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(243,244,241,0.2)",
    alignItems: "center",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 20,
  },
  background: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  textContainer: {
    bottom: 0,
    width: "100%",
    height: 80,
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    // borderBottomRightRadius: 10,
    // borderBottomLeftRadius: 10,
  },
  newsTitle: {
    marginTop: 10,
  },
});

export default NewsSection;
