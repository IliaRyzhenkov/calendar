import { makeAutoObservable } from "mobx"



class ProfileStore {
  constructor() {
    makeAutoObservable(this)
  }

  countNotes = 6

  user = localStorage.getItem('user') == null
    ?
    'Fill Name'
    :
    JSON.parse(localStorage.getItem('user') || '')


  avatar = localStorage.getItem('avatar') == null
    ?
    'AA'
    :
    JSON.parse(localStorage.getItem('avatar') || '')

  saveName(firstName: string, lastName: string) {
    this.user = firstName + ' ' + lastName
    this.avatar = firstName.trim()[0] + lastName.trim()[0]
    localStorage.setItem('user', JSON.stringify(this.user))
    localStorage.setItem('avatar', JSON.stringify(this.avatar))

  }

}

const profileStore = new ProfileStore()

export { profileStore }