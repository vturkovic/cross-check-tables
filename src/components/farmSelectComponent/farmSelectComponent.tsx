import { useState } from 'react';
import { FarmSelectPropsType } from '../../interfaces';
import Form from 'react-bootstrap/Form';

const FarmSelectComponent = ({ onYearChange, onDefaultViewChange }: FarmSelectPropsType) => {
  const [selectedYear, setSelectedYear] = useState('2023');

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const year = event.target.value;
    setSelectedYear(year);
    onYearChange(year);
  };

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onDefaultViewChange(event.target.checked);
  };

  return (
    <div className='farm-select-container'>
      
      <div className='year-select-container'>
        <label htmlFor="year-select">Godina zahtjeva </label>
        <Form.Select id="year-select" value={selectedYear} onChange={handleYearChange}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </Form.Select>
      </div>

      <Form className='switch-container'>
        <label htmlFor="custom-switch">Detaljni prikaz </label>
        <Form.Check 
          type="switch"
          id="custom-switch"
          defaultChecked={false}
          onChange={handleSwitchChange} />
      </Form>
      
    </div>
  );
};

export default FarmSelectComponent;