import { Button } from "@mui/material";
import React from "react";

export default function MenuButton({children, ...props} : any) {
  return (
        <Button sx={{...styles.button}} {...props}>
            {children}
        </Button>
    )
}

const styles = {
    button: {
        height: 40,
        minWidth: 40,
        '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.1)'
        }
    }
}