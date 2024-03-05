import React, { useState } from 'react';
import moment from 'moment';

const ReminderForm = ({ setReminder }) => {
    const [reminderDate, setReminderDate] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const formattedDate = moment(reminderDate, 'YYYY-MM-DD', true);
        if (formattedDate.isValid()) {
            setReminder(formattedDate.format('YYYY-MM-DD'));
            setMessage('Reminder set successfully.');
            setReminderDate('');
        } else {
            setMessage('Please enter a valid date (YYYY-MM-DD).');
        }
    };
    const handleClear = () => {
        setReminderDate('');
        setMessage('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <label htmlFor="reminderDate" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Reminder Date:</label>
            <input
                id="reminderDate"
                type="date"
                value={reminderDate}
                onChange={e => setReminderDate(e.target.value)}
                style={{ width: '100%', padding: '5px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '3px' }}
            />
            <button type="submit" style={{ padding: '5px 10px', marginRight: '10px', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Set Reminder</button>
            <button type="button" onClick={handleClear} style={{ padding: '5px 10px', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Clear</button>
            {message && <p style={{ marginTop: '10px', color: 'green', fontWeight: 'bold' }}>{message}</p>}
        </form>
    );
};

export default ReminderForm;
