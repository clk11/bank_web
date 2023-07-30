import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import DepositsTable from '../../Components/Tables/DepositsTable';
import { useNavigate } from 'react-router-dom';
import ApiFetch from '../../service/ApiCalls/request';
const Deposits = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(ApiFetch.fetchDeposits);
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
          <h1 style={{ padding: '30px' }}>Welcome to DEPOSITS</h1>
          <DepositsTable data={data} />
          <br />
          <div style={{ marginBottom: '20px' }}>
            <span style={{ marginRight: '10px' }}>Add a new deposit</span>
            <Button variant="primary" onClick={() => { navigate("/addDeposit") }} >Add</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Deposits;