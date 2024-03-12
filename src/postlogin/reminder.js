import React, { useState } from 'react';
import moment from 'moment';

const ReminderForm = () => {
    const [reminderDate, setReminderDate] = useState('');
    const [reminderTime, setReminderTime] = useState('');
    const [message, setMessage] = useState('');
    const [reminders, setReminders] = useState([]);
    const [alertContact, setAlertContact] = useState('');
    const [editReminderId, setEditReminderId] = useState(null);
    const [editReminderDate, setEditReminderDate] = useState('');
    const [editReminderTime, setEditReminderTime] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const formattedDateTime = moment(`${reminderDate}T${reminderTime}`, 'YYYY-MM-DDTHH:mm', true);
        if (formattedDateTime.isValid()) {
            const newReminder = {
                id: Date.now(),
                datetime: formattedDateTime.format('YYYY-MM-DDTHH:mm'),
                message: `Reminder set for ${formattedDateTime.format('YYYY-MM-DD HH:mm')}`,
            };
            if (editReminderId !== null) {
                const updatedReminders = reminders.map(reminder =>
                    reminder.id === editReminderId ? { ...reminder, ...newReminder } : reminder
                );
                setReminders(updatedReminders);
                setEditReminderId(null);
                setMessage('Reminder updated successfully.');
            } else {
                setReminders([...reminders, newReminder]);
                setMessage('Reminder set successfully.');
            }
            setReminderDate('');
            setReminderTime('');
            setEditReminderDate('');
            setEditReminderTime('');
            setAlertContact('');
        } else {
            setMessage('Please enter a valid date and time (YYYY-MM-DD HH:mm).');
        }
    };

    const handleEdit = id => {
        const reminderToEdit = reminders.find(reminder => reminder.id === id);
        setEditReminderId(id);
        setEditReminderDate(moment(reminderToEdit.datetime).format('YYYY-MM-DD'));
        setEditReminderTime(moment(reminderToEdit.datetime).format('HH:mm'));
        setAlertContact(reminderToEdit.alertContact || '');
    };

    const handleRemove = id => {
        const newReminders = reminders.filter(reminder => reminder.id !== id);
        setReminders(newReminders);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} style={{ margin: '20px', padding: '20px', border: '1px solid black', borderRadius: '5px',backgroundColor:"lightgreen" }}>
                <label htmlFor="reminderDate" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Reminder Date:</label>
                <input
                    id="reminderDate"
                    type="date"
                    value={editReminderId !== null ? editReminderDate : reminderDate}
                    onChange={e => (editReminderId !== null ? setEditReminderDate(e.target.value) : setReminderDate(e.target.value))}
                    style={{ width: '100%', padding: '5px', marginBottom: '10px', border: '1px solid black', borderRadius: '5px',backgroundColor:"lightcoral" }}
                />
                <label htmlFor="reminderTime" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Reminder Time:</label>
                <input
                    id="reminderTime"
                    type="time"
                    value={editReminderId !== null ? editReminderTime : reminderTime}
                    onChange={e => (editReminderId !== null ? setEditReminderTime(e.target.value) : setReminderTime(e.target.value))}
                    style={{ width: '100%', padding: '5px', marginBottom: '10px', border: '1px solid black', borderRadius: '5px',backgroundColor:"lightcoral" }}
                />
                <label htmlFor="alertContact" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Alert Contact:</label>
                <input
                    id="alertContact"
                    type="text"
                    value={alertContact}
                    onChange={e => setAlertContact(e.target.value)}
                    placeholder="Phone number or email address"
                    style={{ width: '100%', padding: '5px', marginBottom: '10px', border: '1px solid black', borderRadius: '5px',backgroundColor:"lightcoral",color:"black" }}
                />
                <button type="submit" style={{ padding: '5px 10px', marginRight: '10px', border: '2px solid blue', borderRadius: '5px', cursor: 'pointer' }}>{editReminderId !== null ? 'Update Reminder' : 'Set Reminder'}</button>
                <button type="button" onClick={() => { setEditReminderId(null); setReminderDate(''); setReminderTime(''); setAlertContact(''); setMessage(''); }} style={{ padding: '5px 10px', border: '2px solid blue', borderRadius: '5px', cursor: 'pointer' }}>Clear</button>
                {message && <p style={{ marginTop: '10px', color: 'blue', fontWeight: 'bold' }}>{message}</p>}
            </form>
            <div style={{ marginTop: '20px', }}>
                <h2>Reminders:</h2>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {reminders.map(reminder => (
                        <li key={reminder.id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid black',backgroundColor:"lightblue", borderRadius: '5px', position: 'relative',color:"black" }}>
                            {reminder.message}
                            <div style={{ position: 'absolute', top: '5px', right: '15px' }}>
                                <button onClick={() => handleEdit(reminder.id)} style={{ marginRight: '5px', backgroundColor: 'orange', color: 'white', border: '2px solid black', borderRadius: '5px', padding: '2px 5px', cursor: 'pointer' }}>Edit</button>
                                <button onClick={() => handleRemove(reminder.id)} style={{ backgroundColor: 'red', color: 'white', border: '2px solid black', borderRadius: '5px', padding: '2px 5px', cursor: 'pointer' }}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ReminderForm;
