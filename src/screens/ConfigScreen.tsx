import React from "react";
import Swiper from "react-native-swiper";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  useWindowDimensions,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { Typography } from "../components";

const ConfigScreen: React.FC = () => {
  const { height, width } = useWindowDimensions();

  return (
    <ImageBackground
      source={require("../../assets/app/backgrounds/configs-background.png")}
      resizeMode="cover"
      style={{ width: width, height: height * 1.1 }}
      blurRadius={3}
    >
      <View style={styles.backgroundLayer}>
        <Swiper style={styles.wrapper} loop={false} showsButtons={true}>
          <View style={styles.slideWrapper}>
            <Typography
              style={styles.questionLabel}
              fontFamily="rajdhani"
              type={2}
            >
              Como prefere que te chamem?
            </Typography>
            <TextInput style={styles.inputField} />
          </View>
          <View style={styles.slideWrapper}>
            <Typography
              style={styles.questionLabel}
              fontFamily="rajdhani"
              type={2}
            >
              Matt, você gosta de algum desses assuntos?
            </Typography>
          </View>
          <View style={styles.slideWrapper}>
            <Typography
              style={styles.questionLabel}
              fontFamily="rajdhani"
              type={2}
            >
              Algum interesse em particular?
            </Typography>

            <TextInput style={styles.inputField} />
            <Typography
              style={styles.messageLabel}
              fontFamily="rajdhani"
              type={1}
            >
              Não se preocupe, todas essas opções poderão ser configuradas
              depois.
            </Typography>
            <Pressable
              // android_ripple={{ color: "#0001", borderless: true }}
              onPress={() => Alert.alert("opá")}
            >
              <Typography
                style={styles.readyButton}
                fontFamily="rajdhani"
                type={1}
              >
                Pronto!
              </Typography>
            </Pressable>
          </View>
        </Swiper>
      </View>
    </ImageBackground>
  );
};

export default ConfigScreen;

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 64,
    paddingHorizontal: 32,
  },
  slideWrapper: {
    flex: 1,
    width: "90%",
  },
  questionLabel: {
    color: "#F3F4F1",
  },
  messageLabel: {
    marginTop: 188,
    color: "#F3F4F1",
  },
  inputField: {
    borderBottomWidth: 2,
    borderBottomColor: "#dddddd",
    color: "white",
    width: "90%",
    marginTop: 16,

    height: 50,
    fontSize: 30,
  },
  readyButton: {
    padding: 16,
    backgroundColor: "#484848",
    color: "#F3F4F1",
    marginTop: 84,
    borderRadius: 16,
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  backgroundLayer: {
    backgroundColor: "#rgba(85,85,85,0.5)",
    flex: 1,
  },
});
