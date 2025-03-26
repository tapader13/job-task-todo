import './App.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, addTask, deleteTask } from './redux/tasks/taskSlice';

const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      dispatch(addTask({ name: newTask, priority: 'Medium' }));
      setNewTask('');
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className='p-6 max-w-lg mx-auto bg-gray-900 text-white rounded-lg'>
      <h1 className='text-2xl mb-4'>React To-Do App</h1>
      <div className='flex mb-4'>
        <input
          className='flex-1 p-2 border rounded-l bg-gray-800'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder='Add a new task...'
        />
        <button
          className='bg-blue-500 px-4 py-2 rounded-r'
          onClick={handleAddTask}
        >
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className='flex justify-between p-2 border-b'>
            <span>{task.name}</span>
            <button
              className='bg-red-500 px-2 py-1 rounded'
              onClick={() => handleDelete(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
