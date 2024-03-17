import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TaskForm = () => {
  const [eachtask, setEachTask] = useState({ title: '', description: '', dueDate: '' });
  const [reminder, setReminder] = useState('');
  const [tempTasks, setTempTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [filter, setFilter] = useState('all');

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

    if (!eachtask.title || !eachtask.description || !eachtask.dueDate || !reminder) {
      alert('Please fill in all fields and set a reminder');
      return;
    } else {
      setTempTasks([...tempTasks, { ...eachtask, reminder, completed: false }]);
      setReminderAlert({ ...eachtask, reminder });
    }

    setEachTask({ title: '', description: '', dueDate: '' });
    setReminder('');
  };

  const handleRemove = (index) => {
    const newTasks = [...tempTasks];
    newTasks.splice(index, 1);
    setTempTasks(newTasks);
  };

  const handleEdit = (index) => {
    const taskToEdit = tempTasks[index];
    setEachTask(taskToEdit);
    setReminder(taskToEdit.reminder);
    handleRemove(index);
  };

  const handleStatusChange = (index) => {
    const updatedTasks = [...tempTasks];
    const taskToUpdate = updatedTasks[index];
    taskToUpdate.completed = !taskToUpdate.completed;
    if (taskToUpdate.completed) {
      setCompletedTasks([...completedTasks, taskToUpdate]);
    } else {
      const newCompletedTasks = completedTasks.filter((task) => task !== taskToUpdate);
      setCompletedTasks(newCompletedTasks);
    }
    setTempTasks(updatedTasks);
  };

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(tempTasks));
  }, [tempTasks]);

  const setReminderAlert = (task) => {
    const reminderTime = new Date(task.reminder).getTime();
    const currentTime = new Date().getTime();
    const timeUntilReminder = reminderTime - currentTime;

    if (timeUntilReminder > 0) {
      setTimeout(() => {
        if (Notification.permission === 'granted') {
          new Notification(`Reminder: ${task.title}`, {
            body: task.description,
            icon: 'https://cdn-icons-png.flaticon.com/128/1827/1827370.png',
          });
        } else {
          Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
              new Notification(`Reminder: ${task.title}`, {
                body: task.description,
                icon: 'https://cdn-icons-png.flaticon.com/128/1827/1827370.png',
              });
            }
          });
        }
      }, timeUntilReminder);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4" style={{ border: '2px solid #f0f0f0', marginTop: '5%', marginLeft: '5%', borderRadius: '10px', padding: '8px' }}>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="title" style={{ color: 'white' }}>
                Title:
              </label>
              <input type="text" id="title" className="form-control" placeholder="Enter title" value={eachtask.title} onChange={updateTitle} />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="description" style={{ color: 'white' }}>
                Description:
              </label>
              <textarea id="description" className="form-control" placeholder="Enter description" value={eachtask.description} onChange={updateDescription}></textarea>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="dueDate" style={{ color: 'white' }}>
                Due Date:
              </label>
              <input type="date" id="dueDate" className="form-control" value={eachtask.dueDate} onChange={updateDueDate} />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="reminder" style={{ color: 'white' }}>
                Reminder:
              </label>
              <input type="datetime-local" id="reminder" className="form-control" value={reminder} onChange={(e) => setReminder(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary" style={{ marginLeft: '40%', backgroundColor: 'blue' }}>
              Add Task
            </button>
          </form>
        </div>

        <div className="col-md-6" style={{ marginTop: '3%', marginLeft: '4%' }}>
          <div className="card mt-5 bg-dark" style={{ marginLeft: '15px', height: '400px', overflowY: 'auto' }}>
            <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: '0', zIndex: '1', backgroundColor: 'rgba(255, 255, 255, 1)' }}>
              <h2 style={{ fontFamily: 'Trirong', margin: '0' }}>Task List:</h2>
              <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  {filter === 'all' ? 'Show All Tasks' : filter === 'completed' ? 'Show Completed Tasks' : 'Show Pending Tasks'}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><button className="dropdown-item" onClick={() => setFilter('all')}>All Tasks</button></li>
                  <li><button className="dropdown-item" onClick={() => setFilter('completed')}>Completed Tasks</button></li>
                  <li><button className="dropdown-item" onClick={() => setFilter('pending')}>Pending Tasks</button></li>
                </ul>
              </div>
            </div>
            <ul className="list-group list-group-flush">
              {(filter === 'completed' ? completedTasks : tempTasks)
                .filter((task) => {
                  if (filter === 'completed') {
                    return task.completed;
                  } else if (filter === 'pending') {
                    return !task.completed;
                  }
                  return true;
                })
                .map((task, index) => {
                  const isTaskDisabled = new Date(task.dueDate) < new Date();
                  const isReminderEnded = new Date(task.reminder) < new Date();
                  return (
                    <li
                      className={`list-group-item ${isTaskDisabled ? 'disabled' : ''}`}
                      key={index}
                      style={{
                        backgroundColor: 'DarkSlateGray',
                        color: 'white',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <div>
                        <strong>Title:</strong> {task.title}, <strong>Description:</strong> {task.description}, <strong>Due Date:</strong> {task.dueDate}, <strong>Reminder:</strong> {task.reminder}
                      </div>
                      <div style={{}}>
                        <button
                          onClick={() => handleStatusChange(index)}
                          className={`btn ${task.completed ? 'btn-success' : 'btn-outline-success'} me-2`}
                          style={{ margin: '5px', color: 'white', backgroundColor: 'green', width: '138px', height: 'auto' }}
                        >
                          {task.completed ? 'Completed' : 'Mark Complete'}
                        </button>
                        <button onClick={() => handleEdit(index)} className="btn btn-primary me-2" style={{ margin: '10px' }}>
                          Edit
                        </button>
                        <button onClick={() => handleRemove(index)} className="btn btn-danger">
                          Remove
                        </button>
                      </div>
                      {isReminderEnded && (
                        <div className="alert alert-warning" role="alert" style={{ marginTop: '10px' }}>
                          Reminder time has ended!
                        </div>
                      )}
                    </li>
                  );
                })}
            </ul>
            <div>Total Tasks: {tempTasks.length}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
