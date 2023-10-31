import React from "react";
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { ValorantAgentDataModel } from "../../api/agents/getAgents";

interface IAgentCardProps {
  agent: ValorantAgentDataModel
}

function AgentCard({ agent }: IAgentCardProps) {
  return (
    <Pressable style={[styles.container, {backgroundColor: `#${agent.backgroundColor}`}]} onPress={() => console.log(agent)}>
      <View style={styles.imagesContainer}>
        <Image
          style={styles.agentImage}
          source={{
            uri: agent.image,
          }}
        />
      </View>
      <View style={styles.agentDataContainer}>
          <Text style={styles.agentName}>
            {agent.name}
          </Text>
          <Text style={styles.agentDescription}>
            {agent.role}
          </Text>
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
    padding: 20,
    minHeight: (70 / 100) * screenHeight,
    position: "relative",
  },
  imagesContainer: {
    position: "relative",
    top: -120,
  },
  agentImage: {
    height: (60 / 100) * screenHeight,
  },
  agentDataContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  agentName: {
    fontSize: 48,
    color: '#FFF',
    fontWeight: 'bold'
  },
  agentDescription: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: '500'
  }
});

export default React.memo(AgentCard);
