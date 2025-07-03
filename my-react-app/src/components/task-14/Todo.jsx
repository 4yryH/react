// 3. Оптимизируй все, что можешь в коде из урока 😄

import React, {useState, useCallback, useMemo} from 'react';

// React.memo предотвращает лишние рендеры, если props не изменились
const TodoItem = React.memo(({id, text, onDelete}) => {
  console.log(`Рендер задачи: ${text}`);
  return (
    <div>
      <p>{text}</p>
      <button onClick={() => onDelete(id)}>Удалить</button>
    </div>
  );
});

export const TodoList = () => {
  const [todos, setTodos] = useState([
    {id: 1, text: 'Изучить React'},
    {id: 2, text: 'Написать проект'},
  ]);

  const addTodo = () => {
    const newTodo = {
      id: todos.length + 1,
      text: 'Новая задача',
    };
    setTodos([...todos, newTodo]);
  };

  // useCallback предотвращает пересоздание onDelete
  const deleteTodo = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  // useMemo предотвращает пересоздание списка компонентов при неизменных данных, в нашем случае у нас меняется id +1
  const renderedTodos = useMemo(() => {
    return todos.map((todo) => (
      <TodoItem
        key={todo.id}
        id={todo.id}
        text={todo.text}
        onDelete={deleteTodo}
      />
    ));
  }, [todos, deleteTodo]);

  return (
    <div>
      <button onClick={addTodo}>Добавить задачу</button>
      {renderedTodos}
    </div>
  );
};
