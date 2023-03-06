import './styles/App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SidebarComponent from './components/sidebarComponent/sidebarComponent';
import FarmSelectComponent from './components/farmSelectComponent/farmSelectComponent';
import TableComponent from './components/tableComponent/tableComponent';
import { routes } from './routes';

const App = () => {
  return (
    <div className='app'>
      <Router>
        <div className='sidebar-container'>
          <SidebarComponent />
        </div>
        <div className='content-container'>
            <FarmSelectComponent />
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={
                  route.component === null ? null :
                  route.component.navigate ? <Navigate to={route.component.to} /> :
                  <TableComponent columns={route.component.columns} data={route.component.data} />
                } />
              ))}
            </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
