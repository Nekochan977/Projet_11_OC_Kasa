import '../styles/App.css';
import Header from './Header';
import Home from '../pages/Home';
import { Routes, Route, Outlet, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
