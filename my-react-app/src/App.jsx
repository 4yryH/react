import './App.css'
import ToDoDynamic from './task-3-react.jsx'
import UserCard from "./task-5-props.jsx";
import {Counter,GetPost} from "./task-6-hooks-usestate.jsx";

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
    </>
  );
}

export default App
