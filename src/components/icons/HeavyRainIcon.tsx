import React from "react";
import Svg, { Path, G } from "react-native-svg";
import SlidingView from "../../animations/SlidingView";

type IconProps = {
  style?: { [key: string]: any };
  width?: number;
  height?: number;
  animated?: boolean;
};

const HeavyRainIcon: React.FC<IconProps> = ({
  style,
  width = 200,
  height = 110,
  animated = false,
}) => {
  if (animated) {
    return (
      <SlidingView>
        <Svg
          style={style}
          width={width}
          height={height}
          viewBox="0 0 64 64"
          x="0px"
          y="0px"
        >
          <G fill="#555555">
            <Path d="M41.54,46.33a1.29,1.29,0,0,1,1.61-.75A1.35,1.35,0,0,1,44,47.32l-1.61,4.21a1.44,1.44,0,0,1-1.74.74,1.37,1.37,0,0,1-.74-1.73Z" />
            <Path d="M33.12,46.33a1.28,1.28,0,1,1,2.35,1l-2.85,7.8a1.29,1.29,0,0,1-1.74.75,1.31,1.31,0,0,1-.74-1.62Z" />
            <Path d="M15.15,46.33a1.44,1.44,0,0,1,1.73-.75,1.39,1.39,0,0,1,.75,1.74l-2.85,7.8a1.33,1.33,0,0,1-1.74.75,1.3,1.3,0,0,1-.74-1.62Z" />
            <Path d="M49.35,46.33A1.29,1.29,0,0,1,51,45.58a1.34,1.34,0,0,1,.86,1.74l-3,7.8a1.28,1.28,0,0,1-1.73.75,1.3,1.3,0,0,1-.75-1.62Z" />
            <Path d="M33.61,9.78a18.83,18.83,0,0,1,6,3.84,17.28,17.28,0,0,1,4.33,7.43,6.91,6.91,0,0,1,2.23.37,7.72,7.72,0,0,1,2.23.75,10.07,10.07,0,0,1,5.46,6.07,10.49,10.49,0,0,1-.5,8.17,1.27,1.27,0,0,1-1.73.62A1.37,1.37,0,0,1,51,35.3a7.77,7.77,0,0,0,.37-6.2,8.21,8.21,0,0,0-4.09-4.58,9.31,9.31,0,0,0-1.74-.62,2.8,2.8,0,0,0-1-.12A12.78,12.78,0,0,1,44.64,26a19.21,19.21,0,0,1-.25,2.6,18.33,18.33,0,0,1-.5,2.6,1.37,1.37,0,1,1-2.6-.87,10.76,10.76,0,0,0,.5-2.1A14.23,14.23,0,0,0,42,26,15.32,15.32,0,0,0,37.7,15.48a15,15,0,0,0-5.82-3.6L31,11.63l-1.86-.37c-.62,0-1.24-.12-2-.12a14.69,14.69,0,0,0-10,4.09A14.48,14.48,0,0,0,12.42,25v1.11l-1.23.12a7.3,7.3,0,0,0-5.08,2.11,7.31,7.31,0,0,0,0,10.28,7.27,7.27,0,0,0,5.2,2.11c14.62,0,29.36-.25,44,0a4.69,4.69,0,0,0,3.35-1.49A4.79,4.79,0,0,0,60,35.92a5.77,5.77,0,0,0-.62-2.6,4.47,4.47,0,0,0-2-1.74L56.28,31l.62-1.11a17.67,17.67,0,0,0,.87-2.23A15.75,15.75,0,0,0,58,25.26a10,10,0,0,0-3-7.18,10.2,10.2,0,0,0-7.18-3H46.5l-1.37.25L45,14a6.87,6.87,0,0,0-2.36-4.21A6.24,6.24,0,0,0,38.19,8a6.13,6.13,0,0,0-3.34.87,7.2,7.2,0,0,0-1.24.87Z" />
            <Path d="M24,46.33a1.28,1.28,0,1,1,2.35,1l-1.61,4.21a1.28,1.28,0,1,1-2.35-1Z" />
          </G>
        </Svg>
      </SlidingView>
    );
  }

  return (
    <Svg
      style={style}
      width={width}
      height={height}
      viewBox="0 0 64 64"
      x="0px"
      y="0px"
    >
      <G fill="#555555">
        <Path d="M41.54,46.33a1.29,1.29,0,0,1,1.61-.75A1.35,1.35,0,0,1,44,47.32l-1.61,4.21a1.44,1.44,0,0,1-1.74.74,1.37,1.37,0,0,1-.74-1.73Z" />
        <Path d="M33.12,46.33a1.28,1.28,0,1,1,2.35,1l-2.85,7.8a1.29,1.29,0,0,1-1.74.75,1.31,1.31,0,0,1-.74-1.62Z" />
        <Path d="M15.15,46.33a1.44,1.44,0,0,1,1.73-.75,1.39,1.39,0,0,1,.75,1.74l-2.85,7.8a1.33,1.33,0,0,1-1.74.75,1.3,1.3,0,0,1-.74-1.62Z" />
        <Path d="M49.35,46.33A1.29,1.29,0,0,1,51,45.58a1.34,1.34,0,0,1,.86,1.74l-3,7.8a1.28,1.28,0,0,1-1.73.75,1.3,1.3,0,0,1-.75-1.62Z" />
        <Path d="M33.61,9.78a18.83,18.83,0,0,1,6,3.84,17.28,17.28,0,0,1,4.33,7.43,6.91,6.91,0,0,1,2.23.37,7.72,7.72,0,0,1,2.23.75,10.07,10.07,0,0,1,5.46,6.07,10.49,10.49,0,0,1-.5,8.17,1.27,1.27,0,0,1-1.73.62A1.37,1.37,0,0,1,51,35.3a7.77,7.77,0,0,0,.37-6.2,8.21,8.21,0,0,0-4.09-4.58,9.31,9.31,0,0,0-1.74-.62,2.8,2.8,0,0,0-1-.12A12.78,12.78,0,0,1,44.64,26a19.21,19.21,0,0,1-.25,2.6,18.33,18.33,0,0,1-.5,2.6,1.37,1.37,0,1,1-2.6-.87,10.76,10.76,0,0,0,.5-2.1A14.23,14.23,0,0,0,42,26,15.32,15.32,0,0,0,37.7,15.48a15,15,0,0,0-5.82-3.6L31,11.63l-1.86-.37c-.62,0-1.24-.12-2-.12a14.69,14.69,0,0,0-10,4.09A14.48,14.48,0,0,0,12.42,25v1.11l-1.23.12a7.3,7.3,0,0,0-5.08,2.11,7.31,7.31,0,0,0,0,10.28,7.27,7.27,0,0,0,5.2,2.11c14.62,0,29.36-.25,44,0a4.69,4.69,0,0,0,3.35-1.49A4.79,4.79,0,0,0,60,35.92a5.77,5.77,0,0,0-.62-2.6,4.47,4.47,0,0,0-2-1.74L56.28,31l.62-1.11a17.67,17.67,0,0,0,.87-2.23A15.75,15.75,0,0,0,58,25.26a10,10,0,0,0-3-7.18,10.2,10.2,0,0,0-7.18-3H46.5l-1.37.25L45,14a6.87,6.87,0,0,0-2.36-4.21A6.24,6.24,0,0,0,38.19,8a6.13,6.13,0,0,0-3.34.87,7.2,7.2,0,0,0-1.24.87Z" />
        <Path d="M24,46.33a1.28,1.28,0,1,1,2.35,1l-1.61,4.21a1.28,1.28,0,1,1-2.35-1Z" />
      </G>
    </Svg>
  );
};

export default HeavyRainIcon;
