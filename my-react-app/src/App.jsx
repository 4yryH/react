import React, {useRef, useEffect, Suspense, useState} from 'react';
import ToDoDynamic from './components/task-3/task-3-react.jsx'
import UserCard from "./components/task-5/task-5-props.jsx";
import {Counter, GetPost} from "./components/task-6/task-6-hooks-usestate.jsx";
import {UserList} from "./components/task-14/UserList.jsx";
import {ExpensiveCalculation} from "./components/task-14/ExpensiveCalculation.jsx";
import {TodoList} from "./components/task-14/Todo.jsx";
import {Form} from "./components/task-15/ValidationForm.jsx";
import {RenderCounter} from "./components/task-15/RenderCounter.jsx";
import {CustomButton} from "./components/task-15/CustomButton.jsx";
import {WindowSizeDisplay} from "./components/task-18/WindowSize.jsx";
import {WithLoading} from "./components/task-19/WithLoading.jsx";
import './App.css'

const BigComponent = React.lazy(() => import("./components/task-20/BigComponent.jsx"));

function App() {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, []);

  // компоненты, который будем передавать в HOC
  const DataComponent = () => <div>Данные загружены</div>
  // передача компонента в HOC WithLoading
  const DataWithLoading = WithLoading(DataComponent)

  // состояние для кнопки показать большой компонент
  const [showBig, setShowBig] = useState(false);

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

      <h1 style={{color: 'green'}}>Задание работа с формами: валидация</h1>
      <Form/>

      <h1 style={{color: 'green'}}>Задание работа с формами: useRef</h1>
      <RenderCounter/>

      <h1 style={{color: 'green'}}>Задание работа с формами: forwardRef</h1>
      <p>Фокус на кнопке при монтировании</p>
      <CustomButton ref={buttonRef}>Жмякни</CustomButton>

      <h1 style={{color: 'green'}}>Задание кастомные хуки: useWindowSize</h1>
      <WindowSizeDisplay/>

      <h1 style={{color: 'green'}}>Задание HOC</h1>
      <p>setTimeout выставлен 2сек</p>
      <DataWithLoading/>

      <h1 style={{color: 'green'}}>Задание lazy & Suspense</h1>
      <button onClick={() => setShowBig(true)}>Показать большой компонент</button>
      {showBig && (
        <Suspense fallback="Загрузка компонента...">
          <BigComponent/>
        </Suspense>
      )
      }
    </>
  );
}

export default App
