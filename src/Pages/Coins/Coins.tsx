import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import CoinsTable from '../../Components/Tables/CoinsTable';
import { useNavigate } from 'react-router-dom';
import ApiFetch from '../../service/ApiCalls/request';
const Coins = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(ApiFetch.fetchCoins);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {data !== null && (
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ padding: '30px' }}>Welcome to COINS</h1>
          <CoinsTable data={data} />
          <br />
          <div style={{ marginBottom: '20px' }}>
            <span style={{ marginRight: '10px' }}>Add a new coin</span>
            <Button variant="primary" onClick={() => { navigate("/addCoin") }} >Add</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Coins;