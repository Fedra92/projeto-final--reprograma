import { useState } from "react"
import { TodoForm } from "./Componentes/Ciclo de estudos/TodoForm"
import { TodoList } from "./Componentes/Ciclo de estudos/TodoList"
import { DisplayTimer } from "./Componentes/Ciclo de estudos/displayTimer";
import Button from 'react-bootstrap/Button'
import styles from '../src/CSS/criarciclo.module.css'

export function CriarCiclo() {
  const [todos, setTodos] = useState([]);


const [hoursAndMinutesSum, setHoursAndMinutesSum] = useState('00:00')


  function addTodo(todo) {
    console.log (todos)
    // adds new todo to beginning of todos array
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }
  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }
  function deleteAll(id) {
    setTodos(todos.map(todo => todo.id !== id))
  }
  let hoursSum=0
  let minutesSum=0
  
  function comecarCiclo(){
    todos.forEach(todo=> {
    let hours = Number(todo.time.split(':')[0])
    let minutes = Number(todo.time.split(':')[1])
    hoursSum += hours
    minutesSum += minutes

    if (minutesSum >= 60) {
      hoursSum = (hoursSum+1)
      minutesSum = minutesSum%60
    }
    
   // console.log("hoursSum", hoursSum)
   // console.log("minutesSum", minutesSum)

    setHoursAndMinutesSum(`${hoursSum}:${minutesSum}`)

    console.log(`${hoursSum}:${minutesSum}`)

      
    function countDown() {
      hoursSum
      minutesSum = minutesSum-1

      if (minutesSum < 0) {
        hoursSum = (hoursSum-1)
        minutesSum = 59
      } else
      if (hoursSum === 0 && minutesSum === 0) {
        clearInterval(timerId)
      }

      console.log(`${hoursSum}:${minutesSum}`)
      setHoursAndMinutesSum(`${hoursSum}:${minutesSum}`)
    }

   let timerId = setInterval(countDown, 1000)
  

  });



  return hoursAndMinutesSum
  }

  return (
    <div className="App">

     <DisplayTimer timer={hoursAndMinutesSum} setTimer={setHoursAndMinutesSum}/>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />
      <div>
      <Button variant="outline-secondary" onClick={deleteAll}>Limpar todas</Button>
      <Button variant="outline-secondary">Salvar</Button>
      <Button variant="outline-primary" onClick={comecarCiclo}>Começar</Button>
      </div>
    </div>
  );
}