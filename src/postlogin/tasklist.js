
import React from 'react';

const TaskList = ({ tasks }) => {
    console.log(tasks);
    return (
        <div>
            <h2>Tasks</h2>
            {tasks && tasks.length > 0 ? (
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            {task.title} - {task.description} - {task.dueDate}
                        </li>
                    ))}
                </ul>
            ) : (
                <div>No tasks available</div>
            )}
      </div>
        
        );
    };
    
    export default TaskList;