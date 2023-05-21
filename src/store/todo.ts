import {makeAutoObservable} from 'mobx'


class TodoStore{
    constructor(){
        makeAutoObservable(this)
    }
    todoArray = [
      {
        title: 'drink beer',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, a.'
      }
    ]

    addNewTask(taskItem : {title:string, body:string}){
      this.todoArray = [...this.todoArray, taskItem]
      
    }

}



export default new TodoStore()