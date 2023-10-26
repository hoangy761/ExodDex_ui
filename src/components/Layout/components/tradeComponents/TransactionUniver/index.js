import React, { useEffect, useState } from 'react';

function TransactionUniver() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        // Thay thế bằng API key của bạn
        const apiKey = 'BKP7KZKRV5KDY8WKD8K8M4INVND43FGMZ2';

        // Địa chỉ Ethereum của bạn
        const yourAddress = '0xff7B170219BBEDE40F575319714f61E62B26CEb5';

        // Địa chỉ hợp đồng của token USDT
        const usdtContractAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7';

        // Hàm để lấy danh sách giao dịch của token USDT cho địa chỉ của bạn
        async function getUSDTTransactions() {
            try {
                const response = await fetch(
                    `https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=${usdtContractAddress}&address=${yourAddress}&startblock=0&endblock=99999999&sort=desc&apikey=${apiKey}`,
                );
                const data = await response.json();
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
