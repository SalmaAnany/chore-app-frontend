import React from "react";
import {Box, List, ListItem, ListItemText, Typography} from "@mui/material";
import UserData from "~/data/UserData";
import ChoreViewComponent from "~/routes/chores/ChoreViewComponent";

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
            Chores
        </Typography>
        <List>
            {userData.chores?.map((chore, index) => (
                <ChoreViewComponent chore={chore} key={index} />
            ))}
        </List>
        <Typography variant="h5" gutterBottom sx={{marginTop: 3}}>
            Missions
        </Typography>
        <List>
            {userData.missions?.map((chore, index) => (
                <ListItem key={index}>
                    <ListItemText
                        primary={chore.missionId}
                        secondary={chore.dateStarted}
                    />
                </ListItem>
            ))}
        </List>

    </Box>
);

export default UserProfileDetails;