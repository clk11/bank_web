import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import ApiFetch from '../../service/ApiCalls/request';
import { useNavigate } from 'react-router-dom';
import Dropdown from '../../Components/Dropdown';
import axios from 'axios';
const AddCoin = () => {
    const navigate = useNavigate();
    const [amount, setAmount] = useState('');
    const [fromAddress, setFromAddress] = useState('');
    const [option, setOption] = useState('');
    const [options, setOptions] = useState([]);
    const [coinName, setCoinName] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(ApiFetch.fetchCoins);
                const json = await response.json();
                setOptions(json);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const isNumerical = () => {
        const numericalRegex = /^[-+]?\d+(\.\d+)?$/;
        return numericalRegex.test(amount);
    };
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        if (isNumerical()) {
            if (option.length !== 0) {
                const depositData = {
                    Amount: parseFloat(amount),
                    FromAddress: fromAddress,
                    CoinId: parseInt(option),
                };

                const headers = {
                    'Content-Type': 'application/json',
                };
                await axios.post(ApiFetch.addDeposit, JSON.stringify(depositData), { headers });
                navigate('/deposits');
            }else alert("You need to select a coin !");
        } else alert("It isn't numerical !");
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            {options.length > 0 && (
                <Form onSubmit={handleSubmit}>
                    <h1 style={{ margin: '20px' }}>Add a new deposit</h1>
                    <Form.Group controlId="formAmount">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control
                            type="text"
                            style={{ marginBottom: '20px', maxWidth: '300px', width: '100%' }}
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Enter the amount"
                        />
                    </Form.Group>

                    <Form.Group controlId="formFromAddress">
                        <Form.Label>From address</Form.Label>
                        <Form.Control
                            value={fromAddress}
                            style={{ marginBottom: '20px', maxWidth: '300px', width: '100%' }}
                            onChange={(e) => setFromAddress(e.target.value)}
                            placeholder="Enter address"
                        />
                    </Form.Group>

                    <Form.Group controlId="formDropdown">
                        <Form.Label>Select the coin</Form.Label>
                        <Dropdown setOption={setOption} data={options} coinName={coinName} setCoinName={setCoinName} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            )}
        </div>
    );
};

export default AddCoin;
