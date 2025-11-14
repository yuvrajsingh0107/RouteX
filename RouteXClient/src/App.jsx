import './App.css'
import Home from './components/Home.jsx'
import MapComponent from './components/MapComponent.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TransmitonPage from './components/TransmitonPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="app-root bg-[#242424]">
        <header className="app-header text-center pt-4 shadow">
          <h1 className="text-3xl font-bold">Welcome to <span className="text-red-600">RouteX</span></h1>
        </header>
        <main>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/map" element={<MapComponent />} />
              <Route path="/location" element={<TransmitonPage />}/>

          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
