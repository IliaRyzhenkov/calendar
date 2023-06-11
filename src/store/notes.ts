import { makeAutoObservable } from "mobx"
import { ICategory } from "../modules/notes/models"


class NotesStore {
  constructor() {
    makeAutoObservable(this)
  }


  notesArray: ICategory[] = [
    {
      icon: 3,
      categoryUrl: 'game',
      name: 'Game',
      color:'#FDBE7E',
    },
    {
      icon: 4,
      categoryUrl: 'chill',
      name: 'Chill',
      color: '#F9A090',
    },
    {
      icon: 5,
      categoryUrl: 'work',
      name: 'Work',
      color:  '#6DD28C',
    },
    {
      icon: 8,
      categoryUrl: 'food',
      name: 'Food',
      color:   '#A59FDB'

    },
  ]
  addNote(note:ICategory) {
    this.notesArray.push(note)
  }
}
const notesStore = new NotesStore

export { notesStore }