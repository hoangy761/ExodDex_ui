import { Nav, Navbar, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useSDK } from '@metamask/sdk-react';
import { subString } from '~/helper/subString';
import { chainIds } from '~/helper/chainIds';
import React, { createContext, useState } from 'react';

export const AccountContext = createContext();
function Header() {
    const [account, setAccount] = useState();
    const [chainId, setChainId] = useState();
    const { sdk, connected } = useSDK();

    const connect = async () => {
        try {
            const accounts = await sdk?.connect();
            setAccount(accounts?.[0]);
            const chainId = await window.ethereum.request({ method: 'eth_chainId' });

            window.ethereum.on('chainChanged', handleChainChanged);
            setChainId(chainId);
        } catch (err) {
            console.warn(`failed to connect..`, err);
        }
    };
    async function handleChainChanged(chainId) {
        // We recommend reloading the page, unless you must do otherwise.
        window.location.reload();
    }
    return (
        <AccountContext.Provider value={account}>
            <div>
                <Navbar expand="md">
                    <Nav navbar variant="pills">
                        <NavItem className="m-2">
                            <Link to="/">
                                <img src="logo.png" alt="logo" width={40} />
                            </Link>
                        </NavItem>
                        <NavItem className="m-2">
                            <Link to="/">Dash board</Link>
                        </NavItem>
                        <NavItem className="m-2">
                            <Link to="/trade">Trade</Link>
                        </NavItem>
                        <NavItem className="m-2">
                            <Link to="/staking">Staking</Link>
                        </NavItem>
                        <NavItem className="m-2">
                            <Link to="/analytics">Analytics</Link>
                        </NavItem>
                        <button onClick={connect} className="btn btn-success h-75">
                            {account ? subString(account) : 'Connect'}
                            {connected && <span>{chainId && ` ${chainIds[chainId]}`}</span>}
                        </button>
                    </Nav>
                </Navbar>
            </div>
        </AccountContext.Provider>
    );
}

export default Header;
