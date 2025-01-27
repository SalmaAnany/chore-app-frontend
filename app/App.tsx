'use client';
import React from "react";
import {
    AppBar,
    Box,
    Toolbar,
    Drawer,
    Typography
} from "@mui/material";
import Sidebar from "~/Sidebar";
import { Outlet } from "react-router";

const drawerWidth = 240;

export default function App() {
    return (
        <Box sx={{ display: "flex" }}>
      {/* TOP BAR */}
            <AppBar
                position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
          <Typography variant="h6" component="div">
                        Chore Tracker
                    </Typography>
                </Toolbar>
            </AppBar>

      {/* PERMANENT DRAWER */}
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
          "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
                }}
                anchor="left"
            >
                <Toolbar />
                <Sidebar />
            </Drawer>

      {/* MAIN CONTENT, removing pl:30 when we deploy that's  a bug I could not solve*/}
      <Box component="main" sx={{ flexGrow: 1, p: 3, pl: 30 }}>
        <Toolbar />  {/* so our content is below the app bar */}
          <Outlet />   {/* renders child routes, such as the chores list */}
            </Box>
        </Box>
    );
}