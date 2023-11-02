import React, { useEffect, useState } from "react";
import {
  ValorantAgentDataModel,
  returnAgents,
} from "../../../api/agents/getAgents";

export function useList() {
  const [agents, setAgents] = useState<ValorantAgentDataModel[]>([]);

  async function getAgents() {
    const response = await returnAgents();
    setAgents(response);
  }

  useEffect(() => {
    getAgents();
  }, []);
  return {
    states: {
      agents,
    },
  };
}
