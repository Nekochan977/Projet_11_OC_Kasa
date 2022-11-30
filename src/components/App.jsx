import '../styles/App.css';
import Header from './Header';
import Home from '../pages/Home';
import About from '../pages/About';
import { Routes, Route, Outlet, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Pages={Home}/>
          <Route index Pages={Home}> 
          <Route path="/about" Pages={About} />
        </Route>
      </Routes>
      <Header />
      <Home />
    </div>
  );
}

export default App;
