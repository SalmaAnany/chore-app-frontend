import * as React from "react";
import {
    isRouteErrorResponse,
    Links,
    Meta,
    Scripts,
    ScrollRestoration,
} from "react-router";
import type { Route } from "./+types/root";
import theme from '~/theme'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {CssBaseline, ThemeProvider,} from "@mui/material";

import App from "~/App";

export default function Root() {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1, width=device-width" />
            <Meta />
            <Links />
            <title> You can do it!</title>
            <CssBaseline/>
        </head>
        <body>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
            <ScrollRestoration />
            <Scripts />
        </body>
        </html>
    );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
    let message = "Oops!";
    let details = "An unexpected error occurred.";
    let stack: string | undefined;

    if (isRouteErrorResponse(error)) {
        message = error.status === 404 ? "404" : "Error";
        details =
            error.status === 404
                ? "The requested page could not be found."
                : error.statusText || details;
    } else if (import.meta.env.DEV && error && error instanceof Error) {
        details = error.message;
        stack = error.stack;
    }

    return (
        <main style={{ padding: "1rem" }}>
            <h1>{message}</h1>
            <p>{details}</p>
            {stack && (
                <pre style={{ whiteSpace: "pre-wrap" }}>
          <code>{stack}</code>
        </pre>
            )}
        </main>
    );
}