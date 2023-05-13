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
    path: '/profile'
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
const Sidebar = () => {
  return (
    <Box>
      <Box
        width={60}
        height={60}
        mb={4}
        borderRadius={50}
        sx={{
          background: 'linear-gradient(90deg, rgba(253,53,255,1) 50%, rgba(171,52,255,0.5) 50%)'
        }}
      >
      </Box>
      {
        data.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
          >
            <ListItemButton>
              <ListItemIcon sx={{
                color: "white"
              }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: 17,
                  fontWeight: '500',
                  color: 'white'
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