import { Avatar, Box, Typography } from "@mui/material"


const Dashboard = () => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
      borderBottom={'2px solid'}
      borderColor={'secondary.light'}
      paddingBottom={2}
      marginBottom={1}
    >
      <Typography
        variant={"h4"}
        component={'h2'}
        color={'secondary.main'}
        fontWeight={500}
      >
        Wed may 17 2023
      </Typography>
      <Box
        display={'flex'}
        alignItems={'center'}
        paddingRight={2}
      >
        <Avatar
          sx={{
            bgcolor: 'secondary.main',
            width: 56,
            height: 56,
            mr: 2,
            color: 'background.default',
            fontWeight: '600'
          }}
        >
          IR
        </Avatar>
        <Typography
          variant={"h4"}
          component={'p'}
          fontWeight={'500'}
          color={'secondary.main'}
        >
          Ilia Ryzhenkov
        </Typography>
      </Box>

    </Box>
  )
}

export default Dashboard