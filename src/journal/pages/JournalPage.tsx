

import { Toolbar } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"

export const JournalPage = () => {
  return (
    <JournalLayout>
      <Toolbar />
        {/* <NothingSelectedView /> */}
        <NoteView />
    </JournalLayout>
  )
}
