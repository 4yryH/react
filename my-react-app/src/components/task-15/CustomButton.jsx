//3. Создай компонент CustomButton, который принимает ref и фокусируется на кнопке при монтировании.

import React, {forwardRef} from 'react'

export const CustomButton = forwardRef(function CustomButton(props, ref) {
  return (
    <button ref={ref} {...props}>
      {props.children || 'Кнопка'}
    </button>
  );
});