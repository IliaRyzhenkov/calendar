import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
    palette: {
        primary: {
            light: '#1ec582',
            main: '#1a983e',
            dark: '#035b30',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});

export default customTheme
