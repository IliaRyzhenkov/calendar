import { makeAutoObservable, toJS } from 'mobx'
import { ItaskItem } from '../modules/todo/models'



class TodoStore {
  constructor() {
    makeAutoObservable(this)
  }

  todoArray: ItaskItem[] = (localStorage.getItem('todo')) == null ? [] :
    JSON.parse(localStorage.getItem('todo') || '')

  addNewTask(taskItem: ItaskItem) {
    const newTask: ItaskItem = {
      ...taskItem,
      status: true,
      id: Date.now()
    }
    localStorage.setItem('todo', JSON.stringify(this.todoArray))
  }
  changeStatusTask(id: number | undefined) {
    this.todoArray.map((e) => {
      if (e.id == id) {
        return e.status = !e.status
      }
      console.log(toJS(this.todoArray));

    })
    localStorage.setItem('todo', JSON.stringify(this.todoArray))
  }

  delateTask(id: number | undefined) {
    this.todoArray = this.todoArray.filter(e => e.id !== id)
    localStorage.setItem('todo', JSON.stringify(this.todoArray))
  }



}



export default new TodoStore()