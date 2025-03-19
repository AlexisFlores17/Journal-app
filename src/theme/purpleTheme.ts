import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const purpleTheme = createTheme({
    palette:{
        mode:"dark",
        // primary:{
        //     main:"#262254"
        // },
        // secondary:{
        //     main:"#543884"
        // },
        error:{
            main:red.A400
        }
    }
    
})