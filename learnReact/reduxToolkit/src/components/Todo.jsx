import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center mt-8">
      <div className="w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-4 text-white">Your Todos</h2>
        <ul className="list-none p-0">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="mt-4 flex justify-between items-center bg-gray-800 px-4 py-2 rounded-lg shadow-lg"
            >
              <span className="text-white">{todo.text}</span>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded transition duration-200 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todos;
