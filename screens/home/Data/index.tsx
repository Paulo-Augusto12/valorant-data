import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ValorantAgentDataModel } from "../../../api/agents/getAgents";

function Data({ route, navigation }: any) {
  const { agent }: { agent: ValorantAgentDataModel } = route.params;

  return (
    <View style={styles.container}>
      <View>
        <Text>{agent.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#223843",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default React.memo(Data);
