import React from "react";
import { useFonts } from "expo-font";
import { myFonts } from "./src/components";
import AppLoading from "expo-app-loading";
import { HomeScreen, ConfigScreen } from "./src/screens";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type RootStackParamList = { Home: undefined; Configs: undefined };
export type NavigateProp = StackNavigationProp<RootStackParamList>;

export default function App() {
  let [fontsLoaded] = useFonts(myFonts);
  if (!fontsLoaded) return <AppLoading />;

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Configs" component={ConfigScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
