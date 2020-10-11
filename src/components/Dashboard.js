import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import {Link, useHistory} from 'react-router-dom';

export default function Dashboard() {
    const [error, setError] = useState('')
    const { currentUser,logout } = useAuth()
    const history = useHistory()
    async function handleLogout() {
        try {
            setError('')
            await logout()
            history.push('/login')
        } catch (error) {
            setError('Fail to Logout')
        }
       
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mt-4">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                   <p className="text-center"> <strong>Email:</strong>{currentUser.email}</p>
                    <Link to="update-profile" className="btn btn-primary w-100 mt-4">Profile</Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>Logout</Button>
            </div>
        </>
    )
}
