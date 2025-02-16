import { Typography } from "@mui/material"
import { MailOutline } from "@mui/icons-material"
import { JournalLayout } from "../layout/JournalLayout"

export const JournalPage = () => {
  return (
    <JournalLayout>
        <MailOutline />
        <Typography variant="h1" >JournalPages</Typography>
    </JournalLayout>
  )
}
