import MissionResponse from "~/data/MissionResponse";

const VITE_REMOTE_APP_BACKEND_URL = import.meta.env.VITE_REMOTE_APP_BACKEND_URL;

export async function getMissions(userId: number): Promise<MissionResponse[]> {
  try {
    const response = await fetch(`${VITE_REMOTE_APP_BACKEND_URL}/users/${userId}/missions`);
    if (!response.ok) {
      throw new Error(`Error fetching chores: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
export async function getMission(missionId: number): Promise<MissionResponse> {
  const response = await fetch(`${VITE_REMOTE_APP_BACKEND_URL}/missions/${missionId}`);
  if (!response.ok) {
    throw new Error(`Error fetching chores: ${response.statusText}`);
  }
  return await response.json();
}
