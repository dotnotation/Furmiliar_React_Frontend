import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import PetForm from './Components/Pets/PetForm'
import PetsList from './Components/Pets/PetsList'
import Welcome from './Components/Home/Welcome'
import ToysList from './Components/Toys/ToysList'
import NavigationBar from './Components/Navbar/Navbar'

function App() {
//   require('react-dom');
// window.React2 = require('react');
// console.log(window.React1 === window.React2);
  return (
    <div className="App">
      <NavigationBar />
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
