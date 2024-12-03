import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from '../pages/Login.js';
import Home from '../pages/Home.js';

function AppRouter () {
  return (
    <Router>
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/login' element = {<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
