import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <header className="Header">
      <h1>My Chart Application</h1>
      <nav>
        <ul>
          <li><Link to="/view">View Mode</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;