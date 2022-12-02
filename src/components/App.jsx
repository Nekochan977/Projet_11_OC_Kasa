import '../styles/App.css'
import Header from './Header'
import Home from '../pages/Home'
import About from '../pages/About'
import Error from '../pages/Error'
import { Routes, Route } from "react-router-dom"
import Layout from './Layout'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes> 
    </div>
  )
}

export default App;
