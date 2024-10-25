import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

const AllTodos = () => {
  const { allTodos,deleteTodos } = useContext(GlobalContext);
 

  return (
    <>
      <h2>All Todos</h2>
      <div className="row">
        {allTodos.map((todo) => (
          <div key={todo.id} className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{todo.title}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {todo.description}
                </h6>
                <p className="card-text">{todo.time}</p>
                <p className="card-text">{todo.date}</p>
                <button type="button" onClick={()=>deleteTodos(todo.id)} className="btn btn-outline-danger">X</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </>
  );
};

export default AllTodos;