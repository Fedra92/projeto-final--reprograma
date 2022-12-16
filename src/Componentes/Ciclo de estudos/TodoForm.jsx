import { useState } from "react"
import uuid from 'react-uuid';
import { Card, Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import styles from '../../CSS/criarciclo.module.css'

export function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
       id: "",
       task: "",
       time: "",
       completed: false 
    })

    function handleTaskInputChange(e) {
        setTodo({...todo, task: e.target.value})
    }

    function handleTimeInputChange(e) {
        setTodo({...todo, time: e.target.value})
    }

    
    function handleSubmit(e) {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({...todo, id: uuid()})
            setTodo({...todo, task:"", time:""})
        }
    }

    return (
        <>
        <Card className={styles.formCard}>
        <Card.Body>
        <Form onSubmit={handleSubmit}>
        <Form.Group>
        <Form.Control className={styles.formControl} value={todo.task} onChange={handleTaskInputChange}
        type="text" />
        <Form.Text className="text-muted">
          Escreva o nome da matéria que você vai estudar.
        </Form.Text>
        <Form.Control className={styles.formControl} value={todo.time} type="time" onChange={handleTimeInputChange}/>
        <Button variant="primary" type="submit">Adicionar matéria</Button>
        </Form.Group>    
        </Form>
        </Card.Body>
        </Card>
        </>
    )
}