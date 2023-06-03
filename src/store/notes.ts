import { makeAutoObservable, toJS } from "mobx"
import { ICategory } from "../modules/notes/models"
import { blue, orange, purple, teal } from "@mui/material/colors"


class NotesStore {
  constructor() {
    makeAutoObservable(this)
  }

  notesArray: ICategory[] = [
    {
      name: 'game',
      color: purple[400]
    },
    {
      name: 'chill',
      color: orange[900]
    },
    {
      name: 'work',
      color: blue[600]
    },
    {
      name: 'food',
      color: teal[600]
    },
  ]
}
const notesStore = new NotesStore

export { notesStore }