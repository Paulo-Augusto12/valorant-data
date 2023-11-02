import { GetAgentDataDTO } from "../DTOs/GetAgentDataDTO";
import { ValorantAgentData, skill } from "../models/valorantAgentDataModel";

async function getAgentData(id: string): Promise<GetAgentDataDTO> {
  const url = `https://valorant-api.com/v1/agents/${id}?language=pt-BR`;

  return await fetch(url).then((data) => data.json());
}

export async function returnAgentData(id: string): Promise<ValorantAgentData> {
  const { data } = await getAgentData(id);

  const skils: skill[] = data.abilities.map(
    ({ description, displayIcon, displayName, slot }, index) => {
      return {
        description: description,
        image: displayIcon,
        name: displayName,
        slot: slot,
        id: index,
      };
    }
  );

  return new ValorantAgentData(data.uuid, data.role.displayName, skils);
}
