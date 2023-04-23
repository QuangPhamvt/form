import {Route, Routes} from 'react-router-dom'
import Dashboard from './components/dashboard.jsx'
import Landing from './components/Landing.jsx'
import User from './components/user'

function App() {

  return (
    <div className='container px-4 mx-auto'>
      <Routes >
        <Route path='/' element = {<Landing/>}/>
        <Route  path='/login' element = {<User isLogin = {true}/>}/>
        <Route path='/register' element = {<User isLogin ={false}/>}/>
        <Route path='/dashboard' element = {<Dashboard/>}/>
      </Routes>
    </div>
  )
} 

export default App
