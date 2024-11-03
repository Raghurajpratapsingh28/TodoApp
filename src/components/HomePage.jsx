
'use client'

import React, {useContext,  useState } from 'react'
import { GlobalContext } from '../Context/GlobalState';

export default function CenteredTodoInput() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const {addTodos} = useContext(GlobalContext);
  const [submittedTodo, setSubmittedTodo] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically handle the form submission,
    // such as sending the data to an API or updating state
    console.log({ title, description, date, time })
  
    // Reset form fields after submission
    setTitle('')
    setDescription('')
    setDate('')
    setTime('')

    const newTodo = { title, description, date, time }
    setSubmittedTodo(newTodo)
        const newTasks = {
      id: Math.floor(Math.random() * 1000000000),
      title,
      description,
      date,
      time,
    };


    addTodos(newTasks);
  }

  return (
    <div className="page-container">
      <div className="todo-input-container">
        <h2>Add New Todo</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Enter todo title"
            />
          </div>
          <div className="input-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter todo description"
            ></textarea>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="time">Time</label>
              <input
                type="time"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit">Add Todo</button>
        </form>
        {submittedTodo && (
          <div className="submitted-todo">
            <h3>Just Added Todo:</h3>
            <div className="todo-card">
              <h4>{submittedTodo.title}</h4>
              <p>{submittedTodo.description}</p>
              <div className="todo-details">
                <span>Date: {submittedTodo.date}</span>
                <span>Time: {submittedTodo.time}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .page-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #f5f5f5;
        }

        .todo-input-container {
          width: 100%;
          max-width: 400px;
          padding: 20px;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        h2 {
          color: #333;
          text-align: center;
          margin-bottom: 20px;
        }

        .input-group {
          margin-bottom: 15px;
        }

        label {
          display: block;
          margin-bottom: 5px;
          color: #555;
          font-weight: bold;
        }

        input, textarea {
          width: 100%;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
        }

        textarea {
          height: 100px;
          resize: vertical;
        }

        .input-row {
          display: flex;
          gap: 10px;
        }

        .input-row .input-group {
          flex: 1;
        }

        button {
          width: 100%;
          padding: 10px;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        button:hover {
          background-color: #45a049;
        }

        @media (max-width: 480px) {
          .todo-input-container {
            max-width: 90%;
          }

          .input-row {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}


