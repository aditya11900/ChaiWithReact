import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center py-12">
      <h1 className="text-4xl font-bold text-indigo-500 mb-8">Learning Redux Toolkit</h1>
      <div className="w-full max-w-md">
        <AddTodo />
      </div>
      <div className="w-full max-w-md mt-4">
        <Todo />
      </div>
    </div>
  );
}

export default App;
