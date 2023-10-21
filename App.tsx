import { StyleSheet } from "react-native";
import { PaperProvider } from "react-native-paper";
import theme from "./src/theme";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerNavigator } from "./src/navigation";
import { ScannedItemsProvider } from "./src/context/ScannedItemsContext";
import React from "react";
import "react-native-get-random-values";
import { HeaderActionProvider } from "./src/context/HeaderActionContext";

export default function App() {
  return (
    <ScannedItemsProvider>
      <HeaderActionProvider>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <DrawerNavigator />
          </NavigationContainer>
        </PaperProvider>
      </HeaderActionProvider>
    </ScannedItemsProvider>
  );
}

