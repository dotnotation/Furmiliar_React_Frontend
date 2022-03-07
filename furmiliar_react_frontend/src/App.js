import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import PetForm from './Components/Pets/PetForm'
import PetsList from './Components/Pets/PetsList'
import Welcome from './Components/Home/Welcome'

function App() {
  return (
    <div>
      <h1>Furmiliar</h1>
      <Link to='/'>Home</Link><br></br>
      <Link to='/pets'>Pets</Link><br></br>
      <Link to='/pets/new'>Register Pet</Link><br></br>

      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/pets' element={<PetsList />} />
        <Route path='/pets/new' element={<PetForm />} />
      </Routes>
    </div>
  )
}

export default App
