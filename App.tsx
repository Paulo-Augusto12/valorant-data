import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import { ValorantAgentDataModel, returnAgents } from "./api/agents/getAgents";
import AgentCard from "./components/AgentCard";

const data = [
  { key: "1", title: "Item 1" },
  { key: "2", title: "Item 2" },
  { key: "3", title: "Item 3" },
  { key: "4", title: "Item 4" },
  { key: "5", title: "Item 5" },
  { key: "6", title: "Item 6" },
  { key: "7", title: "Item 7" },
  { key: "8", title: "Item 8" },
  { key: "9", title: "Item 9" },
];

export default function App() {
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
      <View style={styles.container}>
        <View>
          <FlatList
            data={agents}
            horizontal
            style={{
              width: "100%",
              height: "100%",
            }}
            contentContainerStyle={{
              alignItems: "center",
              justifyContent: "center",
            }}
            renderItem={({ item }) => <AgentCard agent={item}/>}
            ItemSeparatorComponent={() => <View style={{ padding: 10 }} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3c096c",
    paddingHorizontal: 20,
  },
  item: {
    backgroundColor: "#F9C2FF",
    padding: 20,
    height: (70 / 100) * Dimensions.get("screen").height,
  },
  title: {
    fontSize: 32,
  },
});
