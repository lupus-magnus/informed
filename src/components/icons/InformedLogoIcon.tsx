import React, { useState, useEffect } from "react";
import { ViewStyle, Animated, Easing } from "react-native";
import Svg, { Path, G } from "react-native-svg";
import { AnimatedSVGPath } from "react-native-svg-animations";

// TODO Fazer a animação funcionar. Não entendi porque não funciona...
type LogoIconProps = {
  style?: ViewStyle;
  animated?: boolean;
  width?: string;
  height?: string;
  color?: string;
};
const AnimatedPath = Animated.createAnimatedComponent(Path);

const InformedLogoIcon: React.FC<LogoIconProps> = ({
  width = "40",
  color = "#555555",
  height = "56",
  style,
}) => {
  const fill = "transparent";
  const strokeWidth = 10;
  const stroke = "#555";
  const [strokeDashArray] = useState(new Animated.Value(0));
  const [animatedStrokeDashOffset] = useState(new Animated.Value(0));

  const strokeAnimation = Animated.loop(
    Animated.sequence([
      Animated.timing(animatedStrokeDashOffset, {
        toValue: 100,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.ease),
      }),
    ])
  );

  useEffect(() => {
    strokeAnimation.start();
  }, []);

  return (
    <Svg
      style={style}
      width="100"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      <G
        transform="translate(0.000000,56.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <AnimatedSVGPath
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDashArray}
          strokeDashoffset={animatedStrokeDashOffset}
          d="M113 445 c-41 -29 -28 -40 47 -40 57 0 73 4 91 21 l21 21 -29 0 c-15
0 -46 3 -68 7 -30 5 -46 3 -62 -9z"
        />
        <AnimatedSVGPath
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDashArray}
          strokeDashoffset={animatedStrokeDashOffset}
          d="M276 429 c-26 -20 -26 -22 -26 -154 0 -73 -3 -140 -6 -149 -8 -20
-38 -21 -53 -2 -36 43 -97 40 -122 -5 -10 -19 -8 -20 11 -14 12 4 42 2 66 -5
51 -14 103 -7 136 19 22 18 23 27 28 175 3 86 2 156 -1 156 -4 0 -18 -9 -33
-21z"
        />
        <AnimatedSVGPath
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDashArray}
          strokeDashoffset={animatedStrokeDashOffset}
          d="M203 375 c-12 -8 -23 -25 -25 -37 -2 -14 -12 -24 -28 -28 -26 -6 -36
-29 -26 -57 5 -12 9 -13 21 -3 24 20 38 1 32 -46 -5 -48 -2 -51 28 -28 17 13
21 30 25 114 3 55 3 100 0 100 -3 0 -15 -7 -27 -15z"
        />
      </G>
    </Svg>
  );
};

export default InformedLogoIcon;
