import { Todo } from "./Todo"
import ListGroup from 'react-bootstrap/ListGroup';


export function TodoList({ todos, removeTodo, toggleComplete }) {
    return (
      <ListGroup>

        {todos?.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            toggleComplete={toggleComplete}
          />
        ))}
      </ListGroup>
    );
  }