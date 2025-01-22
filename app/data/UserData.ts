import ChoreResponse from "~/data/ChoreResponse";

export default interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  choreResponses: ChoreResponse[];
}
