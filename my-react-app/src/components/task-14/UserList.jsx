//1. У тебя есть компонент `UserList`, который отображает список пользователей.
// Каждый пользователь представлен компонентом `User`.
// При изменении состояния (например, добавлении нового пользователя) весь список ререндерится,
// даже если данные конкретного пользователя не изменились.
// Используй один из только что изученных инструментов,
// чтобы оптимизировать компонент `User` и избежать лишних ререндеров.

import React, {useState} from 'react';
import {User} from "./User.jsx";

// для начального состояния списка добавил одного пользователя
const initialUsers = [
  {id: 1, name: 'Oleg', age: 33, email: 'oleg@exapmle.com',}
];

export function UserList() {
  const [users, setUsers] = useState(initialUsers);

  // функция добавления пользователя с изменением состояния
  const addUser = () => {
    // просто +1 чтобы видно было новую запись
    const newUser = {
      // id для уникальности key
      id: users.length + 1,
      name: `NewUser${users.length + 1}`,
      age: `NewUser${users.length + 1}`,
      email: `new${users.length + 1}@example.com`,
    };
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <button onClick={addUser}>Add User</button>
      {users.map((user) => (
        <User key={user.id} user={user}/>
      ))
      }
    </div>
  );
}
