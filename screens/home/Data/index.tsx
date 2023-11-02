import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { ValorantAgentDataModel } from "../../../api/agents/getAgents";
import { useData } from "./useData";

function Data({ route, navigation }: any) {
  const { agent }: { agent: ValorantAgentDataModel } = route.params;

  const hook = useData(agent.id);

  return (
    <ScrollView style={styles.container}>
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
      <View
        style={{
          paddingHorizontal: 10,
          flexDirection: "column",
          gap: 16,
          marginTop: 16,
        }}
      >
        <Text style={{ fontSize: 16, color: "#FFFF", fontWeight: "600" }}>
          Habilidades
        </Text>
        <View style={styles.abilitiesContainer}>
          {hook.agentData.skills.map(
            ({ name, slot, image, description }, index) => (
              <TouchableOpacity
                key={slot}
                onPress={() => {
                  hook.setSelectedSkill({
                    id: index,
                    description,
                    name,
                  });
                }}
                style={[
                  {
                    width: 60,
                    height: 60,
                    borderRadius: 14,
                    borderWidth: 2,
                    borderColor: "#FFFF",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                  {
                    backgroundColor:
                      hook.selectedSkill.id === index
                        ? `#${agent.backgroundColor}`
                        : undefined,
                  },
                ]}
              >
                <Image height={40} width={40} source={{ uri: image }} />
              </TouchableOpacity>
            )
          )}
        </View>
        <View style={{ flexDirection: "column", gap: 8, paddingBottom: 16 }}>
          <Text style={{ fontSize: 20, color: "#FFFF", fontWeight: "900" }}>
            {hook.selectedSkill.name}
          </Text>
          <Text style={{ fontWeight: "600", color: "#FFFF" }}>
            {hook.selectedSkill.description}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#223843",
    flexDirection: "column",
    gap: 16,
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
  abilitiesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default React.memo(Data);
