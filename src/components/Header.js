import React, { useState } from "react";
import logo from "../logo-white.svg";
import logoIcon from "../logo-icon.svg";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Article as ArticleIcon } from "@mui/icons-material";

const pages = ["Introduction", "Portfolio", "Testimonials"];

const label = pages[0];

const drawerWidth = 240;

function Sidebar({ open }) {
  return (
    <Drawer
      variant={"temporary"}
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
    <Box pt={1} mr={8}>
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

function MainNav() {
  return (
    <Stack direction="row" spacing={4}>
      {pages.map((page, i) => (
        <Link
          underline="hover"
          color="inherit"
          key={i}
          href={"#"}
          sx={{ textTransform: "uppercase" }}
          fontSize={"small"}
          fontWeight={"bold"}
        >
          {page}
        </Link>
      ))}
    </Stack>
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
        elevation={0}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Container>
          <Toolbar disableGutters>
            <MobileMenuButton onClick={handleDrawerToggle} />
            <Logo />
            <Box
              sx={{
                textAlign: "right",
                flexGrow: 1,
                justifyContent: "flex-end",
                display: { xs: "none", md: "flex" },
              }}
            >
              <MainNav />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Sidebar open={mobileOpen} />
    </>
  );
}
