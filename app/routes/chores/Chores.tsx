import React from "react";
import { Box, Grid2 as Grid } from "@mui/material";
import type { Route } from "./+types/Chores";
import ChoreViewComponent from "~/routes/chores/ChoreViewComponent";
import ChoreCreateComponent from "~/routes/chores/ChoreCreateComponent";
import { getChores } from "~/api/chores";

async function fetchChores(userId: string) {
  const choresData = await getChores();
  return choresData.filter((chore) => `${chore.userId}` === userId);
}

export async function loader({ params }: Route.LoaderArgs) {
  return await fetchChores(params.userId);
}

// #diplaying all single chore
export default function Chores({ loaderData }: Route.ComponentProps) {
  // this file for url
  return (
    <Grid container spacing={2}>
      {/*Left box Chores List*/}
      <Grid size={6}>
        <Box sx={{ p: 3, bgcolor: "#cfe8fc", borderRadius: 1, height: "100%" }}>
          <Box component="span" style={{ fontSize: "2em" }}>
            Chore Details
          </Box>
          {loaderData?.map((chore) => (
            <ChoreViewComponent key={chore.title} chore={chore} />
          ))}
        </Box>
      </Grid>
      {/*Right box Chores List*/}
      <Grid size={6}>
        <Box sx={{ p: 3, bgcolor: "#cfe8fc", borderRadius: 1, height: "100%" }}>
          <ChoreCreateComponent />
        </Box>
      </Grid>
    </Grid>
  );
}
