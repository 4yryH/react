// 2. Создай компонент RenderCounter, который отображает количество ререндеров. Подсказка - используй useRef.

// Использовал useRef в fashionee в header для dropdown

import React, {useRef, useState, useEffect} from 'react';

export function RenderCounter() {
  const [count, setCount] = useState(0);
  const renderRef = useRef(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  useEffect(() => {
    renderRef.current += 1; // при каждом рендере
  });

  return (
    <div>
      <p>Счётчик: {count}</p>
      <p>Количество рендеров: {renderRef.current}</p>
      <button onClick={handleClick}>Увеличить</button>
      <p>Количество рендеров изначально будет больше на 1, чем счетчик, т.к. он посчитает начальный рендер при загрузке
        страницы. Если дальше будут ререндеры, например, изменение текста, то он их тоже посчитает</p>
    </div>
  )
}
