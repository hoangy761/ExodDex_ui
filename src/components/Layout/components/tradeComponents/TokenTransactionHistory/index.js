import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { subString } from '~/helper/subString';

function TokenTransactionHistory() {
    const [transactions, setTransactions] = useState([]);
    const contractAddress = '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599'; // Thay thế bằng địa chỉ hợp đồng của token ERC-20 cụ thể
    const tokenPrice = 35340;
    useEffect(() => {
        const apiKey = 'BKP7KZKRV5KDY8WKD8K8M4INVND43FGMZ2'; // Thay thế bằng API key của bạn

        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.etherscan.io/api', {
                    params: {
                        module: 'account',
                        action: 'tokentx',
                        contractaddress: contractAddress,
                        page: 1,
                        offset: 10,
                        sort: 'desc',
                        apikey: apiKey,
                    },
                });

                if (response.data.status === '1') {
                    setTransactions(response.data.result);
                    // const resIndex = await axios.get('https://api.etherscan.io/api', {
                    //     params: {
                    //         module: 'account',
                    //         action: 'txlist',
                    //         address: response.data.result[1].from,
                    //         startblock: 0,
                    //         endblock: 99999999,
                    //         page: 1,
                    //         offset: 10,
                    //         sort: 'desc',
                    //         apikey: apiKey,
                    //     },
                    // });
                    // console.log(resIndex);
                }
            } catch (error) {
                console.error('Error fetching token transactions:', error);
            }
        };

        fetchData();
    }, [contractAddress]);

    function getValueInput(_value, _decimal, _toFixed) {
        const value = (parseInt(_value) / Math.pow(10, _decimal)).toFixed(_toFixed);
        return value;
    }
    function getValueUSDT(_value, _decimal, _tokenPrice, _toFixed) {
        const value = ((parseInt(_value) / Math.pow(10, _decimal)) * _tokenPrice).toFixed(_toFixed);
        return value;
    }
    function formatPrice(_value) {
        const valueF = new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(_value);
        return valueF;
    }
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Type</th>
                        <th>USD</th>
                        <th>
                            {transactions.length > 1 && transactions[1].tokenSymbol
                                ? transactions[1].tokenSymbol
                                : 'N/A'}
                        </th>

                        <th>Price</th>
                        <th>USDT</th>
                        <th>Maker</th>
                        <th>TXN</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => (
                        <tr key={index}>
                            <td>{new Date(transaction.timeStamp * 1000).toLocaleString()}</td>
                            <td>Sell</td>
                            <td>
                                {formatPrice(getValueUSDT(transaction.value, transaction.tokenDecimal, tokenPrice, 2))}
                            </td>
                            <td>{getValueInput(transaction.value, transaction.tokenDecimal, 6)}</td>
                            <td>{formatPrice(tokenPrice)}</td>
                            <td>
                                {formatPrice(getValueUSDT(transaction.value, transaction.tokenDecimal, tokenPrice, 2))}
                            </td>
                            <td>
                                <a
                                    href={`https://etherscan.io/address/${transaction.from}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {subString(transaction.from)}
                                </a>
                            </td>
                            <td>
                                <a
                                    href={`https://etherscan.io/tx/${transaction.hash}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {transaction.hash.substring(0, 4)}...{transaction.hash.slice(-3)}
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TokenTransactionHistory;
