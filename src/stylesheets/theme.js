// src/theme.js
import { createTheme } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    rose: {
      200: pink[200],
    },
  },
});

export default theme;