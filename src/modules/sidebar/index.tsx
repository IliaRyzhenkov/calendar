import { Dns, People, PermMedia, TextSnippetRounded } from "@mui/icons-material"
import { Box } from "@mui/material"
import React from "react"
import { NavLink } from "react-router-dom"
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const data = [
  {
    icon: <Dns />,
    label: 'Todo List',
    path: '/'
  },
  {
    icon: <People />,
    label: 'My Profile',
    path: '/'
  },
  {
    icon: <PermMedia />,
    label: 'Themes',
    path: '/themes'
  },
  {
    icon: <TextSnippetRounded />,
    label: 'Notes',
    path: '/notes'
  }

]

interface colorTheme {
  light: string
}

const Sidebar = ({ light }: colorTheme) => {
  return (
    <Box>
      <Box
        width={60}
        height={60}
        mb={4}
        borderRadius={50}
        sx={{
          background: `linear-gradient(90deg, ${light} 50%, rgba(255,255,255,0.5) 50%)`
        }}
      >
      </Box>
      {
        data.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
          >
            <ListItemButton
              sx={{
                p: 1,
                color: 'rgba(255,255,255,.8)'
              }}
            >
              <ListItemIcon
                sx={{
                  color: 'inherit'
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: 17,
                  fontWeight: '500',
                }}
              />
            </ListItemButton>
          </NavLink>
        ))
      }
    </Box >
  )
}

export default Sidebar