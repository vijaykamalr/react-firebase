import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import {Link, useHistory} from 'react-router-dom';
export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { signUp } = useAuth();
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const confirmPassword = passwordConfirmRef.current.value
        if (password !== confirmPassword)
            return setError('Passwords do not match');
        try {
            setError('')
            setLoading(true)
            await signUp(email, password)
            history.push('/login')
            
        } catch (error) {
            setError('Failed to Signup')
        }
        setLoading(false)
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4"> Sign up</h2>
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
                        <Form.Group>
                            <Form.Label> Confirm Password </Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <Button disabled={loading} type="submit" className="w-100">Sign Up</Button>
                    </Form>
                </Card.Body>

            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to="/login">Log in</Link>
            </div>
        </>
    )
}

