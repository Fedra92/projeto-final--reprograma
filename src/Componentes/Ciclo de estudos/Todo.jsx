import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import Button from 'react-bootstrap/Button'

export function Todo({ todo, toggleComplete, removeTodo }) {

    function handleCheckboxClick() {
        toggleComplete(todo.id);
      }

    function handleRemoveClick() {
      removeTodo(todo.id);
    }
  
    return (
      <ListItem style={{ display: "flex" }}>
        <Checkbox checked={todo.completed} onClick={handleCheckboxClick} />
        <Typography
          variant="body1"
          style={{
            textDecoration: todo.completed ? "line-through" : null
          }}
        >
          {todo.task}
          {todo.time}
        </Typography>
        <Button variant="outline-danger" onClick={handleRemoveClick}>Deletar</Button>
      </ListItem>
    );
  }