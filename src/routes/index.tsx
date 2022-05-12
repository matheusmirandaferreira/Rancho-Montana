import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Horses } from '../pages/Horses';
import { HorsesDetails } from '../pages/HorsesDetails';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/horses" element={<Horses />} />
      <Route path="/horses/:id" element={<HorsesDetails />} />
      <Route path="*" element={<h1>Não encontrado</h1>} />
    </Routes>
  );
}
