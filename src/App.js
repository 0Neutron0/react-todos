import React, {useState} from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';

function App() {
  const [tasksState, setTasksState] = useState([]);

  // Добавление новой задачи
  const addTask = text => {
    if(text.trim()){
      const task = {
        id: (new Date()).getTime().toString(36),
        text: text,
        status: 'default'
      };
      setTasksState([...tasksState, task]);
    }
  };

  // Удаление задачи
  const removeTask = task => {
    setTasksState([...tasksState.filter(item => item.id !== task.id)]);
  };

  // Изменение статуса задачи
  const changeTaskStatus = task => {
    const statusArray = ['default', 'success', 'fail'];
    let indexStatus = statusArray.findIndex(item => item === task.status);
    indexStatus++;
    if(indexStatus + 1 > statusArray.length) {
      indexStatus = 0;
    }
    setTasksState([...tasksState.map(item => {
      if(item.id !== task.id){

       return {...item};
         }else{
           return {...item, status: statusArray[indexStatus]}
        }
      })]);
  }


  return (
    <div className="App">
      <div className="bg bg__img"></div>
      <div className="todos">
        <header className="header">
          <div className="headet__icon"></div>
          <h1 className="header__title">
            Задачи на сегодня
          </h1>
        </header>
        <main className="tasks">
          <TaskForm
            addTask={addTask}
          />
          {
            tasksState.length ?
            tasksState.map((item, index) => {
              return(
                <TaskItem
                  key={item.id}
                  task={item}
                  index={index + 1}
                  removeTask={removeTask}
                  changeTaskStatus={changeTaskStatus}
                />
              )
            }) :
            <div className="tasks__not-task">
              Ещё нет задач
            </div>
          }
        </main>
      </div>
    </div>
  );
}

export default App;
