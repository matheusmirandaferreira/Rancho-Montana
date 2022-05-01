import { ThemeProvider } from 'styled-components';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Router } from './routes';
import { theme, GlobalStyles } from './styles/GlobalStyles';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Router />
      <Footer />
      <GlobalStyles />
    </ThemeProvider>
  );
}
