import React, { useState, useEffect, useCallback } from "react";
import AppLoading from "expo-app-loading";
import Swiper from "react-native-swiper";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  View,
  ImageBackground,
  useWindowDimensions,
  TextInput,
  Pressable,
  Alert,
  Animated,
  Easing,
} from "react-native";
import { NavigateProp } from "../../App";
import { myFonts } from "../../src/components";
import { Typography } from "../components";
import { PopInView } from "../animations";

// const examples =  // "Ciência", "Artes", "Medicina"];

const ConfigScreen: React.FC = () => {
  const { height, width } = useWindowDimensions();
  const [usernameField, setUsernameField] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const animatedPosition = useState(new Animated.Value(0))[0];
  const animatedOpacity = useState(new Animated.Value(0))[0];
  const navigation = useNavigation<NavigateProp>();
  let [fontsLoaded] = useFonts(myFonts);
  const { Rajdhani_700Bold } = myFonts;
  const animationsDelay = 800;
  const [options, setOptions] = useState([
    { name: "Política", selected: false },
    { name: "Ciência", selected: false },
    { name: "Artes", selected: false },
    { name: "Medicina", selected: false },
  ]);
  const opacityAnimation = Animated.timing(animatedOpacity, {
    toValue: 1,
    duration: 200,
    delay: animationsDelay,
    useNativeDriver: true,
  });

  const positionAnimation = Animated.timing(animatedPosition, {
    toValue: 1,
    duration: 400,
    delay: animationsDelay,
    useNativeDriver: true,
    easing: Easing.bounce,
  });

  const interpolatedPosition = animatedPosition.interpolate({
    inputRange: [0, 1],
    outputRange: [20, 0],
  });

  useEffect(() => {
    opacityAnimation.start();
    positionAnimation.start();
  }, []);

  useEffect(() => {
    console.log(options);
  }, [options]);

  const updateIndex = useCallback((res) => {
    setTimeout(() => {
      setCurrentSlide(res);
    }, 50);
  }, []);

  if (!fontsLoaded) return <AppLoading />;
  return (
    <ImageBackground
      source={require("../../assets/app/backgrounds/configs-background.png")}
      resizeMode="cover"
      style={{ width: width, height: height * 1.1 }}
      blurRadius={3}
    >
      <View style={styles.backgroundLayer}>
        <Swiper
          onIndexChanged={(index) => updateIndex(index)}
          style={styles.wrapper}
          loop={false}
          showsButtons={true}
        >
          <Animated.View
            style={{
              opacity: animatedOpacity,
              transform: [{ translateY: interpolatedPosition }],
              ...styles.slideWrapper,
            }}
          >
            <Typography
              style={styles.questionLabel}
              fontFamily="rajdhani"
              type={2}
            >
              Como prefere que te chamem?
            </Typography>
            <TextInput
              placeholderTextColor="rgba(243,244,241,0.6)"
              onChangeText={(text) => setUsernameField(text)}
              defaultValue={usernameField}
              style={styles.inputField}
            />
          </Animated.View>
          <View style={styles.slideWrapper}>
            <Typography
              style={styles.questionLabel}
              fontFamily="rajdhani"
              type={2}
            >
              Matt, você gosta de algum desses assuntos?
            </Typography>
            <View style={styles.suggestionBoxContainer}>
              {currentSlide === 1 &&
                options.map((item, index) => (
                  <Pressable
                    onPress={() => {
                      const newOptions = options.map((option) => {
                        if (option.name === item.name) {
                          return {
                            name: item.name,
                            selected: !item.selected,
                          };
                        }
                        return option;
                      });
                      setOptions(newOptions);
                    }}
                    key={`${item.name}-${index}`}
                  >
                    <PopInView
                      duration={400}
                      delay={300 * index}
                      style={
                        !item.selected
                          ? styles.suggestionBox
                          : {
                              ...styles.suggestionBox,
                              ...styles.suggestionBoxActive,
                            }
                      }
                    >
                      <Typography
                        style={{ fontSize: 40 }}
                        fontFamily="rajdhani"
                        type={2}
                        color="#f3f4f1"
                      >
                        {item.name}
                      </Typography>
                    </PopInView>
                  </Pressable>
                ))}
            </View>
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
            <Pressable onPress={() => navigation.navigate("Home")}>
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
    color: "rgba(243,244,241,0.8)",
    width: "90%",
    marginTop: 16,
    paddingLeft: 16,
    height: 50,
    fontFamily: "Rajdhani_700Bold",
    fontSize: 24,
    fontWeight: "700",
  },
  suggestionBoxContainer: {
    marginTop: 48,
  },
  suggestionBox: {
    width: "90%",
    height: 80,
    marginTop: 16,
    borderRadius: 16,
    backgroundColor: "rgba(243,244,241,0.2)",
    paddingHorizontal: 16,
    justifyContent: "center",
    transform: [{ scale: 1 }],
  },
  suggestionBoxActive: {
    backgroundColor: "rgba(75, 181, 67,0.2)",
    transform: [{ scale: 1.05 }],
  },
  suggestionBoxText: {
    fontWeight: "700",
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
