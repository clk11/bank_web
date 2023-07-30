import { useState } from 'react';
import Navbar from './Components/Navbar';
import AddCoin from './Pages/Coins/AddCoin';
import EditCoin from './Pages/Coins/EditCoin';
import Coins from './Pages/Coins/Coins';
import TradeOrder from './Pages/TradeOrder/TradeOrder';
import Withdrawals from './Pages/Withdrawals/Withdrawals';
import Deposits from './Pages/Deposits/Deposits';
import Auth from './Pages/Auth/Auth';
import AddDeposit from './Pages/Deposits/AddDeposit';
import EditDeposit from './Pages/Deposits/EditDeposit';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
    return (
        <Router>
            {localStorage.getItem('token') && <Navbar />}
            <Routes>
                {/* Authentication */}
                {!localStorage.getItem('token') ? (
                    <Route path='/' element={<Auth />} />
                ) : (
                    <>
                        {/* Coins */}
                        <Route path='/' element={<Coins />} />
                        <Route path='/coins' element={<Coins />} />
                        <Route path='/addCoin' element={<AddCoin />} />
                        <Route path='/editCoin/:id' element={<EditCoin />} />
                        {/* Trade order */}
                        <Route path='/tradeOrders' element={<TradeOrder />} />
                        {/* Withdrawals */}
                        <Route path='/withdrawals' element={<Withdrawals />} />
                        {/* Deposits */}
                        <Route path='/editDeposit/:id' element={<EditDeposit />} />
                        <Route path='/deposits' element={<Deposits />} />
                        <Route path='/addDeposit' element={<AddDeposit />} />
                    </>
                )}
            </Routes>
        </Router>
    )
}

export default App