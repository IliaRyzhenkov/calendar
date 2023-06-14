import { makeAutoObservable } from "mobx"
import { ICategory, INote } from "../modules/notes/models"


class NotesStore {
  constructor() {
    makeAutoObservable(this)
  }


  notesArray: ICategory[] = JSON.parse(localStorage.getItem('notes') || '[]') 
  
  addNoteCategory(note: ICategory) {
    this.notesArray.push(note)
    localStorage.setItem('notes', JSON.stringify(this.notesArray))
  }

  addNote(newNote: INote) {
    
    
  }
}
const notesStore = new NotesStore()

export { notesStore }