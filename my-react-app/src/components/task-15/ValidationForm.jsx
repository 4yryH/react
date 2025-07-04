//1. Создай контролируемую форму с полями "Имя" и "Пароль". Добавь валидацию:
//     - Имя не должно быть пустым.
//     - Пароль должен содержать не менее 6 символов.
//     - Если валидация не пройдена, выводи сообщение об ошибке.
// При отправке формы имя и пароль должны выводиться в консоль (перезагрузки страницы быть не должно!).

import React, {useState} from 'react';

export function Form() {
  const [name, setName] = useState(''); // состояние для имени
  const [password, setPassword] = useState(''); // состояние для пароля
  const [errors, setErrors] = useState(''); // состояние для валидации

  const handleSubmit = (e) => {
    e.preventDefault();

    // сюда будут складываться ошибки валидации
    const newErrors = {}

    if (!name.trim()) {
      newErrors.name = 'Имя не должно быть пустым'
    }
    if (password.trim().length < 6) {
      newErrors.password = 'Пароль должен содержать не менее 6 символов'
    }

    // пробежим по ключам, если есть, то перекинем их в set, если нет, то перекинем пустой объект
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log(`Введенные данные name: ${name}, password: ${password}`);
      setErrors({});
    }
  }


  return (
    <form onSubmit={handleSubmit}>

      <div>
        <label htmlFor="name">Имя: </label>
        <input
          id='name'
          type='text'
          placeholder='Введите имя'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="pass">Пароль: </label>
        <input
          id='pass'
          type='password'
          placeholder='Введите пароль'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
      </div>

      <button type='submit'>Отправить</button>
    </form>
  )
}