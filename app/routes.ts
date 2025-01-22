import {
    type RouteConfig,
    route,
    index,
    prefix,
} from "@react-router/dev/routes";

export default [
    index("./routes/Home.tsx", {id:"Home"}),
    route("user_profile/:userId","./routes/user_profile/UserProfile.tsx", {id:"User Profile", index: true}),
    // chores all route
    route("chores/:userId", "./routes/chores/Chores.tsx", {id:"Chores", index: true}),
    route("chores/:userId/:choreId", "./routes/chores/OneChore.tsx", {id:"Chore"}),

] satisfies RouteConfig;
