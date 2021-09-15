import React, { useState, useEffect } from "react";
import {
  Animated,
  Easing,
  ImageBackground,
  ViewStyle,
  ImageStyle,
} from "react-native";

const ZoomingBackground: React.FC<{
  source: any;
  style: ViewStyle;
  imageStyle: ImageStyle;
}> = ({ children, source, style = {}, imageStyle = {} }) => {
  const [zoomAnimatedValue] = useState(new Animated.Value(1));
  const AnimatedBackground = Animated.createAnimatedComponent(ImageBackground);

  const zoomAnimation = Animated.timing(zoomAnimatedValue, {
    toValue: 1.04,
    duration: 5000,
    useNativeDriver: true,
    easing: Easing.inOut(Easing.ease),
  });

  useEffect(() => {
    zoomAnimatedValue.setValue(1);
    zoomAnimation.start();
  }, [source]);

  return (
    <AnimatedBackground
      imageStyle={{ ...imageStyle }}
      style={{ transform: [{ scale: zoomAnimatedValue }], ...style }}
      resizeMode="cover"
      source={source}
    >
      {children}
    </AnimatedBackground>
  );
};
export default ZoomingBackground;
