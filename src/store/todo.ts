import {makeAutoObservable} from 'mobx'
import { ItaskItem } from '../modules/todo/models'



class TodoStore{
    constructor(){
        makeAutoObservable(this)
    }

    todoArray : ItaskItem[] = (localStorage.getItem('todo')) == null ? [] :
    JSON.parse(localStorage.getItem('todo') || '')

    addNewTask(taskItem : {title:string, body:string}){
      this.todoArray = [...this.todoArray, taskItem]
      localStorage.setItem('todo', JSON.stringify(this.todoArray))
      
    }

    delateTask(title: string){
      this.todoArray = this.todoArray.filter(e => e.title !== title)
      localStorage.setItem('todo', JSON.stringify(this.todoArray))
    }

    

}



export default new TodoStore()