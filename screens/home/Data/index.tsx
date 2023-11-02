import React from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { ValorantAgentDataModel } from "../../../api/agents/getAgents";
import { useData } from "./useData";
import { styles } from "./style";

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
      <View style={styles.dataContainer}>
        <Text style={styles.abilitiesHeader}>Habilidades</Text>
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
                  styles.abiityCard,
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
        <View style={styles.skillContainer}>
          <Text style={styles.skillName}>{hook.selectedSkill.name}</Text>
          <Text style={styles.skillDescription}>
            {hook.selectedSkill.description}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default React.memo(Data);
