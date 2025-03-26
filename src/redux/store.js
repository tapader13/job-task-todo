import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './tasks/taskSlice';
import authReducer from './tasks/authSlice';
export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    auth: authReducer,
  },
});
