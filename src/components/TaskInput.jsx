import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasks/taskSlice';

const TaskInput = () => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('Medium');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      dispatch(addTask({ title: newTask, priority: priority }));
      setNewTask('');
    }
  };

  return (
    <div>
      <div className='flex mb-4 max-w-sm mx-auto'>
        <input
          className='flex-1 p-2 border rounded-l text-gray-700 bg-gray-300'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder='Add a new task...'
        />
        <button
          className='bg-gray-700 cursor-pointer text-white px-4 py-2 rounded-r'
          onClick={handleAddTask}
        >
          Add
        </button>
      </div>
      <div className='text-center mb-4'>
        <label htmlFor='priority' className='mr-2'>
          Set Task priority:
        </label>
        <select
          name='priority'
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className='p-2 border rounded bg-gray-300'
          id='priority'
        >
          <option value='Low'>Low</option>
          <option value='Medium'>Medium</option>
          <option value='High'>High</option>
        </select>
      </div>
    </div>
  );
};

export default TaskInput;
