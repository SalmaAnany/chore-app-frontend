import React from "react";
import {Box, List, ListItem, ListItemText, Typography} from "@mui/material";
import UserData from "~/data/UserData";

const UserProfileDetails: React.FC<{ userData: UserData }> = ({userData}) => (
    <Box sx={{maxWidth: 600, margin: "auto", padding: 3}}>
        <Typography variant="h4" gutterBottom>
            User Profile
        </Typography>
        <Typography variant="body1">
            <strong>ID:</strong> {userData.id}
        </Typography>
        <Typography variant="body1">
            <strong>First Name:</strong> {userData.firstName}
        </Typography>
        <Typography variant="body1">
            <strong>Last Name:</strong> {userData.lastName}
        </Typography>
        <Typography variant="body1">
            <strong>Username:</strong> {userData.username}
        </Typography>
        <Typography variant="body1">
            <strong>Email:</strong> {userData.email}
        </Typography>
        <Typography variant="h5" gutterBottom sx={{marginTop: 3}}>
            Chore Responses
        </Typography>
        <List>
            {userData.choreResponses?.map((chore, index) => (
                <ListItem key={index}>
                    <ListItemText
                        primary={chore.title} // Assuming ChoreResponse has a `title` field
                        secondary={chore.description} // Assuming ChoreResponse has a `description` field
                    />
                </ListItem>
            ))}
        </List>
    </Box>
);

export default UserProfileDetails;