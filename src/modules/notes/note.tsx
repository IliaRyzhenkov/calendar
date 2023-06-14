import { Box, Paper, Typography } from '@mui/material';
import { NavLink, useParams } from 'react-router-dom'
import { notesStore } from '../../store/notes';
import AddNote from './components/add-note';
import { INote } from './models';
import { observer } from 'mobx-react';



const Note = observer(() => {
  const { noteCategory } = useParams()
  const categoryIndex = notesStore.notesArray.findIndex((e) => e.categoryUrl === noteCategory)  // remake find
  const currentCategory = notesStore.notesArray[categoryIndex]
  return (
    <Paper variant={'outlined'} square={true}
      sx={{
        p: '22px',
        borderRadius: '10px',
        boxShadow: `4px 4px 14px -10px ${currentCategory.color}`
      }}
    >
      <Box display={'flex'} alignItems={'center'} mb={2}>
        <Typography color={currentCategory.color} variant={'h5'} textTransform={'uppercase'} fontWeight={'600'}>
          {currentCategory.name}
        </Typography>
      </Box>
      {
        currentCategory.notes.map((e: INote) => (
          <NavLink to={`./${e.title.toLowerCase().trim().replaceAll(' ', '-')}`}>
            <Paper key={e.title} variant={'outlined'}
              sx={{ p: 1, pl: 2, mb: 1, borderRadius: '6px' }}>
              <Typography variant={'h6'}>
                {e.title}
              </Typography>
            </Paper>
          </NavLink>
        ))
      }
      <AddNote />
    </Paper>
  )
})

export default Note