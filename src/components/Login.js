import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import {Link, useHistory} from 'react-router-dom'
export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault();
        const email = emailRef.current.value
        const password = passwordRef.current.value
        try {
            setError('')
            setLoading(true)
            await login(email, password)
            history.push('/')
        } catch (error) {
            setError('Failed to Login')
        }
        setLoading(false)
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4"> Login</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label> Email </Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label> Password </Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Button disabled={loading} type="submit" className="w-100">Login</Button>
                    </Form>
                </Card.Body>

            </Card>
            <div className="w-100 text-center mt-2">
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </div>
        </>
    )
}

