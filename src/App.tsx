import React, { useState, useEffect } from 'react';
import ApiFetch from './service/ApiCalls/request'

import logo from './logo.svg';
import './App.css';

function App() {
  const [options, setOptions] = useState([]);
  const [selectedValue, setSelectedValue] = useState('Deposit');

  const handleSelectDropDown = (event : any) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    const fetchDropDown = async () => {
      try {
        
          const response = await fetch(ApiFetch.fetchOperationTypes);
          const data = await response.json();
          const newOptions = data.map((item:any) => ({ value: item.id, label: item.name }));
          setOptions(newOptions);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDropDown();
  }, []);

  console.log("dp value is: ", selectedValue);
  console.log("dp options are: ", options);
  console.log("TEST ", process.env.REACT_APP_API_URL)
  

  return (
    <div className="App">
      <h1>Operation table</h1>
      <select value={selectedValue} onChange={handleSelectDropDown}>
        {options.map((option:any) => (
          <option key={option.value} value={option.label}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
