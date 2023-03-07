import { useState } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SidebarComponent from './components/sidebarComponent/sidebarComponent';
import FarmSelectComponent from './components/farmSelectComponent/farmSelectComponent';
import TableComponent from './components/tableComponent/tableComponent';
import { getRoutes } from './routes';

const App = () => {

  const [selectedYear, setSelectedYear] = useState('2023');

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
  };

  return (
    <Router>
      <div className='app'>
        <div className='sidebar-container'>
          <SidebarComponent />
        </div>
        <div className='content-container'>
            <FarmSelectComponent onYearChange={handleYearChange}/>
            <Routes>
              {getRoutes(selectedYear).map((route, index) => (
                <Route key={index} path={route.path} element={
                  route.component === null ? null :
                  route.component.navigate ? <Navigate to={route.component.to} /> :
                  <TableComponent columns={route.component.columns} data={route.component.data} />
                } />
              ))}
            </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
