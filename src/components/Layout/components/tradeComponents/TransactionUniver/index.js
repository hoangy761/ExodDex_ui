import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TransactionUniver() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        // Thay thế bằng API key của bạn từ etherscan.io
        const apiKey = 'BKP7KZKRV5KDY8WKD8K8M4INVND43FGMZ2';

        // Địa chỉ hợp đồng của token // Wrap BTC
        const contractAddress = '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599';

        // Địa chỉ của tài khoản ETH mà bạn quan tâm
        const ethAddress = '0xff7B170219BBEDE40F575319714f61E62B26CEb5';
        const addressFrom = '0x05A350F9369D253B225500cB300218b61bC6a97c';
        // Hàm để gọi API và lấy danh sách giao dịch
        async function getUSDTTransactions() {
            try {
                // Gọi API để lấy danh sách giao dịch
                // dinh toi ban Pro mia roi cmm ;))
                const response = await axios.get(`https://api.etherscan.io/api`, {
                    params: {
                        module: 'account',
                        action: 'tokenbalance',
                        contractaddress: contractAddress,
                        address: addressFrom,
                        tag: 'latest',
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
            <ul></ul>
        </div>
    );
}

export default TransactionUniver;
