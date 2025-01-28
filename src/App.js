import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Link to="dashboard">Dash Board</Link>&nbsp;&nbsp;
        <Link to="booking">Booking</Link>
        <Outlet></Outlet>
      </div>
    </Provider>
  );
}

export default App;
