import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Divider,
  IconButton,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Analytics as AnalyticsIcon,
  TableChart as TableIcon,
  Settings as SettingsIcon,
  Person as PersonIcon,
  Widgets as WidgetsIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate, useLocation } from "react-router";
import { motion } from "framer-motion";

const drawerWidth = 280;

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const menuItems = [
  { text: "Dashboard", Icon: DashboardIcon, path: "/" },
  { text: "Analytics", Icon: AnalyticsIcon, path: "/analytics" },
  { text: "Data Tables", Icon: TableIcon, path: "/tables" },
  { text: "Components", Icon: WidgetsIcon, path: "/components" },
  { text: "Profile", Icon: PersonIcon, path: "/profile" },
  { text: "Settings", Icon: SettingsIcon, path: "/settings" },
];

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleNavigation = (path: string) => {
    navigate(path);
    if (isMobile) onClose();
  };

  const handleLogout = () => {
    localStorage.removeItem("mock-auth");
    navigate("/login");
  };

  return (
    <Drawer
      variant={isMobile ? "temporary" : "persistent"}
      open={open}
      onClose={onClose}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Box sx={{ overflow: "auto" }}>
          <Box
            sx={{
              p: 3,
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{ width: "100%" }}
            >
              <Typography
                variant="h5"
                component="div"
                sx={{ fontWeight: "bold", color: "primary.main" }}
              >
                Analytics Pro
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Dashboard v2.0
              </Typography>
            </motion.div>
            {isMobile && (
              <IconButton size="small" onClick={onClose} sx={{ ml: 0.5 }}>
                <MenuIcon />
              </IconButton>
            )}
          </Box>
          <Divider />
          <List sx={{ px: 1, py: 0.5 }}>
            {menuItems.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemButton
                    onClick={() => handleNavigation(item.path)}
                    selected={location.pathname === item.path}
                    sx={{
                      borderRadius: 1,
                      minHeight: 36,
                      px: 1.5,
                      // '&.Mui-selected': {
                      //   bgcolor: 'primary.light',
                      //   color: 'white',
                      //   '&:hover': {
                      //     bgcolor: 'primary.light',
                      //   },
                      // },
                    }}
                    dense
                  >
                    <ListItemIcon sx={{ minWidth: "32px" }} color="secondary" >
                      <item.Icon color={location.pathname !== item.path ? "action" : "secondary"} />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      slotProps={{
                        primary: {
                          sx: {
                            fontWeight:
                              location.pathname === item.path ? 600 : 400,
                            fontSize: "0.95rem",
                          },
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </motion.div>
            ))}
          </List>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ p: 2 }}>
          <Button
            variant="outlined"
            color="inherit"
            fullWidth
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
            sx={{
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
              justifyContent: "flex-start",
              bgcolor: "background.paper",
              "&:hover": {
                bgcolor: "grey.100",
              },
            }}
          >
            Logout
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
