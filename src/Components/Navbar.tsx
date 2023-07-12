import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="/coins">Coins</Nav.Link>
                    <Nav.Link href="/">Dashboard</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default ColorSchemesExample;