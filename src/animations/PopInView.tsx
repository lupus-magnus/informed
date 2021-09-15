import React, { useState, useEffect } from "react";
import { Animated, TextPropTypes, View, ViewStyle } from "react-native";
import { Easing } from "react-native";

const PopInView: React.FC<{
  delay?: number;
  duration?: number;
  style?: ViewStyle;
}> = ({
  delay = 3000,
  duration = 1500,
  style,

  ...props
}) => {
  const animatedScale = useState(new Animated.Value(0))[0];
  const animatedOpacity = useState(new Animated.Value(0))[0];

  const opacityAnimation = Animated.timing(animatedOpacity, {
    toValue: 1,
    duration,
    delay: delay + 200,
    useNativeDriver: true,
    // easing: Easing.bounce, // inOut(Easing.ease),
  });

  const scaleAnimation = Animated.timing(animatedScale, {
    toValue: 1,
    duration: 600,
    delay,
    useNativeDriver: true,
    // easing: Easing.bounce,
  });

  const interpolatedScaling = animatedScale.interpolate({
    inputRange: [0, 1], //[1, 2, 3],
    outputRange: [0.8, 1.0], // [-3, 5, 0],
  });

  useEffect(() => {
    opacityAnimation.start();
    scaleAnimation.start();
  }, []);

  return (
    <View>
      <Animated.View
        style={{
          transform: [{ scale: interpolatedScaling }],
          opacity: animatedOpacity,
          ...style,
        }}
      >
        {props.children}
      </Animated.View>
    </View>
  );
};

export default PopInView;
