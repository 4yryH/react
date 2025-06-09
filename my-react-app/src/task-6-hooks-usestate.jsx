/**
 1. Реализовать кнопку для уменьшения счетчика (Counter из урока).
 Сделать так, чтобы нельзя было уменьшить в минус. Т.е. 0 и все, ниже нельзя.
 Если количество равное 0 необходимо показать красный текст с надписью "Пожалуйста,
 измените количество, оно не может быть равно 0;
 */

import React, {useState} from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount((prevState) => prevState + 1);
  }

  function decrease() {
    setCount((prevState) => prevState - 1);
  }

  return (
    <div>
      <button onClick={decrease} disabled={count === 0}>-</button>
      <span style={{padding: '10px'}}>{count}</span>
      <button onClick={increase}>+</button>


      {count === 0 && (
        <p style={{color: 'red'}}>
          Пожалуйста, измените количество, оно не может быть равно 0
        </p>
      )}
    </div>
  );
}

/**
 2. По аналогии со вторым примером сделать кнопку получения конкретного поста.
 На странице должно быть поле ввода ID поста. При клике на кнопку, нужно взять этот ID из поля,
 получить по нему данные и показать их на странице.
 */

// Второй пример это я так понял, имеется ввиду по типу ререндера страницы

export function GetPost() {
  const [inputId, setInputId] = useState(1);
  const [selectedPostId, setSelectedPostId] = useState(null);

  function click() {
    const id = inputId;
    setSelectedPostId(id);
  }

  return (
    <div style={{margin: '24px'}}>
      <input type='number' placeholder='Введите ID' value={inputId} min={1} max={4}
             onChange={evt => setInputId((Number(evt.target.value)))}/>
      <button onClick={click}>Получить пост</button>

      {selectedPostId === 1 && <p>Пост №1</p>}
      {selectedPostId === 2 && <p>Пост №2</p>}
      {selectedPostId === 3 && <p>Пост №3</p>}
      {selectedPostId === 4 && <p>Пост №4</p>}
    </div>
  );
}
