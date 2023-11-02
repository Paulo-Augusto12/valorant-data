export type skill = {
  name: string;
  image: string;
  description: string;
  slot: string;
  id: number;
};

export class ValorantAgentData {
  constructor(
    readonly id: string = "",
    readonly role: string = "",
    readonly skills: skill[] = []
  ) {}
}
