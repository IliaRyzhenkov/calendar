import { Box } from "@mui/material"
import TaskItem from "./taskItem"

const tasks = [
  {
    title: 'drink beer',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, a.'
  },
  {
    title: 'drink coffee',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, a.'
  },
  {
    title: 'drink juice',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, a.'
  }
]

const TaskList = () => {
  return (
    <Box my={2.5}>
      {
        tasks.map((task) => (
          <TaskItem title={task.title} body={task.body} />
        ))
      }


    </Box>
  )
}

export default TaskList