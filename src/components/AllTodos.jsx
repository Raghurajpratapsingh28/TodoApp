import React, { useContext, useState } from 'react';
import { GlobalContext } from '../Context/GlobalState';

const AllTodos = () => {
  const { allTodos, deleteTodos } = useContext(GlobalContext);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTodos = allTodos.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <form className="d-flex" role="search">
        <input
          className="htmlForm-control me-2"
          type="search"
          placeholder="Search Todos"
          aria-label="Search Todos"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      <h2>All Todos</h2>
      <div className="row">
        {filteredTodos.map((todo) => (
          <div key={todo.id} className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{todo.title}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {todo.description}
                </h6>
                <p className="card-text">{todo.time}</p>
                <p className="card-text">{todo.date}</p>
                <button
                  type="button"
                  onClick={() => deleteTodos(todo.id)}
                  className="btn btn-outline-danger"
                >
                  X
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllTodos;