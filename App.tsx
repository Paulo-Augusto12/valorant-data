import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import { BottomTabs } from "./Router/BottomTabs";

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
