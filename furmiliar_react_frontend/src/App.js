import { Route, Routes } from 'react-router-dom'
import './App.css'
import PetsList from './Components/Pets/PetsList'
import Welcome from './Containers/Welcome'

function App() {
  return (
    <div>
      <h1>Furmiliar</h1>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/pets" element={<PetsList />} />
      </Routes>
    </div>
  )
}

export default App
