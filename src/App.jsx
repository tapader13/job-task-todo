import { useEffect } from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import Tasks from './components/TaskList';
import { fetchTasks } from './redux/tasks/taskSlice';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './redux/tasks/authSlice';
import Welcome from './components/Welcome';
import LoginForm from './components/LoginForm';

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
        <LoginForm />
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
