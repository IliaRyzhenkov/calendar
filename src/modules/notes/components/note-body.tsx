import { Box, SvgIcon, Typography } from '@mui/material'
import { useState } from 'react'
import { IBody } from '../models'
import { Edit, Save } from '@mui/icons-material'
import MDEditor from '@uiw/react-md-editor'


const NoteBody = ({ color, body }: IBody) => {
  const [edit, setEdit] = useState(true)
  const [value, setValue] = useState(() => body)

  return (
    <>
      <Box position={'absolute'} right={'25px'} top={'25px'} display={'flex'}>
        {
          edit
            ?
            <Box onClick={() => setEdit(!edit)} display={'flex'} alignItems={'center'} mb={2} sx={{ cursor: 'pointer' }}>
              <SvgIcon sx={{
                color: color,
                fontSize: '24px',
                mr: 0.2,
              }}>
                <Edit />
              </SvgIcon>
              <Typography variant={'h5'} fontWeight={'600'} color={color}>
                Edit
              </Typography>
            </Box>
            :
            <Box onClick={() => setEdit(!edit)} display={'flex'} alignItems={'center'} mb={2} ml={1.5} sx={{ cursor: 'pointer' }}>
              <SvgIcon sx={{
                color: color,
                fontSize: '24px',
                mr: 0.2,
              }}>
                <Save />
              </SvgIcon>
              <Typography variant={'h5'} fontWeight={'600'} sx={{ color: color }}>
                Save
              </Typography>
            </Box>
        }
      </Box>
      {
        edit
          ?
          <MDEditor.Markdown source={value} />
          :
          <MDEditor value={value} onChange={(val) => {
            setValue(val!)
          }}
          />
      }
    </>
  )
}

export default NoteBody