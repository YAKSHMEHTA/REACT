import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"msg done",
            completes:false,
        },
    ],
    addTodo: (todo) => {},
    updateTodo:(id,todo) => {},
    delTodo: (id) => {},
    toggleComp: (id) => {},
})

export const useTodo = () =>{
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider