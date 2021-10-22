import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { StackNavigationProp } from "@react-navigation/stack";
import { myFonts } from "./src/components";
import { ConfigsProvider } from "./src/contexts";
import MainNavigation from "./src/routes/MainNavigation";
import WeatherProvider from "./src/contexts/WeatherContext";

export type RootStackParamList = { Home: undefined; Configs: undefined };
export type NavigateProp = StackNavigationProp<RootStackParamList>;

export default function App() {
  let [fontsLoaded] = useFonts(myFonts);
  if (!fontsLoaded) return <AppLoading />;

  return (
    <ConfigsProvider>
      <WeatherProvider>
        <MainNavigation />
      </WeatherProvider>
    </ConfigsProvider>
  );
}
