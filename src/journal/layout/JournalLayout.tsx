import { Box } from "@mui/material"
import React from "react"
import { SideBar , NavBar} from "../components";

interface Props {
    children: React.ReactNode
}

const drawerWidth = 280;

export const JournalLayout = ({children}:Props) => {
  return (
    <Box sx={{ display:"flex"}}>
        <SideBar drawerWidth={drawerWidth} />
        <NavBar drawerWidth={drawerWidth} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            {children}
        </Box>
    </Box>
  )
}
