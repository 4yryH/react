import './App.css'
import ToDoDynamic from './components/task-3/task-3-react.jsx'
import UserCard from "./components/task-5/task-5-props.jsx";
import {Counter, GetPost} from "./components/task-6/task-6-hooks-usestate.jsx";
import {UserList} from "./components/task-14/UserList.jsx";
import {ExpensiveCalculation} from "./components/task-14/ExpensiveCalculation.jsx";
import {TodoList} from "./components/task-14/Todo.jsx";

function App() {
  return (
    <>
        <h1 style={{color: 'green'}}>Задание JSX</h1>
        <ToDoDynamic/>

        <h1 style={{color: 'green'}}>Задание Props</h1>
        <UserCard name='Мария' age={25}/>
        <UserCard name='Олег' age={32}/>
        <UserCard name='Андрей' age={30}/>

        <h1 style={{color: 'green'}}>Задание Hooks & useState</h1>
        <Counter/>
        <GetPost/>

        <h1 style={{color: 'green'}}>Задание на оптимизацию: использование React.memo</h1>
        <UserList/>

        <h1 style={{color: 'green'}}>Задание на оптимизацию: использование useMemo</h1>
        <ExpensiveCalculation numbers={[1, 8, 2, 31, 4, 1.5]}/>

        <h1 style={{color: 'green'}}>Задание на оптимизацию: оптимизация кода Todo</h1>
        <TodoList/>

    </>
  );
}

export default App
