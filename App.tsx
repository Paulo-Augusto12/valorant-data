import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Home from "./screens/home";
import { BottomTabs } from "./Router/BottomTabs";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <BottomTabs />
        <StatusBar style="light" />
      </NavigationContainer>
    </>
  );
}
