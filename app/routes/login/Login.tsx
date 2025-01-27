import {data, redirect} from "react-router";
import type {Route} from "./+types/Login";
import {commitSession, getSession,} from "~/session.server";

export async function loader({
                                 request,
                             }: Route.LoaderArgs) {
    const session = await getSession(request.headers.get("Cookie"));

    if (session.has("userId")) {
        return redirect("/");
    }

    return data({error: session.get("error")}, {
        headers: {
            "Set-Cookie": await commitSession(session),
        },
    });
}

export async function action({
                                 request,
                             }: Route.ActionArgs) {
    const session = await getSession(request.headers.get("Cookie"));
    const form = await request.formData();
    const userId = form.get("userId");
    if (userId == null) {
        session.flash("error", "Invalid username/password");

        // Redirect back to the login page with errors.
        return redirect("/login", {
            headers: {
                "Set-Cookie": await commitSession(session),
            },
        });
    }

    session.set("userId", userId.toString().trimEnd());

    // Login succeeded, send them to the home page.
    return redirect("/", {
        headers: {
            "Set-Cookie": await commitSession(session),
        },
    });
}

export default function Login({
                                  loaderData,
                              }: Route.ComponentProps) {
    const {error} = loaderData;

    return (<>
        {error ? <div className="error">{error}</div> : null}
        <div>
            {error ? <div className="error">{error}</div> : null}
            <form method="POST">
                <div>
                    <p>Please sign in</p>
                </div>
                <label>
                    UserId: <input type="text" name="userId"/>
                </label>
            </form>
        </div>
    </>);
}