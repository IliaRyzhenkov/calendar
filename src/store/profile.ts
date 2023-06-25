import { makeAutoObservable } from "mobx"



class ProfileStore {
  constructor() {
    makeAutoObservable(this)
  }

  countNotes = 6

}

const profileStore = new ProfileStore()

export { profileStore }