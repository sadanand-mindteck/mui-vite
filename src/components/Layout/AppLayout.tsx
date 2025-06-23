import React, { useState } from "react";
import {
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
  AppBar,
  Toolbar,
  Typography,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";
import { motion } from "framer-motion";

const drawerWidth = 280;

const AppLayout: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [sidebarOpen, setSidebarOpen] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 900; // md breakpoint for MUI
    }
    return true;
  });

  // Show sidebar by default on desktop, hide on mobile
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSidebarToggle = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <AppBar
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer,
          backgroundColor: "background.paper",
          boxShadow: "0 2px 8px 0 rgba(145, 158, 171, 0.08)",
          ml: !isMobile && sidebarOpen ? `${drawerWidth}px` : 0,
          width: !isMobile && sidebarOpen ? `calc(100% - ${drawerWidth}px)` : '100%',
          transition: 'margin 0.3s, width 0.3s',
        }}
      >
        <Toolbar>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleSidebarToggle}
            sx={{
              mr: 2,
              display: { xs: "inline-flex", md: "inline-flex" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, fontWeight: 700 }}
          >
            Analytics Dashboard
          </Typography>
          <Avatar sx={{ width: 32, height: 32, bgcolor: "primary.main" }}>
            A
          </Avatar>
        </Toolbar>
      </AppBar>
      <Sidebar open={sidebarOpen} onClose={handleSidebarToggle} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          backgroundColor: "background.default",
          minHeight: "calc(100vh - 64px)",
          transition: "margin 0.3s",
           ml: !isMobile && !sidebarOpen ? `-${drawerWidth}px` : 0,
          width: !isMobile && sidebarOpen ? `calc(100% - ${drawerWidth}px)` : '100%',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Outlet />
        </motion.div>
      </Box>
    </Box>
  );
};

export default AppLayout;
