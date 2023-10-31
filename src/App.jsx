import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import SignIn from './Pages/SignIn';
import SignOut from './Pages/SignOut';
import Profile from './Pages/Profile';
import Header from './Components/Header';

function App() {
  return (
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/sign-in' element={<SignIn/>}/>
    <Route path='/sign-out' element={<SignOut/>}/>
    
  </Routes>
  </BrowserRouter>
  )
}

export default App
