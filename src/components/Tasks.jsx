import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../redux/tasks/taskSlice';

const Tasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };
  return (
    <div className='flex flex-wrap gap-4 w-full'>
      {tasks.map((task) => (
        <li key={task.id} className='flex justify-between p-2 '>
          <span>{task.title}</span>
          <button
            className='bg-red-500 px-2 py-1 rounded'
            onClick={() => handleDelete(task.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </div>
  );
};

export default Tasks;
