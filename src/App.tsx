import './styles/App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SidebarComponent from './components/sidebarComponent/sidebarComponent';

const App = () => {
  return (
    <div className='app'>
      <Router>
        <div className='sidebar-container'>
          <SidebarComponent></SidebarComponent>
        </div>
        <div className='content-container'>
          <h2>Year: 2021</h2>
          <div className='select-container'>
            <label htmlFor="year-select">Select a year: </label>
            <select id="year-select">
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
          </div>

              <Routes>
                <Route path="/" />
                <Route path="surfaces/" />
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
