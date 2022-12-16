import { Form, Button, Card } from 'react-bootstrap'
import React, { useRef } from "react"
//import { useAuth } from '../contexts/AuthContext'

export function SignUp() {
const emailRef = useRef()
const passwordRef = useRef()
const passwordConfirmRef = useRef() 
//const { signup } = useAuth()
return (
    <>
    <Card>
        <Card.Body>
            <h2 className='inscrever'>Inscrever-se</h2>
            <Form>
                <Form.Group id="email" >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required></Form.Control>
                </Form.Group>
                <Form.Group id="senha" >
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" ref={passwordRef} required></Form.Control>
                </Form.Group>
                <Form.Group id="password-confirm" >
                <Form.Label>Confirme a sua senha</Form.Label>
                <Form.Control type="password" ref={passwordConfirmRef} required></Form.Control>
                </Form.Group>
                <Button className="w-100" type="submit">Criar Conta</Button>
            </Form>
        </Card.Body>  
    </Card>
    <div className='text-center'>
        Já tem uma conta? Logar
    </div>
    </>
)
}