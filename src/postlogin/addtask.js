import React, { useState } from 'react';
import './Taskform.css';


const TaskForm = ({ addTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [error, setError] = useState('');
    const [addtask,setaddtask]=useState('')

    const handlesetaddtask=()=>{
        setaddtask(...addtask,{addTask})
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (!title.trim()) {
            setError('Please enter a title for the task.');
            return;
        }
        addTask({ title, description, dueDate });
        setTitle('');
        setDescription('');
        setDueDate('');
        setError('');
    };

    return (
        <div className="task-form-container" style={{ marginLeft: "40%", marginTop: "20px" }}>
        <form onSubmit={handleSubmit} className="task-form">
            <label htmlFor="title" style={{ color: "white" }}>Title:</label>
            <input type="text" id="title" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} />

            <label htmlFor="description" style={{ color: "white" }}>Description:</label>
            <textarea id="description" placeholder="Enter description" value={description} onChange={e => setDescription(e.target.value)} />

            <label htmlFor="dueDate" style={{ color: "white" }}>Due Date:</label>
            <input type="date" id="dueDate" value={dueDate} onChange={e => setDueDate(e.target.value)} />

            {error && <div className="error">{error}</div>} {/* Display error message if there's any */}

            <button onClick={handlesetaddtask} type="submit">Add Task</button>
        </form>
    </div>
        // <form onSubmit={handleSubmit} className="task-form">
        //     <label htmlFor="title">Title:</label>
        //     <input type="text" id="title" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} />

        //     <label htmlFor="description">Description:</label>
        //     <textarea id="description" placeholder="Enter description" value={description} onChange={e => setDescription(e.target.value)} />

        //     <label htmlFor="dueDate">Due Date:</label>
        //     <input type="date" id="dueDate" value={dueDate} onChange={e => setDueDate(e.target.value)} />

        //     {error && <div className="error">{error}</div>} {/* Display error message if there's any */}
            
        //     <button type="submit">Add Task</button>
        // </form>
        
    );
};

export default TaskForm;
