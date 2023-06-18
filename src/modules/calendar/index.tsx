import { Paper } from '@mui/material'
import { observer } from 'mobx-react'
import Calendar from 'react-calendar'
import { styled } from '@mui/material'
import ThemeStore from '../../store/theme'
import { useState } from 'react'
import TodoStore from '../../store/todo'


const TodoCalendar = observer(() => {
  const CustomCalendar: any = styled(Calendar)`
      .react-calendar__tile--now {
        background: ${ThemeStore.activeTheme.palette.primary.light} !important;
      }
    `;

  const [value, onChange] = useState(() => new Date())


  return (
    <Paper variant={'outlined'}
      sx={{ p: '0px', pt: '0px', borderRadius: '10px', boxShadow: '4px 4px 14px -10px grey' }}
    >
      <CustomCalendar
        locale={'en'}
        onChange={() => onChange(value)}
        onClickDay={(date: any) => TodoStore.setCurrentDate(date.toDateString())}
      />
    </Paper>
  )
})

export default TodoCalendar