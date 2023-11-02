import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ValorantAgentDataModel } from "../../api/agents/getAgents";
import { useNavigation } from "@react-navigation/native";

interface IAgentCardProps {
  agent: ValorantAgentDataModel;
}

function AgentCard({ agent }: IAgentCardProps) {
  const navigation = useNavigation();
  return (
    <Pressable
      style={[
        styles.container,
        { backgroundColor: `#${agent.backgroundColor}` },
      ]}
      onPress={() => {
        navigation.navigate("data", { agent: agent });
      }}
    >
      <ImageBackground
        source={{
          uri: agent.backgroundImage,
        }}
        style={styles.agentImage}
      >
        <View style={styles.imagesContainer}>
          <Image
            style={styles.agentImage}
            source={{
              uri: agent.image,
            }}
          />
        </View>
      </ImageBackground>
      <View style={styles.agentDataContainer}>
        <Text style={styles.agentName}>{agent.name}</Text>
        <Text style={styles.agentDescription}>{agent.role}</Text>
      </View>
    </Pressable>
  );
}

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    minWidth: (80 / 100) * screenWidth,
    padding: 6,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  imagesContainer: {
    position: "relative",
    top: -90,
  },
  agentImage: {
    height: (50 / 100) * screenHeight,
  },
  agentImageBackground: {
    flex: 1,
  },
  agentDataContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  agentName: {
    fontSize: 48,
    color: "#FFF",
    fontWeight: "bold",
  },
  agentDescription: {
    fontSize: 24,
    color: "#FFF",
    fontWeight: "500",
  },
});

export default React.memo(AgentCard);
