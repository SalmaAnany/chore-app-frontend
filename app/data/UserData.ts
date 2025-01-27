import ChoreResponse from "~/data/ChoreResponse";
import MissionResponse from "~/data/MissionResponse";

export default interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  chores: ChoreResponse[];
  missions: MissionResponse[];
}
