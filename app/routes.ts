import {
    type RouteConfig,
    route,
    index,
    prefix,
} from "@react-router/dev/routes";

export default [
    index("./routes/user_profile/UserProfile.tsx", {id:"Home/UserProfile"}),
    route("login","./routes/login/Login.tsx", {id:"Login"}),
    // chores all route
    route("chores", "./routes/chores/Chores.tsx", {id:"Chores", index: true}),
    route("chores/:choreId", "./routes/chores/OneChore.tsx", {id:"Chore"}),

    // Start Mission
    route("missions","./routes/missions/MissionStart.tsx", {id:"Missions", index: true}),
] satisfies RouteConfig;
