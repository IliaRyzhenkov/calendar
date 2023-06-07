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
      color: 0
    },
    {
      icon: 4,
      categoryUrl: 'chill',
      name: 'Chill',
      color: 5
    },
    {
      icon: 5,
      categoryUrl: 'work',
      name: 'Work',
      color: 2
    },
    {
      icon: 8,
      categoryUrl: 'food',
      name: 'Food',
      color: 3
    },
  ]
}
const notesStore = new NotesStore

export { notesStore }