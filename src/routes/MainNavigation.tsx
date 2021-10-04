import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ConfigsContext } from "../contexts/ConfigsContext";
import ConfiguredNavigation from "./ConfiguredNavigation";
import NotConfiguredNavigation from "./NotConfiguredNavigation";

const MainNavigation: React.FC = () => {
  const { hasConfigStored } = useContext(ConfigsContext);
  return (
    <NavigationContainer>
      {hasConfigStored ? <ConfiguredNavigation /> : <NotConfiguredNavigation />}
    </NavigationContainer>
  );
};

export default MainNavigation;
