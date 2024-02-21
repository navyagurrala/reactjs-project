import React from 'react';

const Modal = ({ task }) => {
    return (
        <div className="modal">
            <h2>Task Details</h2>
            <p>Title: {task.title}</p>
            <p>Description: {task.description}</p>
            <p>Due Date: {task.dueDate}</p>
        </div>
    );
};

export default Modal;
