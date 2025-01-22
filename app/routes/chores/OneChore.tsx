import React from "react";
import type { Route } from "./+types/OneChore";
import mockUserData from "~/data/mockUserData";
import ChoreViewComponent from "~/routes/chores/ChoreViewComponent";

async function fetchChore(choreId: string) {
  return mockUserData.choreResponses.find((chore) => `${chore.id}` === choreId);
}

export async function loader({ params }: Route.LoaderArgs) {
  return await fetchChore(params.choreId);
}

// #diplaying a single chore
export default function Chore({ loaderData }: Route.ComponentProps) {
  // this file for url
  return <ChoreViewComponent key={loaderData!.title} chore={loaderData} />;
}
