import { Box, Button } from "@mui/material"
import React from "react"
import { blackTheme, blueTheme, orangeTheme, purpleTheme } from '../../themes';


const data = [
  {
    name: 'purple',
    theme: purpleTheme
  },
  {
    name: 'orange',
    theme: orangeTheme
  },
  {
    name: 'blue',
    theme: blueTheme
  },
  {
    name: 'black',
    theme: blackTheme
  },

]

interface SetThemes {
  setTheme: Function

}

const Themes = ({ setTheme }: SetThemes) => {

  return (
    <>
      {
        data.map((item) => (
          <Box
            display={'block'}
            mb={3}
          >
            <Button variant='contained'
              sx={{
                backgroundColor: item.theme.palette.primary.main,
                width: 150,
                height: 50,
              }}
              onClick={() => setTheme(item.theme)}
            >
              {item.name}
            </Button>
          </Box>
        ))
      }
    </>
  )
}

export default Themes