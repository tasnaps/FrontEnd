import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Import Header component
import ViewComponent from './pages/ViewMode';
import SettingsComponent from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header /> {/* Use Header component */}
        <Routes>
          <Route path="/view" element={<ViewComponent />} />
          <Route path="/settings" element={<SettingsComponent />} />
        </Routes>
        <div className="card"> </div>
      </div>
    </Router>
  );
}

export default App;
