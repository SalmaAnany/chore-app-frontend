import UserData from "~/data/UserData";

const VITE_REMOTE_APP_BACKEND_URL = import.meta.env.VITE_REMOTE_APP_BACKEND_URL;

export async function getUsers(): Promise<UserData[]> {
  try {
    const response = await fetch(`${VITE_REMOTE_APP_BACKEND_URL}/users`);
    if (!response.ok) {
      throw new Error(`Error fetching chores: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getUser(userId: number): Promise<UserData> {
  const response = await fetch(`${VITE_REMOTE_APP_BACKEND_URL}/users/${userId}`);
  if (!response.ok) {
    throw new Error(`Error fetching chores: ${response.statusText}`);
  }
  return await response.json();
}
