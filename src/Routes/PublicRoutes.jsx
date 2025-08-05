import { Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage';

function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />;
    </Routes>
  );
}

export default PublicRoutes;
