// В статике
function ToDoStatic() {
  return (<div>
    <h1>Список дел</h1>
    <ul>
      <li>Помыть посуду</li>
      <li>Сделать домашнее задание</li>
      <li>Прочитать книгу</li>
    </ul>
  </div>);
}

// В динамике как в уч. материале п.2 создание списков
const tasks = ['Помыть посуду', 'Сделать домашнее задание', 'Прочитать книгу'];

function ToDoDynamic() {
  return (<div>
    <h1>Список дел</h1>
    <ul>
      {tasks.map((task, i) =>
        <li key={i}>{task}</li>)}
    </ul>
  </div>);
}

export default ToDoDynamic;
