import { useState } from 'react';
import './styles/App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import SidebarComponent from './components/sidebarComponent/sidebarComponent';
import FarmSelectComponent from './components/farmSelectComponent/farmSelectComponent';
import TableComponent from './components/tableComponent/tableComponent';
import { getRoutes } from './routes';

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedYear, setSelectedYear] = useState('2023');
  const [detailedView, setDetailedView] = useState(false);

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
  };

  const handleDefaultViewChange = (isChecked: boolean) => {
    setDetailedView(isChecked);
  };

  return (
    <div className='app'>
      <div className='sidebar-container'>
        <SidebarComponent isAuthenticated={isAuthenticated} />
      </div>
      <div className='content-container'>
        <Routes>  
          {getRoutes(isAuthenticated, detailedView, selectedYear).map((route, index) => (
            <Route key={index} path={route.path} element={
              route.component === null ? null :
              route.component.navigate ? <Navigate to={route.component.to} /> :
              <div>
                <FarmSelectComponent onYearChange={handleYearChange} onDefaultViewChange={handleDefaultViewChange} />
                <TableComponent columns={route.component.columns} data={route.component.data} />
              </div>
            } />
          ))}
          {!isAuthenticated && (
            <Route path="*" element={<Navigate to="/" replace />} />
          )}
        </Routes>
      </div>
    </div>
  );
};

export default App;