import React, { useEffect, useState } from "react";
import { StyleSheet, View, ImageBackground, Alert } from "react-native";
import Typography from "../../components/Typography/Typography";
import { ZoomingBackground } from "../../animations";

const greenImage = require("../../../assets/mock/news/green.jpg");
const computersImage = require("../../../assets/mock/news/screens.jpg");
const gunsImage = require("../../../assets/mock/news/guns.png");

const mockNews = [
  {
    title: "New technologies in the development have come to stay.",
    img: computersImage,
  },
  {
    title:
      "A brand new world? Get to know the ecovillages and what they have to teach us!",
    img: greenImage,
  },
  {
    title: "Guns are back on the streets. And this time it is different.",
    img: gunsImage,
  },
];

const NewsSection: React.FC = () => {
  const [news] = useState(mockNews);
  const [onDisplay, setOnDisplay] = useState(0);

  useEffect(() => {
    setTimeout(() => setOnDisplay((prev) => prev + 1), 5000);
  }, [onDisplay]);

  return (
    <View style={styles.container}>
      <ZoomingBackground
        imageStyle={{ borderRadius: 10 }}
        source={news[onDisplay % news.length].img}
        style={styles.background}
      >
        <View style={styles.textContainer}>
          <Typography
            typewritter
            color="#bbb"
            style={styles.newsTitle}
            fontFamily="rajdhani"
            type={1}
            // onTypingEnd={() => Alert.alert("typing end")}
          >
            {news[onDisplay % news.length].title}
          </Typography>
        </View>
      </ZoomingBackground>
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
    paddingHorizontal: 32,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  newsTitle: {
    marginTop: 10,
  },
});

export default NewsSection;
