import { makeAutoObservable } from "mobx"
import { IBody, ICategory, INote } from "../modules/notes/models"


class NotesStore {
  constructor() {
    makeAutoObservable(this)
  }


  notesArray: ICategory[] = JSON.parse(localStorage.getItem('notes') || '[]')

  addLocalStorage() {
    localStorage.setItem('notes', JSON.stringify(this.notesArray))
  }

  addNoteCategory(note: ICategory) {
    this.notesArray.push(note)
    this.addLocalStorage()
  }

  delCategory(categoryUrl: string) {
    this.notesArray = this.notesArray.filter((e) => e.categoryUrl !== categoryUrl)
    this.addLocalStorage()



  }

  addNote(newNote: INote) {
    this.notesArray.map((e) =>
      e.categoryUrl === newNote.parent ? e.notes.push(newNote) : false)
    this.addLocalStorage()

  }

  saveNote({ category, name, body }: IBody) {
    this.notesArray.map(
      (categoryNote) => (categoryNote.categoryUrl === category
        ?
        categoryNote.notes.map((note) => (note.noteUrl === name
          ?
          note.body = body : false))
        :
        false))
    this.addLocalStorage()

  }

  delNote(categoryUrl: string, noteUrl: string) {
    this.notesArray.map(
      (categoryNote) => (categoryNote.categoryUrl === categoryUrl
        ?
        categoryNote.notes = categoryNote.notes.filter((note) => (note.noteUrl !== noteUrl))
        :
        false
      )
    )
    this.addLocalStorage()

  }
}
const notesStore = new NotesStore()

export { notesStore }