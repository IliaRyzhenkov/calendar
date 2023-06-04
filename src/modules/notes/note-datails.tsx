import React from 'react'
import { useParams } from 'react-router-dom'

const NoteDetails = () => {
  const { noteCategory, noteDetails } = useParams()
  console.log(noteCategory, '', noteDetails);


  return (
    <h1>NoteDetails</h1>
  )
}

export default NoteDetails