import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Document from './Components/Dashboard/Pages/Document';
import Home from './Components/Dashboard/Pages/Home';
import Inventory from './Components/Dashboard/Pages/Inventory';
import Settings from './Components/Dashboard/Pages/Settings';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Dashboard />}>
            <Route path="home" element={< Home />} />
            <Route path="inventory" element={< Inventory />} />
            <Route path="document" element={< Document />} />
            <Route path="settings" element={< Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
