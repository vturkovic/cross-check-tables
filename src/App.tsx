import './styles/App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SidebarComponent from './components/sidebarComponent/sidebarComponent';
import YearSelectComponent from './components/yearSelectComponent/yearSelectComponent';
import TableComponent from './components/tableComponent/tableComponent';
import { surfacesColumnData } from './data/surfaces/columnData';
import { surfacesRowData } from './data/surfaces/rowData';

const App = () => {
  return (
    <div className='app'>
      <Router>
        <div className='sidebar-container'>
          <SidebarComponent />
        </div>
        <div className='content-container'>
            <YearSelectComponent />
            <Routes>
              <Route path="/" />
              <Route path="surfaces/" element={<TableComponent columns={surfacesColumnData} data={surfacesRowData} />}/>
              <Route path="pvp-p/" />
              <Route path="pvp-v/" />
              <Route path="pvp-sr/" />
              <Route path="kfk/" />
              <Route path="muk/" />
              <Route path="mkš/" />
              <Route path="tvpv/" />
              <Route path="ekop/" />
              <Route path="eko/" />
              <Route path="cattle/" />
              <Route path="amounts/" />
              <Route path="ezp/" />
              <Route path="*" element={<Navigate to="/" />} /> 
            </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
