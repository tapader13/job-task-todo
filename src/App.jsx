import './App.css';
import TaskInput from './components/TaskInput';
import Tasks from './components/TaskList';

const App = () => {
  return (
    <div className='p-6 w-full'>
      <h1 className='text-2xl font-bold mb-4 text-center'>React To-Do App</h1>
      <div>
        <TaskInput />
      </div>
      <div className='w-full'>
        <Tasks />
      </div>
    </div>
  );
};

export default App;
