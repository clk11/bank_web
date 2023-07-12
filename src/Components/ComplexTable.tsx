import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
const ComplexTable = ({ data, url }: any) => {
    const navigate = useNavigate();
    const onDelete = async (id: number) => {
        url += id;
        await fetch(url, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        window.location.reload();
    }
    const onEdit = () => {
        alert('Edit');
    }
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((current: any, index: any) => (
                        <tr key={index}>
                            <td>{current.id}</td>
                            <td>{current.name}</td>
                            <td>{current.description}</td>
                            <td>
                                <button onClick={() => onDelete(current.id)} className="btn btn-danger" style={{ marginRight: '10px' }}>Delete</button>
                                <button onClick={() => { navigate(`/editCoin/${current.id}`) }} className="btn btn-primary">Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ComplexTable;
