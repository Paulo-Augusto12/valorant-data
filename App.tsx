import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import Home from "./screens/home";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Home />
        <StatusBar style="light" />
      </NavigationContainer>
    </>
  );
}
