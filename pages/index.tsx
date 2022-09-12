import { Box } from "@mui/material";
import React from "react";
import Background from "../public/background.jpg";
import Apps from "../src/containers/Apps/index";
import MenuBar from "../src/containers/MenuBar/index";


export default function Home() {
  return (
    <Box sx={{...styles.main}}>
      <Box sx={{...styles.apps}}><Apps /></Box>
      <Box sx={{...styles.menuBar}}><MenuBar /></Box>
    </Box>
  );
}

const styles = {
  main: {
    height: "100vh",  
    width: "100%",
    overflow: "hidden",
    background: `url(${Background})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
  },
  menuBar: {
    bottom: "0px",
    position: "fixed",
    width: "100%"
  },
  apps: {
    height: "100%"
  }
}