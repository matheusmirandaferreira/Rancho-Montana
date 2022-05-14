import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Horses } from '../pages/Horses';
import { HorsesDetails } from '../pages/HorsesDetails';
import { Responsibles } from '../pages/Responsibles';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/horses" element={<Horses />} />
      <Route path="/horses/:id" element={<HorsesDetails />} />
      <Route path="/responsibles" element={<Responsibles />} />
      <Route
        path="*"
        element={
          <div style={{ flex: 1, height: '100%' }}>
            <h1>Está página não existe</h1>
          </div>
        }
      />
    </Routes>
  );
}
