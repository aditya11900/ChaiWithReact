import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos: [
        {id: 1,
            todo: "Learn React",
            isCompleted: false
        }
    ],
    addTodo: (todo) => {},
    updatedTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleTodo: (id) => {} 
}
)

export const useTodo = () => { 
    return useContext(TodoContext)
}

export const Todoprovider = TodoContext.Provider


