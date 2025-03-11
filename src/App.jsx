import React,{lazy} from 'react'
import {BrowserRouter as Router,Route,Routes, BrowserRouter} from 'react-router-dom';

const Home=lazy(()=> import('./pages/Home'));
const Login=lazy(()=> import('./pages/Login'));
const Chat=lazy(()=> import('./pages/Chat'));
const Group=lazy(()=> import('./pages/Group'));




const App = () => {
 
  return <BrowserRouter>

  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/chat' element={<Chat/>}/>
    <Route path='/group' element={<Group/>}/>
    <Route path='/about' element={<h1>About</h1>}/>
  </Routes>
  
  </BrowserRouter>
}

export default App
