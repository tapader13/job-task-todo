import { useEffect } from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import Tasks from './components/TaskList';
import { fetchTasks } from './redux/tasks/taskSlice';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './redux/tasks/authSlice';
import Welcome from './components/Welcome';

const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchTasks());
    }
  }, [dispatch, isAuthenticated]);

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      {!isAuthenticated ? (
        <div className='text-center'>
          <h2 className='text-xl mb-4'>Login to Your To-Do App</h2>
          <input
            type='text'
            className='p-2 border rounded bg-gray-800 mb-2 w-full'
            placeholder='Enter username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            className='bg-blue-500 px-4 py-2 rounded w-full'
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      ) : (
        <div className='p-6 w-full'>
          <div className='text-2xl font-bold mb-4 text-center'>
            <Welcome user={user} handleLogout={handleLogout} />
          </div>
          <div>
            <TaskInput />
          </div>
          <div className='w-full'>
            <Tasks />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
