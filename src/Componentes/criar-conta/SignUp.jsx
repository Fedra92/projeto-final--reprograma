import { Form, Button, Card } from 'react-bootstrap'


export function SignUp() {


return (
    <>
    <Card>
        <Card.Body>
            <h2 className='inscrever'>Inscrever-se</h2>
            <Form>
                <Form.Group id="email" >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email"></Form.Control>
                </Form.Group>
                <Form.Group id="senha" >
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password"></Form.Control>
                </Form.Group>
                <Form.Group id="password-confirm" >
                <Form.Label>Confirme a sua senha</Form.Label>
                <Form.Control type="password"></Form.Control>
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
