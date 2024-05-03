import React, {useState} from 'react';
import SettingsModal from './SettingsModal';
import './ChartSettings.css'

function ChartSettings() {
    const [open, setOpen] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [settings, setSettings] = useState({
        chartName: '',
        chartType: '',
        chartColor: '',
    });

    const handleChange = (event: { target: { name: any; value: any; }; }) => {
        setSettings({
            ...settings,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log("Submit function working")
        setIsSaved(true);
        const chartSettings = JSON.parse(localStorage.getItem('chartSettings') ?? '[]');
        console.log("Getting chart settings: " + JSON.stringify(chartSettings, null, 2));
        chartSettings.push(settings);
        localStorage.setItem('chartSettings', JSON.stringify(chartSettings));
        console.log(chartSettings + " chart settings stored");
        setTimeout(() => {
            setIsSaved(false);
            setOpen(false);
        }, 2000);
    };

      return (
    <div className="ChartSettings">
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <SettingsModal open={open} onClose={() => setOpen(false)}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="chartName"
            value={settings.chartName}
            onChange={handleChange}
            placeholder="Chart name"
            required
          />
          <select
            name="chartType"
            value={settings.chartType}
            onChange={handleChange}
            required
          >
            <option value="">Select chart type</option>
            <option value="line">Line</option>
            <option value="spline">Spline</option>
            <option value="area">Area</option>
            <option value="column">Column</option>
            <option value="bar">Bar</option>
            <option value="pie">Pie</option>
            <option value="scatter">Scatter</option>
            {/* Add all chart type options here */}
          </select>
          <input
            type="color"
            name="chartColor"
            value={settings.chartColor}
            onChange={handleChange}
            required
          />
          <button type="submit">Save Settings</button>
        </form>
      </SettingsModal>
      {isSaved && <p> Settings saved </p>}
    </div>
  );
}

export default ChartSettings;