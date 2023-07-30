import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import ApiFetch from '../../service/ApiCalls/request';
import Dropdown from '../../Components/Dropdown';
import axios from 'axios';
const EditDeposit = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [fromAddress, setFromAddress] = useState('');
  const [coinName, setCoinName] = useState('');
  const [option, setOption] = useState('');
  const [options, setOptions] = useState('');
  const { id } = useParams();
  useEffect(() => {
    const fetchDeposit = async () => {
      try {
        const response = await fetch(ApiFetch.fetchDeposit + id);
        const json = await response.json();
        setAmount(json.amount);
        setFromAddress(json.fromAddress);
        setCoinName(json.coin.name);
        setOption(json.coin.id);
      } catch (error) {
        console.error(error);
      }
    }

    const fetchCoins = async () => {
      try {
        const response = await fetch(ApiFetch.fetchCoins);
        const json = await response.json();
        setOptions(json);
      } catch (error) {
        console.error(error);
      }
    }

    fetchDeposit();
    fetchCoins();
  }, [])
  const isNumerical = (value: any) => {
    const numericalRegex = /^[-+]?\d+(\.\d+)?$/;
    return numericalRegex.test(value);
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (isNumerical(amount)) {
      const headers = {
        'Content-Type': 'application/json',
      };
      const depositData = {
        id,
        amount,
        fromAddress,
        coinId:option
      }
      await axios.put(ApiFetch.editDeposit, JSON.stringify(depositData), { headers })
      navigate("/deposits");
    } else alert("It isn't numerical !");
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {options && (
        <Form onSubmit={handleSubmit}>
          <h1 style={{ margin: '20px' }}>Edit deposit</h1>
          <Form.Group controlId="FormAmount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="text"
              style={{ marginBottom: '20px', maxWidth: '300px', width: '100%' }}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter name"
            />
          </Form.Group>

          <Form.Group controlId="formAddress">
            <Form.Label>From address</Form.Label>
            <Form.Control
              type="text"
              value={fromAddress}
              style={{ marginBottom: '20px', maxWidth: '300px', width: '100%' }}
              onChange={(e) => setFromAddress(e.target.value)}
              placeholder="Enter description"
            />
          </Form.Group>

          <Form.Group controlId="formDropdown">
            <Form.Label>Select the coin</Form.Label>
            <Dropdown setOption={setOption} data={options} coinName={coinName} setCoinName={setCoinName} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      )}
    </div>
  )
}
export default EditDeposit;
