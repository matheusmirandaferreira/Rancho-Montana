import { ThemeProvider } from 'styled-components';
import { Home } from './pages/Home';
import { DefaultTheme, GlobalStyles } from './styles/GlobalStyles';

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  );
}
