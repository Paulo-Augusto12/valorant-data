import React, { useEffect, useState } from "react";
import { ValorantAgentData } from "../../../api/models/valorantAgentDataModel";
import { returnAgentData } from "../../../api/agents/getAgentData";

export function useData(id: string) {
  const [agentData, setAgentData] = useState<ValorantAgentData>(
    new ValorantAgentData()
  );

  const [selectedSkill, setSelectedSkill] = useState({
    id: 0,
    description: "",
    name: "",
  });

  async function getData() {
    try {
      const response = await returnAgentData(id);

      setAgentData(response);
      setSelectedSkill({
        id: response.skills[0].id,
        description: response.skills[0].description,
        name: response.skills[0].name,
      });
    } catch (err) {}
  }

  useEffect(() => {
    getData();
  }, []);
  return {
    agentData,
    selectedSkill,
    setSelectedSkill,
  };
}
