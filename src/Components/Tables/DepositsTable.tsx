import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
const DepositsTable = ({ data }: any) => {    
    const navigate = useNavigate();
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>FromAdress</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((current: any, index: any) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{current.coin.name}</td>
                            <td>{current.amount}</td>
                            <td>{current.fromAddress}</td>
                            <td>
                                <button onClick={() => { navigate(`/editDeposit/${current.id}`) }} className="btn btn-primary">Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default DepositsTable;
