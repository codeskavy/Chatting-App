import React,{lazy} from 'react'
import {BrowserRouter as Router,Route,Routes, BrowserRouter} from 'react-router-dom';
import ProtectRoute from './components/auth/ProtectRoute';

const Home=lazy(()=> import('./pages/Home'));
const Login=lazy(()=> import('./pages/Login'));
const Chat=lazy(()=> import('./pages/Chat'));
const Group=lazy(()=> import('./pages/Group'));
const NotFound=lazy(()=> import('./pages/NotFound'));


let user=false;

const App = () => {
 
  return <BrowserRouter>

  <Routes>
    <Route element={<ProtectRoute user={user}/>}>
    <Route path='/' element={<Home/>}/>
    <Route path='/chat/:chatId' element={<Chat/>}/>
    <Route path='/group' element={<Group/>}/>
    </Route>
  
    <Route path='/login' element={<ProtectRoute user={!user} redirect="/">
      <Login/>
    </ProtectRoute>}/>


    <Route path='*' element={<NotFound/>}/>
  </Routes>
  
  </BrowserRouter>
}

export default App
