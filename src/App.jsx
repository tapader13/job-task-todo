import './App.css';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTasks, addTask } from './redux/tasks/taskSlice';
import Tasks from './components/Tasks';

const App = () => {
  const dispatch = useDispatch();
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

  return (
    <div className='p-6 w-full'>
      <h1 className='text-2xl font-bold mb-4 text-center'>React To-Do App</h1>
      <div className='flex mb-4 max-w-sm mx-auto'>
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
      <div className='w-full'>
        <Tasks />
      </div>
    </div>
  );
};

export default App;
