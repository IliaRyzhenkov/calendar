import { Box } from "@mui/material"
import TaskItem from "./taskItem"
import TodoStore from '../../../store/todo'
import { observer } from "mobx-react"


const TaskList = observer(() => {

  return (
    <Box my={2.5}>
      {
        TodoStore.todoArray.map((task) => {
          if (TodoStore.currentDate == task.date && (TodoStore.filterTasks == task.status || TodoStore.filterTasks == null)) {
            return (

              <TaskItem title={task.title} body={task.body} key={task.id} id={task.id} status={task.status} />
            )
          }
        })
      }


    </Box>
  )
})

export default TaskList