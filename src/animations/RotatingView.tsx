import React, { useState, useEffect } from "react";
import { Animated, View } from "react-native";
import { Easing } from "react-native";

const RotatingView: React.FC = ({ ...props }) => {
  const degrees = useState(new Animated.Value(0))[0];

  const spin = degrees.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["-2deg", "2deg", "-2deg"],
  });
  const anim = Animated.timing(degrees, {
    toValue: 1,
    duration: 3000,
    delay: 300,
    useNativeDriver: true,
    easing: Easing.linear,
  });
  useEffect(() => {
    anim.start();
  }, []);

  return (
    <View>
      <Animated.View
        style={{
          transform: [{ rotate: spin }],
        }}
      >
        {props.children}
      </Animated.View>
    </View>
  );
};

export default RotatingView;
