import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import SideBar from '../components/sideBar/SideBar.js';
import Login from '../pages/Login.js';
import Tech from '../pages/Tech.js';
import New from '../pages/New.js';

function LayoutWithSideBar() {
  return (
    <div style = {{display: 'flex'}}>
      <SideBar/>
      <Outlet/>
    </div>
  );
}

function AppRouter () {
  return (
    <Router>
        <Routes>
          <Route path = '/' element = {<LayoutWithSideBar/>}>
            <Route index element = {<Tech/>} />
            <Route path = 'new' element = {<New/>} />
          </Route>
          <Route path = '/login' element = {<Login />} />
        </Routes>
    </Router>
  );
};

export default AppRouter;
