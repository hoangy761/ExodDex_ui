import { Nav, Navbar, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import classNames from 'classnames';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);
function Header() {
    return (
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
                </Nav>
            </Navbar>
        </div>
    );
}

export default Header;
