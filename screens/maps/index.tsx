import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Maps() {
  const styles = stylesheet;
  return (
    <View style={styles.container}>
      <Text>Maps</Text>
    </View>
  );
}

const stylesheet = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#223843",
  },
});

export default React.memo(Maps);
