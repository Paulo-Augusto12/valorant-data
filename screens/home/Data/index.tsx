import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
} from "react-native";
import { ValorantAgentDataModel } from "../../../api/agents/getAgents";

function Data({ route, navigation }: any) {
  const { agent }: { agent: ValorantAgentDataModel } = route.params;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.agentImagesContainer,
          { backgroundColor: `#${agent.backgroundColor}` },
        ]}
      >
        <ImageBackground
          source={{ uri: agent.backgroundImage }}
          style={styles.backgroundImage}
        >
          <Image source={{ uri: agent.image }} style={styles.agentImage} />
        </ImageBackground>
        <Text style={styles.agentName}>{agent.name}</Text>
        <Text style={styles.agentRole}>{agent.role}</Text>
      </View>
    </View>
  );
}

const height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#223843",
    flexDirection: "column",
  },
  agentImagesContainer: {
    height: (60 / 100) * height,
    width: "100%",
    alignItems: "center",
    borderRadius: 32,
    padding: 32,
  },
  backgroundImage: {
    width: "100%",
  },
  agentImage: {
    width: "100%",
    height: "80%",
  },
  agentName: {
    color: "#FFFF",
    fontSize: 44,
    fontWeight: "bold",
  },
  agentRole: {
    color: "#FFFF",
    fontSize: 24,
    fontWeight: "600",
  },
});

export default React.memo(Data);
