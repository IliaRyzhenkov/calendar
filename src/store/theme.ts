import {makeAutoObservable} from 'mobx'
import { blackTheme, blueTheme, orangeTheme, purpleTheme } from '../themes'

class ThemeStore{
    constructor(){
        makeAutoObservable(this)
    }
    activeTheme:any = blackTheme

     setActiveTheme (theme:any){
      this.activeTheme = theme
     }
}

export default new ThemeStore()