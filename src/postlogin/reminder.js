import React, { useState } from 'react';
import moment from 'moment';

const ReminderForm = ({ onSetReminder }) => {
    const [reminderDate, setReminderDate] = useState('');
    const [reminderTime, setReminderTime] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const formattedDateTime = moment(`${reminderDate}T${reminderTime}`, 'YYYY-MM-DDTHH:mm', true);
        if (formattedDateTime.isValid()) {
            // onSetReminder(formattedDateTime.format('YYYY-MM-DDTHH:mm'));
            setMessage('Reminder set successfully.');
            setReminderDate(formattedDateTime.format('YYYY-MM-DD'));
            setReminderTime(formattedDateTime.format('HH:mm'));
        } else {
            setMessage('Please enter a valid date and time (YYYY-MM-DD HH:mm).');
        }
    };

    const handleClear = () => {
        setReminderDate('');
        setReminderTime('');
        setMessage('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ margin: '20px', padding: '20px', border: '1px solid black', borderRadius: '5px' }}>
            <label htmlFor="reminderDate" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Reminder Date:</label>
            <input
                id="reminderDate"
                type="date"
                value={reminderDate}
                onChange={e => setReminderDate(e.target.value)}
                style={{ width: '100%', padding: '5px', marginBottom: '10px', border: '1px solid black', borderRadius: '3px' }}
            />
            <label htmlFor="reminderTime" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Reminder Time:</label>
            <input
                id="reminderTime"
                type="time"
                value={reminderTime}
                onChange={e => setReminderTime(e.target.value)}
                style={{ width: '100%', padding: '5px', marginBottom: '10px', border: '1px solid black', borderRadius: '3px' }}
            />
            <button type="submit" style={{ padding: '5px 10px', marginRight: '10px', border: '2px solid blue', borderRadius: '3px', cursor: 'pointer' }}>Set Reminder</button>
            <button type="button" onClick={handleClear} style={{ padding: '5px 10px', border: '2px solid blue', borderRadius: '3px', cursor: 'pointer' }}>Clear</button>
            {message && <p style={{ marginTop: '10px', color: 'green', fontWeight: 'bold' }}>{message}</p>}
        </form>
    );
};

export default ReminderForm;
