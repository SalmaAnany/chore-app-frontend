import UserProfileDetails from "~/routes/user_profile/UserProfileDetails";
import {getUser} from "~/api/users";
import {getSession} from "~/session.server";
import type { Route } from "./+types/UserProfile";
import {redirect} from "react-router";

export async function loader({
                                 request,
                             }: Route.LoaderArgs) {
    const session = await getSession(request.headers.get("Cookie"));

    if (session.has("userId")) {
        const userId = session.get("userId");
        return await getUser(Number(userId))
    } else {
        return redirect("/login");
    }
}
export default function UserProfile({loaderData,}: Route.ComponentProps) {
    return <UserProfileDetails userData={loaderData} />

}