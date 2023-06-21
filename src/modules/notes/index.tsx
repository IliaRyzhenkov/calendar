import { Box, Paper } from "@mui/material"
import { observer } from "mobx-react"
import { notesStore } from "../../store/notes"
import { ICategory } from "./models"
import { NavLink } from "react-router-dom"
import CategoryNotes from "./components/category"
import AddCategory from "./components/add-category"

const Notes = observer(() => {
  return (
    <>
      <Box display={'flex'} flexWrap={'wrap'} m={'-5px'}>
        {
          notesStore.notesArray.map((e: ICategory) => (
            <Paper
              key={e.name}
              sx={{
                flexBasis: 'calc(33.3% - 10px)',
                m: '5px',
                position: 'relative',
                minHeight: '205px',
                flexGrow: '1',
                cursor: 'pointer',
                borderRadius: '10px'
              }}>
              <NavLink
                to={`./${e.categoryUrl}`}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  padding: '30px'
                }}
              >
                <CategoryNotes name={e.name} color={e.color} icon={e.icon} notes={e.notes} categoryUrl={e.categoryUrl}/>
              </NavLink>
            </Paper>
          ))
        }
      </Box>
      <AddCategory />
    </>
  )
})

export default Notes