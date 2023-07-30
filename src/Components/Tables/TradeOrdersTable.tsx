import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
const TradeOrdersTable = ({ data, url }: any) => {
  const navigate = useNavigate();
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* {data.map((current: any, index: any) => (
            <tr key={index}>
              <td>{current.id}</td>
              <td>{current.name}</td>
              <td>{current.description}</td>
              <td>
                <button onClick={() => { alert('deleted !') }} className="btn btn-danger" style={{ marginRight: '10px' }}>Delete</button>
                <button onClick={() => { alert('Edit') }} className="btn btn-primary">Edit</button>
              </td>
            </tr>
          ))} */}
        </tbody>
      </Table>
    </div>
  );
};

export default TradeOrdersTable;
