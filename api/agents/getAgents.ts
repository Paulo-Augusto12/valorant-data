import { GetAllAgentsDTO } from "../DTOs/GetAllAgentsDTO";

const url = "https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=pt-BR";

export class ValorantAgentDataModel {
  constructor(
    readonly id: string = "",
    readonly name: string = "",
    readonly role: string = "",
    readonly image: string = "",
    readonly backgroundImage: string = "",
    readonly backgroundColor: string = ''
  ) {}
}

async function makeApiRequest(): Promise <GetAllAgentsDTO> {
  try {
    const response = await fetch(url).then(data => data.json());
    
    return response;
  } catch (err: any) {
    const data = await fetch(url);
    throw new Error(`Request error -  ${err} json - ${data}`)
  }
}

export async function returnAgents(): Promise<ValorantAgentDataModel[]> {
  try {
    const  { data } = await makeApiRequest();
    const response =  data.map(
      ({ displayName, uuid, role, fullPortrait, background, backgroundGradientColors }) =>
        new ValorantAgentDataModel(
          uuid,
          displayName,
          role.displayName,
          fullPortrait,
          background,
          backgroundGradientColors.shift()
        )
    );
    return response
  } catch (err: any) {
    throw new Error(`Return model error - ${err}`)
  }
}
