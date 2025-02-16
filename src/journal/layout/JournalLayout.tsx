import { Box } from "@mui/material"
import React from "react"
import { NavBar } from "../components/NavBar";

interface Props {
    children: React.ReactNode
}

const drawerWidth = 240;

export const JournalLayout = ({children}:Props) => {
  return (
    <Box sx={{ display:"flex"}}>
        <NavBar drawerWidth={drawerWidth} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            {children}
        </Box>
    </Box>
  )
}
