import ChoreResponse from "~/data/ChoreResponse";

const VITE_APP_BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;

export async function getChores(): Promise<ChoreResponse[]> {
  try {
    const response = await fetch(`${VITE_APP_BACKEND_URL}/chores`);
    if (!response.ok) {
      throw new Error(`Error fetching chores: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
export async function getChore(choreId: number): Promise<ChoreResponse> {
  const response = await fetch(`${VITE_APP_BACKEND_URL}/chores/${choreId}`);
  if (!response.ok) {
    throw new Error(`Error fetching chores: ${response.statusText}`);
  }
  return await response.json();
}
