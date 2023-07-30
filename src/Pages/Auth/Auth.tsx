import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ApiFetch from "../../service/ApiCalls/request";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const headers = {
    'Content-Type': 'application/json',
};
const Auth = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [_password, _setPassword] = useState('');
    const onSubmit = async (event: any) => {
        event.preventDefault();
        if (username.length != 0 && password.length != 0) {
            if (isLogin) {
                const token = await axios.post(ApiFetch.login, JSON.stringify({ username, password }), { headers });
                if (token.data !== null && token.data !== 'bad') { // Manevra . Nu o sa ramana pe termen lung
                    localStorage.setItem('token', token.data);
                    window.location.reload();
                } else alert('Something went wrong !');
            } else {
                if (password === _password) {
                    await axios.post(ApiFetch.register, JSON.stringify({ username, password }), { headers });
                    alert('Very well !');
                    setIsLogin(true);
                } else alert('The passwords need to be the same !');
            }
        } else alert('You need to complete everything !');
    }

    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
        }}>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={6} lg={6} xl={4} style={{
                        margin: "0 auto",
                        padding: "20px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        background: "#fff",
                    }}>
                        <Form onSubmit={onSubmit}>
                            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>{isLogin ? 'Login' : 'Register'}</h2>
                            <Form.Group style={{ marginBottom: '20px' }}>
                                <Form.Control value={username} onChange={(e) => { setUsername(e.target.value) }} placeholder="Username" />
                            </Form.Group>
                            <Form.Group style={{ marginBottom: '20px' }}>
                                <Form.Control value={password} onChange={(e: any) => { setPassword(e.target.value) }} type="password" placeholder="Password" />
                            </Form.Group>
                            {!isLogin && (
                                <Form.Group style={{ marginBottom: '20px' }}>
                                    <Form.Control value={_password} onChange={(e: any) => { _setPassword(e.target.value) }} type="password" placeholder="Reenter password" />
                                </Form.Group>
                            )}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Button variant="primary" type="submit">
                                    {isLogin ? 'Login' : 'Register'}
                                </Button>
                                <Button onClick={() => { setIsLogin(!isLogin) }} variant="Link">
                                    {isLogin ? 'Go to register' : 'Go to login'}
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Auth;
