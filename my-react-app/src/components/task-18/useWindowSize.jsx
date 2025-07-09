// 1. Создайте кастомный хук `useWindowSize`. Хук должен отслеживать ширину и высоту окна
// и обновляться при изменении размеров. Используйте этот хук в компоненте
// и покажите размеры окна на экране.

import React, {useState, useEffect} from 'react';

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({width: 0, height: 0});

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    // Вызвать сразу
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}