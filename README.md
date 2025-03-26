# Advanced React To-Do Application 🚀

## Description

A feature-rich To-Do application with Redux state management, API integration, authentication simulation, and Tailwind CSS styling.

## Features

✅ Add, View, and Delete Tasks  
✅ Prioritize Tasks (High, Medium, Low)  
✅ User Authentication (Mocked)  
✅ Persistent Storage (LocalStorage)  
✅ Responsive UI using Tailwind CSS  
✅ API Integration with MockAPI  

## Tech Stack

- React.js
- Redux Toolkit
- Tailwind CSS
- MockAPI
- Axios

## Setup Instructions

1. **Clone the Repository**

   ```sh
   git clone https://github.com/tapader13/job-task-todo

   cd job-task-todo

2. **Install Dependencies**

   ```sh
   npm install

3. **Run the Project**

   ```sh
   npm start

4. **Live Demo**

    🔗 Deployed Link : https://job-task-todo.vercel.app/

5. **API Details**

    Base URL: https://67e293c997fc65f53536b0d8.mockapi.io/tasks

    Fetch Tasks: GET /tasks

    Add Task: POST /tasks

    Delete Task: DELETE /tasks/{id}

6. **Screenshots**

📌 Login Page

[![Screenshot-2025-03-26-030600.png](https://i.postimg.cc/hPzryXX0/Screenshot-2025-03-26-030600.png)](https://postimg.cc/6yKnT5L7)

- Implemented a mock authentication system using Redux.

- Users can log in with an email and password (no backend, stored in Redux state).

- After login, users are redirected to the Task Page.

- If not logged in, users cannot access the task management system.

📌 Task Page

[![Screenshot-2025-03-26-030633.png](https://i.postimg.cc/N05mMVRk/Screenshot-2025-03-26-030633.png)](https://postimg.cc/67xybMj8)

Displays tasks fetched from MockAPI (<https://67e293c997fc65f53536b0d8.mockapi.io/tasks>).

- Tasks are prioritized and sorted (High → Medium → Low).

- Users can add tasks, specifying a title and priority level.

- Tasks are stored in MockAPI, making them persist even after refresh.

- Users can delete tasks, which triggers an API request and removes the task from Redux state.
