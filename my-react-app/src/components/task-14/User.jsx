import React from 'react';

export const User = React.memo(function User({user}) {
  // консоль для проверки, что будет рендериться только новый объект, а не весь список
  console.log(`render user ${user.name}`)

  return (
    <div>
      <p>Имя пользователя: {user.name}</p>
      <p>Возраст: {user.age}</p>
      <p>email: {user.email}</p>
    </div>
  )
})