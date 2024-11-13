import React from 'react';
import { useLocation } from 'react-router-dom';
import './AvailableTrains.css'; // Import your CSS file here

const AvailableTrains = () => {
    const location = useLocation();
    const { from, to, date } = location.state || { from: '', to: '', date: '' };

    // Simulated train data
    const trainData = [
        { id: 1, name: 'Express Train', time: '10:00 AM', duration: '2h 30m', fare: '$50' },
        { id: 2, name: 'Intercity Train', time: '12:30 PM', duration: '3h 15m', fare: '$60' },
        { id: 3, name: 'Rapid Train', time: '3:00 PM', duration: '1h 45m', fare: '$45' },
        { id: 4, name: 'Superfast Train', time: '5:15 PM', duration: '2h 20m', fare: '$55' },
        { id: 5, name: 'Local Train', time: '8:00 PM', duration: '4h 00m', fare: '$30' },
    ];

    return (
        <div className="available-trains-page">
            <h1>Available Trains from {from} to {to} on {date}</h1>
            <div className="train-list">
                {trainData.map((train) => (
                    <div key={train.id} className="train-item">
                        <h3>{train.name}</h3>
                        <p>Time: {train.time}</p>
                        <p>Duration: {train.duration}</p>
                        <p>Fare: {train.fare}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AvailableTrains;
