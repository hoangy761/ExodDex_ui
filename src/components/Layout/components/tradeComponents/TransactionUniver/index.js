import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TransactionUniver() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        // Thay thế bằng API key của bạn từ etherscan.io
        const apiKey = 'BKP7KZKRV5KDY8WKD8K8M4INVND43FGMZ2';

        // Địa chỉ hợp đồng của token // Wrap BTC
        const contractToken = '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599';

        // Địa chỉ của tài khoản ETH mà bạn quan tâm
        const ethAddress = '0xff7B170219BBEDE40F575319714f61E62B26CEb5';

        // Hàm để gọi API và lấy danh sách giao dịch
        async function getUSDTTransactions() {
            try {
                // Gọi API để lấy danh sách giao dịch
                // dinh toi ban Pro mia roi cmm ;))
                const response = await axios.get(`https://api.etherscan.io/api`, {
                    params: {
                        module: 'account',
                        action: 'txlist',
                        address: ethAddress,
                        contractAddress: contractToken,
                        sort: 'desc',
                        apikey: apiKey,
                    },
                });

                const data = response.data;
                console.log(data);
                if (data.status === '1') {
                    setTransactions(data.result);
                }
            } catch (error) {
                console.error('Error fetching USDT transactions:', error);
            }
        }

        getUSDTTransactions();
    }, []);

    return (
        <div>
            <h1>TransactionUniver</h1>
            <ul>
                {transactions.map((transaction, index) => (
                    <li key={index}>
                        Transaction Hash: {transaction.hash}
                        {/* Thêm các thông tin khác mà bạn muốn hiển thị */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TransactionUniver;
