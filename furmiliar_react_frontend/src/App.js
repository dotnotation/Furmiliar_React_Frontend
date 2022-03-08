import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import PetForm from './Components/Pets/PetForm'
import PetsList from './Components/Pets/PetsList'
import Welcome from './Components/Home/Welcome'
import ToysList from './Components/Toys/ToysList'

function App() {
  return (
    <div>
      <h1>Furmiliar</h1>
      <Link to='/'>Home</Link><br></br>
      <Link to='/pets'>Pets</Link><br></br>
      <Link to='/pets/new'>Register Pet</Link><br></br>
      <Link to='/toys'>Toys</Link><br></br>

      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/pets' element={<PetsList />} />
        <Route path='/pets/new' element={<PetForm />} />
        <Route path='/toys' element={<ToysList />} />
      </Routes>
    </div>
  )
}

export default App
