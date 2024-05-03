import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { parseISO, isWithinInterval } from 'date-fns';
import ChartSettings from './ChartSettings'; // Your existing chart settings component
import Chart from './Chart'; // Your existing Chart component

import 'react-datepicker/dist/react-datepicker.css';

// Generate a random date between a start and end date
export const generateRandomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// Generate a random integer between min (inclusive) and max (inclusive)
export const generateRandomInteger = (min, max) => {
    return Math.floor(min + Math.random() * (max - min + 1));
}

export const generateRandomData = () => {
    let data = [];
    const start = new Date(2024, 0, 1); // start from Jan 1, 2024
    const end = new Date(2024, 11, 31); // end by Dec 31, 2024

    // Generate 100 data points
    for (let i = 0; i < 100; i++) {
        data.push({
            date: generateRandomDate(start, end).toISOString().split('T')[0], // store dates as 'YYYY-MM-DD'
            value: generateRandomInteger(50, 100), // random values between 50 and 100
        });
    }

    return data;
};

const ChartsPage = () => {
    const [startDate, setStartDate] = useState(parseISO('2024-01-01'));
    const [endDate, setEndDate] = useState(parseISO('2024-12-31'));
    const [charts, setCharts] = useState([]); // This state would hold all your charts configuration here.

    // It filters the chart data by the selected date range
    const filterDataByDateRange = (data) => {
        return data.filter((item) =>
            isWithinInterval(parseISO(item.date), { start: startDate, end: endDate })
        );
    };

    // Whenever settings is saved/updated, update the charts state.
    const handleSave = (settings) => {
        setCharts((prevCharts) => [...prevCharts, settings]);
    };

    return (
        <div>
            {charts.length && (
                <div>
                    <DatePicker selected={startDate} onChange={(date) => date && setStartDate(date)} />
                    <DatePicker selected={endDate} onChange={(date) => date && setEndDate(date)} />
                </div>
            )}
            <ChartSettings handleSave={handleSave} />
            {charts.map((settings, i) => (
                <Chart key={i} settings={settings} data={filterDataByDateRange(generateRandomData())} />
            ))}
        </div>
    );
}

export default ChartsPage;