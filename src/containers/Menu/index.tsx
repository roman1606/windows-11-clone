import {
  Button,
  Popover,
  Stack,
  useTheme,
  Avatar,
  Typography,
  IconButton,
  Box,
  TextField,
  InputAdornment,
  Grid,
} from "@mui/material";
import React from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SearchIcon from "@mui/icons-material/Search";
import { pinnedApps, recommendedApps } from "../../utils/apps";

export default function Menu({ open, anchorEl, handleClose }: any) {
  const theme = useTheme();

  const MenuLabel = ({ title, buttonText }: any) => (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ ...styles.pinnedText }}
    >
      <Typography variant="body2">{title}</Typography>
      <Button
        size="small"
        variant="contained"
        disableElevation
        sx={{ ...styles.pinnedButton }}
      >
        {buttonText}
      </Button>
    </Stack>
  );

  const MenuContent = () => (
    <Stack
      sx={{
        width: "80vh",
        height: "60vh",
        [theme.breakpoints.up("lg")]: {
          width: 640,
          heigth: 750,
        },
      }}
    >
      <Box sx={{ ...styles.apps }}>
        <TextField
          variant="filled"
          fullWidth
          size="small"
          hiddenLabel
          placeholder="Type here to search"
          sx={{ ...styles.search }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <MenuLabel title="Pinned" buttonText="All Apps >" />

        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="flex-start"
          sx={{ ...styles.pinnedApps }}
        >
          {pinnedApps.map((app, i) => (
            <Button key={app.name} sx={{ ...styles.pinnedAppButton }}>
              <Stack
                spacing={1}
                direction="column"
                alignItems="center"
                justifyContent="center"
              >
                <img src={app.icon} alt={app.name} style={{ height: 30 }} />
                <Typography variant="caption">{app.name}</Typography>
              </Stack>
            </Button>
          ))}
        </Stack>

        <MenuLabel title="Recommended" buttonText="More >" />
        <Grid
          container
          direction="row"
          flexWrap="wrap"
          justifyContent="flex-start"
          spacing={2}
          sx={{ ...styles.recommendedApps }}
        >
          {recommendedApps.map((app, i) => (
            <Grid item key={app.name} xs={12} lg={6}>
              <Button fullWidth sx={{ ...styles.recommendedAppButton }}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <img src={app.icon} alt={app.name} style={{ height: 30 }} />
                  <Stack alignItems="flex-start">
                    <Typography
                      variant="caption"
                      sx={{ ...styles.reccommendedText }}
                    >
                      {app.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ ...styles.reccommendedText }}
                    >
                      Recently Added
                    </Typography>
                  </Stack>
                </Stack>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Stack justifyContent="center" sx={{ ...styles.bottom }}>
        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent="space-between"
          sx={{ ...styles.user }}
        >
          <Button
            direction="row"
            spacing={1}
            alignContent="center"
            sx={{ ...styles.button }}
          >
            <Avatar sx={{ ...styles.avatar }} />
            <Typography>Roman</Typography>
          </Button>
          <IconButton size="small">
            <PowerSettingsNewIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      transformOrigin={{ vertical: "bottom", horizontal: "left" }}
      PaperProps={{
        style: { backgroundColor: "transparent", boxShadow: "none" },
      }}
    >
      <MenuContent />
    </Popover>
  );
}

const styles = {
  user: {
    px: { xs: 2, lg: 4 },
  },
  button: {
    textTransform: "inherit",
    color: "#fff",
    "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
  },
  avatar: {
    mr: 1.5,
    width: 30,
    height: 30,
  },
  bottom: {
    px: 3,
    height: 60,
    backgroundColor: "#232425",
    border: "1px solid #525252",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  apps: {
    p: 3,
    flex: 1,
    backgroundColor: "#333333",
    backdropFilter: "blue(5px)",
    border: "1px solid #525252",
    borderTop: "none",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  search: {
    paddingBottom: { sx: 2, lg: 4 },
  },
  pinnedText: {
    px: { xs: 2, lg: 4 },
    mb: 2,
  },
  pinnedButton: {
    textTransform: "inherit",
    backgroundColor: "rgba(255,255,255,0.1)",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.2)",
    },
  },
  pinnedApps: {
    mb: 3,
  },
  pinnedAppButton: {
    height: 85,
    minWidth: 98,
    width: 98,
    color: "#fff",
    textTransform: "inherit",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.1)",
    },
  },
  recommendedApps: {
    px: 2,
  },
  recommendedAppButton: {
    py: 1,
    px: 2,
    justifyContent: "flex-start",
    textTransfor: "inherit",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.2)",
    },
  },
  reccommendedText: {
    color: "#fff",
  },
};
