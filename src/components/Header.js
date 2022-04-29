import React, { useState } from "react";
import logo from "../logo-white.svg";
import logoIcon from "../logo-icon.svg";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Article as ArticleIcon } from "@mui/icons-material";

const pages = ["Introduction", "Portfolio", "Testimonials", "Contact"];

const label = pages[0];

const drawerWidth = 240;

function Sidebar({ open }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      open={open}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box textAlign={"center"} sx={{ display: { xs: "none", md: "block" } }}>
        <img src={logoIcon} alt="Doug Kulak" width="200" height="200" />
      </Box>
      <Box sx={{ overflow: "auto" }}>
        <List>
          {pages.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

function MobileMenuButton({ onClick }) {
  return (
    <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={onClick}
      >
        <MenuIcon />
      </IconButton>
    </Box>
  );
}

function Logo() {
  return (
    <Box pt={1} sx={{ width: drawerWidth }}>
      <img src={logo} alt="Doug Kulak" width="155" height="30" />
    </Box>
  );
}

function PageTitle() {
  return (
    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
      {label}
    </Typography>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        enableColorOnDark
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <MobileMenuButton onClick={handleDrawerToggle} />
          <Logo />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <PageTitle />
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }} mr={2}>
            Get Started
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              color="inherit"
              variant="outlined"
              sx={{ color: "white", display: "block" }}
              href={"tel:5305002220"}
            >
              (530) 500-2220
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Sidebar open={mobileOpen} />
    </>
  );
}
