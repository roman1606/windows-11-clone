import { Box, Stack } from "@mui/material";
import React, {useState} from "react";
import MenuButton from "../../components/MenuButton";
import {menuIcon, cortanaIcon, taskbarApps} from "../../utils/apps"
import Menu from '../Menu/index'

export default function MenuBar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (e: { currentTarget: React.SetStateAction<null>; }) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

  return (
    <Box sx={{ ...styles.container }}>
      <Stack
        direction="row"
        alignItems="center"
        spacing={0.5}
        sx={{ ...styles.stack }}
      >
          <MenuButton onClick={handleClick}>
              <img src={menuIcon} alt='Start' style={{height: 23}} />
          </MenuButton>
          <MenuButton onClick={console.log}>
              <img src={cortanaIcon} alt='cortana' style={{height: 23}} />
          </MenuButton>

          {taskbarApps.map((app, i) =>(
            <MenuButton key={i}>
                <img src={app.icon} alt={app.name} style={{ height: 26}} />
            </MenuButton>
          ))}
      </Stack>

      <Menu open={open} anchorEl={anchorEl} handleClose={handleClose}/>
    </Box>
  );
}

const styles = {
  container: {
    width: "100%",
    height: 50,
    backgroundColor: "#333333",
    backdropFilter: "blur(2px)",
  },
  stack: {
    height: "100%",
    paddingLeft: 1.8,
  },
};
