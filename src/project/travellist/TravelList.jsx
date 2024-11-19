import React, { useState } from "react";

const TraveLList = () => {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    const addTask = () => {
        if (input.trim()) {
            setTasks([...tasks, input]);
            setInput('');
        }
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
      <div className="todo-list w-100 h-100">
        <h1 className="text-info text-center mb-5">TODO List</h1>
        <div className="d-flex gap-2 justify-content-center">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-25 form-control"
            type="text"
            placeholder="Add a new task"
          />
          <button onClick={addTask} className="btn btn-success">
            Add
          </button>
        </div>

        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              className="d-flex   align-items-center justify-content-center mt-5">
              <h3 className="  me-3 p-0 text-white">{task}</h3>
              <button
                onClick={() => deleteTask(index)}
                className="btn btn-danger">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default TraveLList;
