import React, { useEffect, useState } from "react";
import DatePicker from 'react-datepicker';
import { parseISO, isWithinInterval } from 'date-fns';
import Chart from "../components/Chart";
import { generateRandomData } from "../components/ChartsPage"; // Import this function

import 'react-datepicker/dist/react-datepicker.css';

const ViewMode = () => {
  const [chartSettings, setChartSettings] = useState([] as any[]);
  const [startDate, setStartDate] = useState(parseISO('2024-01-01'));
  const [endDate, setEndDate] = useState(parseISO('2024-12-31'));
  const [chartData, setChartData] = useState([] as any[]);

  useEffect(() => {
    const savedSettings = JSON.parse(localStorage.getItem('chartSettings') ?? '[]');
    setChartSettings(savedSettings);
    setChartData(generateRandomData());
  }, []);

  // It filters the chart data by the selected date range
  const filterDataByDateRange = (data) => {
    return data.filter((item) =>
      isWithinInterval(parseISO(item.date), { start: startDate, end: endDate })
    );
  };

  return (
    <div>
      <h1>View Mode Page</h1>
      {chartSettings.length > 0 ? (
        <>
          <div>
            <DatePicker selected={startDate} onChange={(date) => date && setStartDate(date)} />
            <DatePicker selected={endDate} onChange={(date) => date && setEndDate(date)} />
          </div>
          {chartSettings.map((settings, index) => (
            <Chart
              settings={settings}
              data={filterDataByDateRange(chartData)}
              key={index}
            />
          ))}
        </>
      ) : <p>No charts available.</p>}
    </div>
  );
};

export default ViewMode;