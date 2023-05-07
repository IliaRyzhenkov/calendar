import React from 'react';
import {
  Grid,
  ThemeProvider
} from '@mui/material';
import customTheme from './themes/theme';
import { teal } from '@mui/material/colors';


function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Grid
        container
        bgcolor={teal[200]}
        minHeight={'100vh'}
      >
      </Grid>
    </ThemeProvider>
  );
}

export default App;
