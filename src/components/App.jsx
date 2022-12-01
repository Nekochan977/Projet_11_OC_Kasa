import '../styles/App.css';
import Header from './Header';
import Home from '../pages/Home';
import About from '../pages/About';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
     
      
    </div>
  );
}

export default App;
