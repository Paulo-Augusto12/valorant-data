import React, { useState, useEffect } from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import {
  ValorantAgentDataModel,
  returnAgents,
} from "../../api/agents/getAgents";
import AgentCard from "../../components/AgentCard";

function Home() {
  const [agents, setAgents] = useState<ValorantAgentDataModel[]>([]);

  async function getAgents() {
    const response = await returnAgents();
    setAgents(response);
  }

  useEffect(() => {
    getAgents();
  }, []);

  return (
    <>
      <View>
        <FlatList
          data={agents}
          horizontal
          style={styles.listStyle}
          contentContainerStyle={styles.listContainerStyle}
          renderItem={({ item }) => <AgentCard agent={item} />}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  listStyle: {
    width: "100%",
    height: "100%",
  },
  listContainerStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    padding: 10,
  },
});

export default React.memo(Home);
