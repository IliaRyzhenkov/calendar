import { makeAutoObservable, toJS } from "mobx"
import { ICategory } from "../modules/notes/models"
import { blue, orange, purple, teal } from "@mui/material/colors"


class NotesStore {
  constructor() {
    makeAutoObservable(this)
  }

  notesArray: ICategory[] = [
    {
      categoryUrl: 'game',
      name: 'Game',
      color: purple[400]
    },
    {
      categoryUrl: 'chill',
      name: 'Chill',
      color: orange[900]
    },
    {
      categoryUrl: 'work',
      name: 'Work',
      color: blue[600]
    },
    {
      categoryUrl: 'food',
      name: 'Food',
      color: teal[600]
    },
  ]
}
const notesStore = new NotesStore

export { notesStore }