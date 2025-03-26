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
    <div className=' w-full lg:w-1/2 mx-auto'>
      {tasks.map((task) => (
        <li key={task.id} className='flex justify-between p-2 border-b'>
          <div className='flex items-center '>
            <h4 className='font-bold mr-2'>{task.title}</h4>
            <span className='bg-gray-500 p-1 text-white rounded text-xs'>
              {task.priority}
            </span>
          </div>
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
