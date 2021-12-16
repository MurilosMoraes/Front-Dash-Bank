import { Routes, Route, Link } from 'react-router-dom'

import Login from './pages/Login/index.jsx'
import Registro from './pages/Registro/index.jsx'


function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </>
  );
}

export default App;
