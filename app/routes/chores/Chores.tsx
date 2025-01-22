import React from "react";
import { Grid2 as Grid } from "@mui/material";
import mockUserData from "~/data/mockUserData";
import type { Route } from "./+types/Chores";
import ChoreViewComponent from "~/routes/chores/ChoreViewComponent";

async function fetchChores(userId: string) {
  return mockUserData.choreResponses.filter(
    (chore) => `${chore.userId}` === userId,
  );
}

export async function loader({ params }: Route.LoaderArgs) {
  return await fetchChores(params.userId);
}

// #diplaying all single chore
export default function Chores({ loaderData }: Route.ComponentProps) {
  // this file for url
  return (
    <Grid container spacing={2}>
      <Grid size={4}>
        {loaderData?.map((chore) => (
          <ChoreViewComponent key={chore.title} chore={chore} />
        ))}
      </Grid>
    </Grid>
  );
}
