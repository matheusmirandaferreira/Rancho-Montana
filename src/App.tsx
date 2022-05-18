import { ThemeProvider } from 'styled-components';
import { Router } from './routes';
import { theme, GlobalStyles } from './styles/GlobalStyles';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <GlobalStyles />
    </ThemeProvider>
  );
}
