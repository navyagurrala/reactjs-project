import React, { useState } from 'react';

const TaskForm = () => {
    const [eachtask, setEachTask] = useState({ title: '', description: '', dueDate: '' });
    const [error, setError] = useState('');
    const [tempTasks, setTempTasks] = useState([]);

    const updateTitle = (e) => {
        setEachTask({ ...eachtask, title: e.target.value });
    };

    const updateDescription = (e) => {
        setEachTask({ ...eachtask, description: e.target.value });
    };

    const updateDueDate = (e) => {
        setEachTask({ ...eachtask, dueDate: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!eachtask.title || !eachtask.description || !eachtask.dueDate) {
            setError('Please fill in all fields');
            return;
        } else {
            setTempTasks([...tempTasks, eachtask]);
        }

        setEachTask({ title: '', description: '', dueDate: '' });
        setError('');
    };

    return (
        <div style={{ marginLeft: '30%', marginTop: '20px', marginRight: '30%' }}>
            <form onSubmit={handleSubmit} style={{ backgroundColor: 'black', padding: '20px', borderRadius: '5px' }}>
                <label htmlFor="title" style={{ color: 'white', marginBottom: '5px', display: 'block' }}>Title:</label>
                <input type="text" id="title" placeholder="Enter title" value={eachtask.title} onChange={updateTitle} style={{ width: '100%', padding: '5px', marginBottom: '10px' }} />

                <label htmlFor="description" style={{ color: 'white', marginBottom: '5px', display: 'block' }}>Description:</label>
                <textarea id="description" placeholder="Enter description" value={eachtask.description} onChange={updateDescription} style={{ width: '100%', padding: '5px', marginBottom: '10px' }} />

                <label htmlFor="dueDate" style={{ color: 'white', marginBottom: '5px', display: 'block' }}>Due Date:</label>
                <input type="date" id="dueDate" value={eachtask.dueDate} onChange={updateDueDate} style={{ width: '100%', padding: '5px', marginBottom: '10px' }} />

                {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

                <button type="submit" style={{ backgroundColor: 'blue', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Add Task</button>
            </form>
            <div style={{ marginTop: '20px', border: '1px solid black', borderRadius: '5px', padding: '10px' }}>
                <h2 style={{ marginBottom: '10px', borderBottom: '1px solid black', paddingBottom: '5px', backgroundColor: 'purple', color: 'white' }}>Task List:</h2>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {tempTasks.map((task, index) => (
                        <li key={index} style={{ marginBottom: '10px', padding: '5px', border: '1px solid purple', borderRadius: '3px' }}>
                            <strong>Title:</strong> {task.title}, <strong>Description:</strong> {task.description}, <strong>Due Date:</strong> {task.dueDate}
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default TaskForm;
