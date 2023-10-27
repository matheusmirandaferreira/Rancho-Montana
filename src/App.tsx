import { ThemeProvider } from 'styled-components';

import { Router } from './routes';
import { theme, GlobalStyles } from './global/GlobalStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Router />
        <GlobalStyles />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

// import { useState } from 'react';
// export function App() {
//   const [value, setValue] = useState('');
//   const [list, setList] = useState(['Nome1', 'Nome2', 'Nome3']);

//   const addToList = () => {
//     setList((prev) => [...prev, value]);
//   };

//   return (
//     <>
//       <input
//         placeholder="Novo item"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//       />
//       <button onClick={addToList}>Adicionar</button>
//       <ul>
//         {list.map((item) => (
//           <li key={item}>{item}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
