import { Button, TextField } from '@mui/material'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import TodoStore from '../../../store/todo'
import { ItaskItem } from '../models';



const AddTask = () => {

  const [open, setOpen] = useState(false);
  const [taskItem, setTaskItem] = useState({ title: '', body: '' })


  return (
    <>
      <Button variant="outlined"
        sx={{ height: '40px' }}
        onClick={() => setOpen(true)}
      >
        Add New Task
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth={'sm'}
        fullWidth={true}
      >
        <DialogTitle>
          New Task
        </DialogTitle>
        <DialogContent sx={{ pb: 0 }}>
          <TextField
            fullWidth
            value={taskItem.title}
            onChange={e => setTaskItem({ ...taskItem, title: e.target.value })}
            label='Task Name'
            sx={{ mb: 2, mt: 1 }}
          />
          <TextField
            fullWidth
            value={taskItem.body}
            onChange={e => setTaskItem({ ...taskItem, body: e.target.value })}
            label='Task Description'
          />
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button variant='outlined'
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button variant='outlined'
            onClick={() => {
              setOpen(false);
              TodoStore.addNewTask(taskItem)
              setTaskItem({ title: '', body: '' })
            }}
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AddTask