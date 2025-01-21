import React from 'react';
import {
    Drawer,
    Toolbar,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Typography,
    Box,
    SxProps,
    Theme
} from '@mui/material';
import {Link} from "react-router";

interface SidebarProps {
    drawerWidth?: number;
    sx?: SxProps<Theme>;
}

const defaultMenuItems = [
    { label: 'User Profile', route: '/profile' },
    { label: 'Chores', route: '/chores' },
    // { label: 'Rewards', route: '/rewards' },
    // { label: 'Missions', route: '/missions' }
];

const Sidebar: React.FC<SidebarProps> = ({
                                             drawerWidth = 240,
                                             sx,
                                         }) => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
                ...sx
            }}
        >
            {}
            <Toolbar />

            {/* Main Sidebar Content */}
            <Box sx={{ overflow: 'auto', p: 2 }}>
                <Typography variant="h6" gutterBottom>
                    Inspiration
                </Typography>
                <Typography variant="body2" gutterBottom>
                    “The secret of getting ahead is getting started.” – Mark Twain
                </Typography>

                <List>
                    {defaultMenuItems.map((item) => (
                        <ListItem key={item.label} disablePadding>
                            <Link to={item.route}>
                                <ListItemText primary={item.label} />
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};

export default Sidebar;