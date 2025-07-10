// Создай HOC withLoading, который принимает компонент,
// показывает "Загрузка..." перед его рендером.
// Через 2 секунды заменяет его на переданный компонент.

import React, {useState, useEffect} from 'react';

export function WithLoading(WrappedComponent) {
  return function WithLoadingComponent(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }, []);

    if (loading) {
      return (
        <div>
          Загрузка...
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
}