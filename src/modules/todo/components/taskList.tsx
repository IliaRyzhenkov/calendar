import { Box } from "@mui/material"
import TaskItem from "./taskItem"
import TodoStore from '../../../store/todo'
import { observer } from "mobx-react"


const TaskList = observer(() => {

  return (
    <Box my={2.5}>
      {
        TodoStore.todoArray.map((task) => (
          <TaskItem title={task.title} body={task.body} key={task.title} />
        ))
      }


    </Box>
  )
})

export default TaskList