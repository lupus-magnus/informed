import { Text } from "react-native";
import React from "react";
import TypeWriter from "react-native-typewriter";

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
  style?: {
    [key: string]: string | number | { [key: string]: string | number }[];
  };
  typewritter?: boolean;
  onTypingEnd?: () => void;
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
  style = {},
  typewritter = false,
  onTypingEnd = () => {},
  ...props
}) => {
  const models = {
    "noto-sans": {
      1: {
        fontFamily: "NotoSans_700Bold",
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
      },
      2: {
        fontFamily: "Rajdhani_700Bold",
        fontSize: 36,
      },
      3: {
        fontFamily: "Rajdhani_700Bold",
        fontSize: 48,
      },
    },
  } as const;

  const textStyle = models[fontFamily][type];

  if (typewritter) {
    return (
      <TypeWriter
        onTypingEnd={() => onTypingEnd()}
        typing={1}
        style={{ ...textStyle, color, ...style }}
      >
        {props.children}
      </TypeWriter>
    );
  }
  return (
    <Text style={{ ...textStyle, color, ...style }}>{props.children}</Text>
  );
};

export default Typography;
