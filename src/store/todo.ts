import { makeAutoObservable, toJS } from 'mobx'
import { ItaskItem } from '../modules/todo/models'



class TodoStore {
  constructor() {
    makeAutoObservable(this)
  }

  filterTasks: null | boolean = null

  todoArray: ItaskItem[] = (localStorage.getItem('todo')) == null ? [] :
    JSON.parse(localStorage.getItem('todo') || '')

  addNewTask(taskItem: ItaskItem) {
    const newTask: ItaskItem = {
      ...taskItem,
      status: true,
      id: Date.now()
    }
    this.todoArray.push(newTask)
    localStorage.setItem('todo', JSON.stringify(this.todoArray))
  }
  changeStatusTask(id: number | undefined) {
    this.todoArray.map((e) => {
      if (e.id == id) {
        return e.status = !e.status
      }

    })
    localStorage.setItem('todo', JSON.stringify(this.todoArray))
  }

  delateTask(id: number | undefined) {
    this.todoArray = this.todoArray.filter(e => e.id !== id)
    localStorage.setItem('todo', JSON.stringify(this.todoArray))
  }

  filteredTasks(filter: null | boolean) {
    this.filterTasks = filter
  }


}



export default new TodoStore()