import type { AppProps } from 'next/app'
import {createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

const colors = {
  main: "#0078d4",
  dark: "#001a68",
  light: "#dddddd",
  grey: "#333333",
  darkgrey: "#232425",
};

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { ...colors }
  },
});

function MyApp({ Component, pageProps }: AppProps ) {
  return (
    <DndProvider backend={HTML5Backend}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Component {...pageProps} />
    </ThemeProvider>
    </DndProvider>
  );
}

export default MyApp
