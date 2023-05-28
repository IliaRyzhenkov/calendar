
import { Box, Button, ButtonGroup } from "@mui/material"
import AddTask from "./addTask"
import { observer } from "mobx-react"
import TodoStore from '../../../store/todo'


const TaskForm = observer(() => {
  const buttons = [
    <Button variant={TodoStore.filterTasks == null ? 'contained' : 'outlined'} key="all" onClick={() => { TodoStore.filteredTasks(null) }}>All</Button>,
    <Button variant={TodoStore.filterTasks == true ? 'contained' : 'outlined'} key="active" onClick={() => { TodoStore.filteredTasks(true) }}>Active</Button>,
    <Button variant={TodoStore.filterTasks == false ? 'contained' : 'outlined'} key="done" onClick={() => { TodoStore.filteredTasks(false) }}>Done</Button>
  ]
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
    >
      <ButtonGroup sx={{ height: '40px' }}>
        {buttons}
      </ButtonGroup>
      <AddTask />
    </Box>
  )
})

export default TaskForm