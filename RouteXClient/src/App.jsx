import './App.css'
import MapComponent from './components/MapComponent.jsx'

function App() {
  return (
    <div className="app-root bg-[#242424]">
      <header className="app-header text-center pt-4 shadow">
        <h1 className="text-3xl font-bold">Welcome to <span className="text-red-600">RouteX</span></h1>
      </header>
      <main>
        <MapComponent />
      </main>
    </div>
  )
}

export default App
