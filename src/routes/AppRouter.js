import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SideBar from '../components/sideBar/SideBar.js';
import Login from '../pages/Login.js';
import Tech from '../pages/Tech.js';

function AppRouter () {
  return (
    <Router>
        <Routes>
          <Route path = '/' element = {<div style={{ display: 'flex' }}> <SideBar/> <Tech /> </div>} />
          <Route path = '/login' element = {<Login />} />
        </Routes>
    </Router>
  );
};

export default AppRouter;
