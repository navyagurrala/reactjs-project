import React, { useState } from 'react';

const TaskForm = ({ tasks}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Add your task creation logic here
        console.log('Task added:', { title, description, dueDate });

        // Reset form fields after submission
        setTitle('');
        setDescription('');
        setDueDate('');
        setError('');
    };

    return (
        <div style={{ marginLeft: "30%", marginTop: "20px",marginRight:"30%" }}>
            <form onSubmit={handleSubmit} style={{ backgroundColor: "black", padding: "20px", borderRadius: "5px" }}>
                <label htmlFor="title" style={{ color: "white", marginBottom: "5px", display: "block" }}>Title:</label>
                <input type="text" id="title" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} style={{ width: "100%", padding: "5px", marginBottom: "10px" }} />

                <label htmlFor="description" style={{ color: "white", marginBottom: "5px", display: "block" }}>Description:</label>
                <textarea id="description" placeholder="Enter description" value={description} onChange={e => setDescription(e.target.value)} style={{ width: "100%", padding: "5px", marginBottom: "10px" }} />

                <label htmlFor="dueDate" style={{ color: "white", marginBottom: "5px", display: "block" }}>Due Date:</label>
                <input type="date" id="dueDate" value={dueDate} onChange={e => setDueDate(e.target.value)} style={{ width: "100%", padding: "5px", marginBottom: "10px" }} />

                {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>} 

                <button type="submit" style={{ backgroundColor: "blue", color: "white", padding: "5px 10px", border: "none", borderRadius: "3px", cursor: "pointer" }}>Add Task</button>
            </form>
        </div>
    );
};

export default TaskForm;
