import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = () => {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="/coins">Coins</Nav.Link>
                    {/* <Nav.Link href="/withdrawals">Withdrawals</Nav.Link>
                    <Nav.Link href="/tradeOrders">TradeOrders</Nav.Link> */}
                    <Nav.Link href="/deposits">Deposits</Nav.Link>
                    <Nav.Link onClick={()=>{localStorage.clear()}} href="/">Logout</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;