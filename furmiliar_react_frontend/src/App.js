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
import ToyRandom from './Components/Toys/ToyRandom'
import ErrorBoundary from './ErrorBoundary'

function App() {

  return (
    <div className="App">
      <NavigationBar />
      <ErrorBoundary message="Something went wrong">
        <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/pets' element={<PetsList />} />
            <Route path='/pets/new' element={<PetForm />} />
            <Route path='/pets/:id/edit' element={<PetEditForm />}/>
            <Route path='/toys' element={<ToysList />} />
            <Route path='/toys/:id/edit' element={<ToyEditForm />} />
            <Route path='/toys/random' element={<ToyRandom />} />
        </Routes>
      </ErrorBoundary>
      <Footer />
    </div>
  )
}

export default App
