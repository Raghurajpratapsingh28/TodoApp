import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
    allTodos: [
    {id:1,title:"Going Gym",description:"At 6am",date:"10/11/2024",time:"05:30am"},
    {id:2,title:"Going class",description:"At 9am",date:"10/11/2024",time:"09:00am"},
    {id:3,title:"Going Gym",description:"At 11am",date:"10/11/2024",time:"11:00am"},
    {id:4,title:"Going Gym",description:"At 2pm",date:"10/11/2024",time:"02:00pm"},
    ]
  }
// Creating Context with exporting hese todos
  export const GlobalContext = createContext(initialState);

  export const GlobalProvider = ({ children }) => {
    const [state,dispatch]=useReducer(AppReducer,initialState)

    function deleteTodos(id){
      dispatch({
        type:'DELETE_TODOS',
        payload:id
      })
    }
    function addTodos(allTodo){
      dispatch({
        type:'ADD_TODOS',
        payload:allTodo
      })
    }

    return (<GlobalContext.Provider value={{
        allTodos:state.allTodos,
        deleteTodos,
        addTodos
      }}>
        {children}
      </GlobalContext.Provider>)
  }