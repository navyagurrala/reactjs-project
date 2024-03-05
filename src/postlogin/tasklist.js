import React from 'react';

const TaskList = ({ tasks }) => {
    return (
        <div>
            {tasks && tasks.length > 0 ? (
                <ul>
                    {tasks.map((task, index) => (
                        <div key={index} style={{ marginBottom: "10px", padding: "10px", backgroundColor: "#f4f4f4", borderRadius: "5px" }}>
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                            <p>Due Date: {task.dueDate}</p>
                        </div>
                    ))}
                </ul>
            ) : (
                <div>No tasks available</div>
            )}
        </div>
    );
};
export default TaskList;
