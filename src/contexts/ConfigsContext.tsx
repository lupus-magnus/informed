import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
};

export const ConfigsContext = React.createContext({} as ConfigsContextProps); //  as AuthProps);

const ConfigsProvider: React.FC = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [userInterests, setUserInterests] = useState([] as string[]);
  const [hasConfigStored, setHasConfigStored] = useState(false);

  const checkIfStoredConfigs = async () => {
    console.log("checking if stored configs...");
    const value = await AsyncStorage.getItem("@user_configs");
    console.log("retrieved value:", value);
    setHasConfigStored(true);
  };

  useEffect(() => {
    checkIfStoredConfigs();
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
      }}
    >
      {children}
    </ConfigsContext.Provider>
  );
};

export default ConfigsProvider;
