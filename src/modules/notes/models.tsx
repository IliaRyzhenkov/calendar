export interface INote {
  noteUrl: string,
  parent: string,
  title: string,
  body: string,
  date: string
}

export interface ICategory {
  icon: number,
  categoryUrl: string,
  name: string,
  color: string,
  notes: INote[]

}

export interface IBody {
  name: string,
  category: string,
  body: string,
  color?: string
}

