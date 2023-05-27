import { Box, Button, Paper, Typography } from "@mui/material"
import { Check, Delete } from '@mui/icons-material'
import { ItaskItem } from "../models"
import TodoStore from "../../../store/todo"

const TaskItem = ({ title, body, id, status }: ItaskItem) => {
  return (
    <Paper variant={'outlined'}
      sx={{
        bgcolor: status ? 'white' : '#f3f7fa',
        p: 2, mb: 2, borderRadius: '16px'
      }}>
      <Box display={'flex'} alignItems={'centr'}
        mb={1} pb={1} pt={1}
        borderBottom={'1px solid #e7e7e7'}
      >
        <Typography sx={{ width: '80%' }} variant="h6">
          {title}
        </Typography>
        <Box sx={{ width: '20%', textAlign: 'end' }}>
          <Button variant="outlined"
            sx={{ minWidth: '20px', p: '5px 7px' }}
            onClick={() => TodoStore.changeStatusTask(id)}
          >
            {status ? <Check /> : 'done'}
          </Button>
          <Button variant="outlined"
            sx={{ minWidth: '20px', p: '5px 7px', ml: 1 }}
            onClick={() => TodoStore.delateTask(id)}
          >
            <Delete />
          </Button>
        </Box>
      </Box>
      <Typography variant="h5">
        {body}
      </Typography>
    </Paper>
  )
}

export default TaskItem