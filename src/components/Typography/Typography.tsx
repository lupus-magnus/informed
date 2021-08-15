import { Text } from "react-native";
import React from "react";

import {
  NotoSans_400Regular,
  NotoSans_700Bold,
} from "@expo-google-fonts/noto-sans";
import {
  Rajdhani_400Regular,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";

type TypographyProps = {
  fontFamily: "noto-sans" | "rajdhani";
  type: 1 | 2 | 3;
  color?: string;
};

export const myFonts = {
  NotoSans_400Regular,
  NotoSans_700Bold,
  Rajdhani_400Regular,
  Rajdhani_700Bold,
};

const Typography: React.FC<TypographyProps> = ({
  fontFamily = "noto-sans",
  type = 1,
  color = "black",

  ...props
}) => {
  const models = {
    "noto-sans": {
      1: {
        fontFamily: "NotoSans_400Regular",
        fontSize: 26,
        color,
      },
      2: {
        fontFamily: "NotoSans_700Bold",
        fontSize: 32,
        color,
      },
      3: {
        fontFamily: "NotoSans_700Bold",
        fontSize: 56,
        color,
      },
    },
    rajdhani: {
      1: {
        fontFamily: "Rajdhani_700Bold",
        fontSize: 18,
        color,
      },
      2: {
        fontFamily: "Rajdhani_700Bold",
        fontSize: 36,
        color,
      },
      3: {
        fontFamily: "Rajdhani_700Bold",
        fontSize: 48,
        color,
      },
    },
  } as const;

  const textStyle = models[fontFamily][type];

  return <Text style={textStyle}>{props.children}</Text>;
};

export default Typography;
