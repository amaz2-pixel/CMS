import routes from './routes'
import { useRoutes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/Navbar'
import Sidebar from './components/SideBar/Sidebar'
function App() {

   let router=useRoutes(routes)
  return (
    <>
    <NavBar/>
    <div className='container'>
    <Sidebar/>
    {router}
    </div>
    
    </>
  )
}

export default App
