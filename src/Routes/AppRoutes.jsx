import { Route, Routes } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<PublicRoutes />} />
    </Routes>
  );
}

export default AppRoutes;
