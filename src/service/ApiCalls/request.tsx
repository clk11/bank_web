const api_url = process.env.REACT_APP_API_URL
const requests = {
    //Deposits
    fetchDeposit: api_url + '/Deposit/GetDeposit?id=',
    fetchDeposits: api_url + '/Deposit/GetAll',
    editDeposit: api_url + '/Deposit/EditDeposit',
    addDeposit: api_url + '/Deposit/AddDeposit',
    //Withdrawals
    fetchWithdrawals: api_url + '/Withdrawl/GetAll',
    //TradeOrders
    fetchTradeOrder: api_url + '/TradeOrder/GetAll',
    //Coins
    fetchCoins: api_url + '/Coin/GetAll',
    fetchCoin: api_url + '/Coin/GetCoin?id=',
    addCoin: api_url + '/Coin/AddCoin',
    deleteCoin: api_url + '/Coin/Delete?id=',
    editCoin: api_url + '/Coin/EditCoin',
    //Authentication
    login: api_url + '/Auth/Login',
    register: api_url + '/Auth/Register'
}
export default requests;