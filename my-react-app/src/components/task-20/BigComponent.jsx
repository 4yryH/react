// Создай файл BigComponent.jsx, в котором выводится любой текст.
// Импортируй его в App.jsx с помощью React.lazy().
// Оберни его в Suspense с fallback="Загрузка компонента...".
// Сделай так, чтобы он появлялся только после клика на кнопку.

import React from 'react';

const BigComponent = () => {
  return (
    <div>
      <h1 style={{margin: '2px'}}>Большой компонент</h1>
      <p>Привет, я большой компонент с ленивой загрузкой, пока меня не попросят отрендериться</p>
    </div>
  )
}

export default BigComponent;