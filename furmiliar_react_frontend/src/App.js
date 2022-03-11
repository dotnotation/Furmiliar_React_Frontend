import { Route, Routes } from 'react-router-dom'
import './App.css'
import PetForm from './Components/Pets/PetForm'
import PetsList from './Components/Pets/PetsList'
import PetEditForm from './Components/Pets/PetEditForm'
import Welcome from './Components/Home/Welcome'
import ToysList from './Components/Toys/ToysList'
import NavigationBar from './Components/Navbar/Navbar'
import ToyEditForm from './Components/Toys/ToyEditForm'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <div className="App">
      <NavigationBar />
      <Footer />
      <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/pets' element={<PetsList />} />
          <Route path='/pets/new' element={<PetForm />} />
          <Route path='/pets/:id/edit' element={<PetEditForm />}/>
          <Route path='/toys' element={<ToysList />} />
          <Route path='/toys/:id/edit' element={<ToyEditForm />} />
      </Routes>
    </div>
  )
}

export default App
