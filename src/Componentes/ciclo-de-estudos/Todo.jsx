import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import styles from '../../CSS/todo.module.css'

export function Todo({ todo, toggleComplete, removeTodo }) {

    function handleCheckboxClick() {
        toggleComplete(todo.id);
      }

    function handleRemoveClick() {
      removeTodo(todo.id);
    }
  
    return (
      <ListGroup.Item style={{ display: "flex" }}>
        <p checked={todo.completed} onClick={handleCheckboxClick} />
        <p className={styles.linha}
          variant="body1"
          style={{
            textDecoration: todo.completed ? "line-through" : null
          }}
        >
          {todo.task}
         /{todo.time}
        </p>
        <Button variant="outline-danger" onClick={handleRemoveClick}>Deletar</Button>
      </ListGroup.Item>
    );
  }