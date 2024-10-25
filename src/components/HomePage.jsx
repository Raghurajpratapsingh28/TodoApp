import React, { useContext, useState } from 'react';
import { GlobalContext } from '../Context/GlobalState';


const HomePage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const {addTodos} = useContext(GlobalContext);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const Submit = e => {
    e.preventDefault(); // Prevent default form submission behavior
    const newTodo = {
      id: Math.floor(Math.random() * 1000000000),
      title,
      description,
      date,
      time,
    };

    addTodos(newTodo);
  };

  return (
    <div>
      <form onSubmit={Submit}>
        <div className="form-floating">
          <textarea
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
          ></textarea>
          <label htmlFor="floatingTextarea">Title</label>
        </div>
        <div className="form-floating">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
          ></textarea>
          <label htmlFor="floatingTextarea">Description</label>
        </div>
        <div className="form-floating">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="form-control"
            placeholder="Select Date"
          />
          <label htmlFor="floatingTextarea">Date</label>
        </div>
        <div className="form-floating">
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="form-control"
            placeholder="Select Time"
          />
          <label htmlFor="floatingTextarea">Time</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default HomePage;