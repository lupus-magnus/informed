import React from "react";
import Svg, { Path } from "react-native-svg";

type IconProps = {
  style?: { [key: string]: any };
  width?: number;
  height?: number;
};

const CloudIcon: React.FC<IconProps> = ({
  style,
  width = 200,
  height = 110,
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="-18 10 100 25"
      fill="#555555"
      style={style}
    >
      <Path d="M74.154,29.834c-0.302-0.153-0.463-0.49-0.395-0.821c0.145-0.697,0.218-1.407,0.218-2.11c0-5.68-4.622-10.302-10.303-10.302  c-0.379,0-0.783,0.027-1.234,0.082c-0.35,0.034-0.646-0.142-0.777-0.443c-2.389-5.445-7.768-8.963-13.703-8.963  c-4.982,0-9.624,2.471-12.415,6.609c-0.225,0.332-0.671,0.43-1.014,0.22C32.285,12.728,29.719,12,27.11,12  c-6.422,0-11.954,4.222-13.689,10.336c0.567,0.232,1.124,0.495,1.664,0.793c3.102-4.205,8.005-6.694,13.253-6.694  c6.348,0,12.117,3.656,14.847,9.361c0.307-0.025,0.59-0.037,0.867-0.037c6.508,0,11.803,5.295,11.803,11.803  c0,0.619-0.05,1.243-0.147,1.861c2.845,1.635,4.734,4.445,5.202,7.641h9.134c5.023,0,9.11-4.086,9.11-9.108  C79.153,34.511,77.238,31.399,74.154,29.834z" />
      <Path d="M54.531,40.493c-0.302-0.153-0.463-0.489-0.395-0.821c0.145-0.697,0.218-1.407,0.218-2.109  c0-5.681-4.622-10.303-10.303-10.303c-0.375,0-0.768,0.026-1.236,0.082c-0.34,0.036-0.644-0.141-0.775-0.443  c-2.389-5.444-7.767-8.962-13.703-8.962c-4.983,0-9.625,2.47-12.415,6.608c-0.225,0.332-0.671,0.429-1.013,0.22  c-2.246-1.376-4.813-2.104-7.422-2.104c-7.855,0-14.245,6.39-14.245,14.245c0,0.613,0.051,1.256,0.161,2.023  c0.055,0.383-0.192,0.745-0.568,0.835c-4.114,0.983-6.988,4.623-6.988,8.852c0,5.022,4.086,9.109,9.11,9.109H50.42  c5.023,0,9.11-4.087,9.11-9.109C59.53,45.171,57.615,42.059,54.531,40.493z" />
    </Svg>
  );
};

export default CloudIcon;