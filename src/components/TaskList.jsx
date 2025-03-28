import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../redux/tasks/taskSlice';

const TaskList = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.tasks.error);

  const tasks = useSelector((state) => state.tasks.tasks);
  const sortedTasks = [...tasks].sort((a, b) => {
    const priorityOrder = ['High', 'Medium', 'Low'];
    return (
      priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority)
    );
  });
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };
  return (
    <div className=' w-full lg:w-1/2 mx-auto'>
      {errorMessage && (
        <div className='bg-red-500 text-white p-2 text-center mb-2'>
          {errorMessage}
        </div>
      )}
      {sortedTasks.map((task) => (
        <li key={task.id} className='flex justify-between p-2 border-b'>
          <div className='flex items-center '>
            <h4 className='font-bold mr-2'>{task.title}</h4>
            <span
              className={`px-2 py-1 text-xs rounded ${
                task.priority === 'High'
                  ? 'bg-red-500 text-white'
                  : task.priority === 'Medium'
                  ? 'bg-yellow-500'
                  : 'bg-green-500'
              }`}
            >
              {task.priority}
            </span>
          </div>
          <button
            className='bg-red-500 cursor-pointer px-2 py-1 rounded'
            onClick={() => handleDelete(task.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </div>
  );
};

export default TaskList;
