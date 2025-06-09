import './App.css'
import ToDoDynamic from './task-3-react.jsx'
import UserCard from "./task-5-props.jsx";

function App() {
  return (
    <>
      <h1>Задание JSX</h1>
      <ToDoDynamic/>

      <h1>Задание Props</h1>
      <UserCard name='Мария' age={25}/>
      <UserCard name='Олег' age={32}/>
      <UserCard name='Андрей' age={30}/>
    </>
  );
}

export default App
