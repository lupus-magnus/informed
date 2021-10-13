import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LocationProps } from "../types/location";
import * as Location from "expo-location";

type ConfigsProps = {
  username: string;
  interests: string[];
};

type ConfigsContextProps = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  userInterests: string[];
  setUserInterests: React.Dispatch<React.SetStateAction<string[]>>;
  handleSaveConfigs: (configsObj: ConfigsProps) => void;
  hasConfigStored: boolean;
  location: null | LocationProps;
};

export const ConfigsContext = React.createContext({} as ConfigsContextProps); //  as AuthProps);

const ConfigsProvider: React.FC = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [userInterests, setUserInterests] = useState([] as string[]);
  const [hasConfigStored, setHasConfigStored] = useState(false);
  const [location, setLocation] = useState<null | LocationProps>(null);

  const checkIfStoredConfigs = async () => {
    console.log("checking if stored configs...");
    const value = await AsyncStorage.getItem("@user_configs");
    console.log("retrieved value:", value);
    setHasConfigStored(true);
  };

  const findUserLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    const { coords } = location;
    const { latitude: lat, longitude: lon } = coords;
    console.log("coords:", coords);
    setLocation({ lat, lon });
  };

  useEffect(() => {
    checkIfStoredConfigs();
    findUserLocation();
  }, []);

  useEffect(() => {
    console.log("hasConfigStored:", hasConfigStored);
  }, [hasConfigStored]);

  const handleSaveConfigs = async (configsObj: ConfigsProps) => {
    const serializedConfigs = JSON.stringify(configsObj);
    await AsyncStorage.setItem("@user_configs", serializedConfigs);
    console.log("A new configuration has been set.");
    console.log("username:", userName);
    console.log("userInterests:", userInterests);
  };

  return (
    <ConfigsContext.Provider
      value={{
        userName,
        setUserName,
        userInterests,
        setUserInterests,
        handleSaveConfigs,
        hasConfigStored,
        location,
      }}
    >
      {children}
    </ConfigsContext.Provider>
  );
};

export default ConfigsProvider;
