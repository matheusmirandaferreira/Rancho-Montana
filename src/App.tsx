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
