import React from 'react';
import {List, ListItem, ListItemButton, ListItemText} from '@mui/material';
import { Link } from 'react-router';
import routes from './routes';

const Sidebar = () => {
    const menuItems = routes.filter(route => {
        return route.index === true
    }).map(route => {
        return ({ label: route.id, route: route.path })
    })


    return (
        <List>
            {menuItems.map((item) => (
                <ListItem key={item.label} component={(props) => <Link {...props} to={item.route!} />}>
                    <ListItemButton>
                        <ListItemText primary={item.label} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
};

export default Sidebar;