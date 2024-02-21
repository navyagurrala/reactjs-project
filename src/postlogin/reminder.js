import React, { useState } from 'react';
import moment from 'moment';
import './reminderform.css';

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
        <form onSubmit={handleSubmit} className="reminder-form">
            <label htmlFor="reminderDate" className="label">Reminder Date:</label>
            <input
                id="reminderDate"
                type="date"
                value={reminderDate}
                onChange={e => setReminderDate(e.target.value)}
                className="input-field"
            />
            <button type="submit" className="submit-button">Set Reminder</button>
            <button type="button" onClick={handleClear} className="clear-button">Clear</button>
            {message && <p className="message">{message}</p>}
        </form>
    );
};

export default ReminderForm;
