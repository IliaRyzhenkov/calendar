import { Box, Button, ButtonGroup } from "@mui/material"

const buttons = [
  <Button variant="contained" key="all">All</Button>,
  <Button key="active">Active</Button>,
  <Button key="done">Done</Button>
]

const TaskForm = () => {
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
    >
      <ButtonGroup sx={{ height: '40px' }}>
        {buttons}
      </ButtonGroup>
      <Button variant="outlined"
        sx={{ height: '40px' }}
      >
        Add New Task
      </Button>
    </Box>
  )
}

export default TaskForm