import { ThemeProvider } from 'styled-components';
import { Home } from './pages/Home';
import { theme, GlobalStyles } from './styles/GlobalStyles';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  );
}
