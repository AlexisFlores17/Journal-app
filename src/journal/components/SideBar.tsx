import { TurnedInNot } from "@mui/icons-material";
import { Box, Divider, Drawer, Grid2, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { RootState } from "../../store";
import { useSelector } from "react-redux";

interface Props {
    drawerWidth?: number;
  }

export const SideBar = ({drawerWidth=240}:Props) => {
      const { displayName } = useSelector((state: RootState) => state.auth);

  return (
    <Box
        component="nav"
        sx={{width:{sm:drawerWidth}, flexShrink:{sm:0}}}
    >   
        <Drawer
            variant="permanent"
            open
            sx={{
                display:{xs:"block"},
                "& .MuiDrawer-paper":{width:drawerWidth}
            }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    {displayName}
                </Typography>
            </Toolbar>
            <Divider />
            <List>
                {
                    ["enero","febrero","marzo", "abril"].map( text =>(
                        <ListItem key={text} disablePadding>
                            <ListItemButton >
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid2 container>
                                    <ListItemText primary={text} />
                                    <ListItemText secondary="Cillum consectetur ea sit deserunt quis tempor adipisicing incididunt." />
                                </Grid2>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>

    </Box>
  )

}
