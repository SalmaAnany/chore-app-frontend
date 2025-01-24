import React from "react";
import type { Route } from "./+types/OneChore";
import ChoreViewComponent from "~/routes/chores/ChoreViewComponent";
import { getChore } from "~/api/chores";

async function fetchChore(choreId: number) {
  return await getChore(choreId);
}

export async function loader({ params }: Route.LoaderArgs) {
  return await fetchChore(Number(params.choreId));
}

// #diplaying a single chore
export default function Chore({ loaderData }: Route.ComponentProps) {
  // this file for url
  return <ChoreViewComponent key={loaderData!.title} chore={loaderData} />;
}
