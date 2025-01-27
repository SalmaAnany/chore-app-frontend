import React, {useEffect, useMemo, useState} from "react";
import {Box, Grid2 as Grid} from "@mui/material";
import type {Route} from "./+types/Chores";
import ChoreViewComponent from "~/routes/chores/ChoreViewComponent";
import ChoreCreateComponent from "~/routes/chores/ChoreCreateComponent";
import { getChores } from "~/api/chores";
import {getSession} from "~/session.server";
import {redirect} from "react-router";

async function fetchChores(userId: string) {
  return  await getChores(Number(userId));
}

export async function loader({ request }: Route.LoaderArgs) {
    const session = await getSession(request.headers.get("Cookie"));
    if (session.has("userId")) {
        const userId = session.get("userId");
        if(!userId) {
            return redirect("/login");
        }
        return await fetchChores(userId);
    } else {
        return redirect("/login");
    }
}

// #diplaying all single chore
export default function Chores({ loaderData }: Route.ComponentProps) {
  // this file for url
  return (
    <Grid container spacing={2}>
      {/* Chores List */}
      <Grid size={6}>
        <Box sx={{ p: 3, bgcolor: "#cfe8fc", borderRadius: 1, height: "100%" }}>
          <Box component="span" style={{ fontSize: "2em" }}>
            Chores List
          </Box>
          {loaderData?.map((chore) => (
            <ChoreViewComponent key={chore.title} chore={chore} />
          ))}
        </Box>
      </Grid>

      {/* Create Chore */}
      <Grid size={6}>
        <Box sx={{ p: 3, bgcolor: "#cfe8fc", borderRadius: 1, height: "100%" }}>
          <ChoreCreateComponent />
        </Box>
      </Grid>
    </Grid>
  );
}
