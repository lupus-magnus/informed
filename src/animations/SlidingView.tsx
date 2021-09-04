import React, { useState, useEffect } from "react";
import { Animated, View } from "react-native";
import { Easing } from "react-native";

const SlidingView: React.FC = ({ ...props }) => {
  const pixels = useState(new Animated.Value(0))[0];

  const anim = Animated.timing(pixels, {
    toValue: 3,
    duration: 3000,
    delay: 1500,
    useNativeDriver: true,
    easing: Easing.inOut(Easing.ease), //.linear,
  });

  const interpolatedPixels = pixels.interpolate({
    inputRange: [0, 3], //[1, 2, 3],
    outputRange: [10, -5], // [-3, 5, 0],
  });

  useEffect(() => {
    anim.start();
  }, []);

  return (
    <View>
      <Animated.View
        style={{
          transform: [{ translateX: interpolatedPixels }],
        }}
      >
        {props.children}
      </Animated.View>
    </View>
  );
};

export default SlidingView;
