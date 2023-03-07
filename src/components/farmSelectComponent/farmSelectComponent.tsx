import { useState } from 'react';
import { FarmSelectPropsType } from '../../interfaces';

const FarmSelectComponent = ({ onYearChange }: FarmSelectPropsType) => {
  const [selectedYear, setSelectedYear] = useState('2023');

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const year = event.target.value;
    setSelectedYear(year);
    onYearChange(year);
  };

  return (
    <div className='farm-select-container'>
      <div className='year-select-container'>
        <label htmlFor="year-select">Godina zahtjeva </label>
        <select id="year-select" value={selectedYear} onChange={handleYearChange}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>

        {/* <div className='farm-input-container'>
            <label htmlFor="farm-input">Gospodarstvo </label>
            <input type="text" />
        </div> */}
    </div>
  );
};

export default FarmSelectComponent;