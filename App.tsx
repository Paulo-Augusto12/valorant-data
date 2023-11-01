import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Home from "./screens/home";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Home />
      </View>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3c096c",
    paddingHorizontal: 20,
  },
});
