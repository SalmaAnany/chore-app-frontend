import React from 'react';
import { TextField, Button, MenuItem, Box, Typography, Alert } from '@mui/material';
import {ActionFunctionArgs, redirect, useNavigation, useActionData, Form} from 'react-router';
import type {Route} from "./+types/MissionStart";
import {getSession} from "~/session.server";
import MissionResponse from "~/data/MissionResponse";

export async function action({ request }: ActionFunctionArgs) {
    // 1) Get the session from cookies
    const session = await getSession(request.headers.get("Cookie"));
    if (!session.has("userId")) {
        // Not logged in => redirect
        return redirect("/login");
    }

    // 2) Extract userId from session
    let userId = session.get("userId");

    if (!userId) {
        return redirect("/login");
    }
    userId = userId.toString().trimEnd();
    // 3) Read form data
    const formData = await request.formData();
    const recurrence = formData.get("recurrence")?.toString().trimEnd();
    const category = formData.get("category")?.toString().trimEnd();
    const timeLimit = formData.get("timeLimit")?.toString().trimEnd();
    if (!recurrence || !category || !timeLimit) {
        return { error: "Please fill in all fields" };
    }
    // 4) ...Use userId in your POST request
    try {
        const response = await fetch(`http://localhost:8080/users/${userId}/missions`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ recurrence: recurrence, category: category, timeLimit: Number(timeLimit), userId: Number(userId)}),
        });

        if (response.ok) {
            const data = await response.json();
            return { success: `Mission created with ID: ${data.missionId}` };
        } else if (response.status === 404) {
            const data = await response.json();
            return { error: data.message || "User not found" };
        } else {
            return { error: "An unexpected error occurred" };
        }
    } catch {
        return { error: "Failed to connect to the server" };
    }
}
const CreateMissionForm = ({ actionData }: Route.ComponentProps & { actionData?: { error?: string; success?: string } }) => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";

    return (
        <Box sx={{ maxWidth: 400, margin: "auto", padding: 3 }}>
            <Typography variant="h4" gutterBottom>
                Create Mission
            </Typography>

            {actionData?.error && <Alert severity="error">{actionData.error}</Alert>}
            {actionData?.success && <Alert severity="success">{actionData.success}</Alert>}

            <Form method="post">
                <TextField
                    fullWidth
                    select
                    name="recurrence"
                    label="Recurrence"
                    margin="normal"
                    required
                    defaultValue=""
                >
                    <MenuItem value="daily">Daily</MenuItem>
                    <MenuItem value="weekly">Weekly</MenuItem>
                    <MenuItem value="monthly">Monthly</MenuItem>
                </TextField>

                <TextField
                    fullWidth
                    name="category"
                    label="Category"
                    margin="normal"
                    placeholder="Optional"
                    defaultValue=""
                />

                <TextField
                    fullWidth
                    name="timeLimit"
                    label="Time Limit (minutes)"
                    type="number"
                    margin="normal"
                    required
                    defaultValue=""
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ marginTop: 2 }}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Creating..." : "Create Mission"}
                </Button>
            </Form>

            {/* If you want a "Back" button */}
            <Button variant="text" color="secondary" onClick={() => window.history.back()} sx={{ marginTop: 2 }}>
                Back
            </Button>
        </Box>
    );
}
export default CreateMissionForm;