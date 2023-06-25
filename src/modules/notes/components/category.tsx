import { SvgIcon, Typography } from "@mui/material"
import { ICategory } from "../models"
import IconsArray from "./icons"




const CategoryNotes = ({ name, color, icon, notes, categoryUrl }: ICategory) => {
  return (
    <>
      <SvgIcon sx={{ color: color, fontSize: '45px', mb: '3' }}>
        {IconsArray[icon]}
      </SvgIcon >
      <Typography color={color} variant={'h5'} fontWeight={'600'} textTransform={'uppercase'}>
        {name}
      </Typography>
      <Typography variant={'h6'} color={'#a6a1a1'} position={'absolute'} bottom={'10px'}>
        {notes.length} Notes
      </Typography>   
    </>
  )
}

export default CategoryNotes