import {
    type RouteConfig,
    route,
    index,
    prefix,
} from "@react-router/dev/routes";

export default [
    index("./routes/home.tsx"),
    route("profile", "./routes/user_profile/user_profile.tsx"),

    ...prefix("chores", [
        index("./routes/chores/home.tsx"),
        route(":chore", "./routes/chores/view_one_chore.tsx"),
    ])
] satisfies RouteConfig;
