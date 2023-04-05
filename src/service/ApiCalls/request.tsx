const api_url = process.env.REACT_APP_API_URL
const requests = {
    fetchDeposits: api_url + '/deposit/Get',
    fetchWithdrawals: '',
    fetchOperationTypes: 'https://localhost:7172/OperationType/GetAll',
    fetchTradeOrder: ''
}
export default requests;