import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Link to="dashboard">Dash Board</Link>&nbsp;&nbsp;
      <Link to="booking">Booking</Link>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
