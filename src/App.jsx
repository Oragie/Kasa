import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'

import Hello from './components/Hello'
import { createBrowserRouter, NavLink, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:"/",
    element: <div>home</div>
  },
  {
    path:"/about",
    element: (
    <div>À propos
      <nav>
        <NavLink to="/"/>
        <NavLink to="/about">
      </nav>
    </div>
    )
  }
]);

function App() {
 
  return (<>
   <RouterProvider router={router}/>
    
    <Header/>
    <Hello name={"Nous"}/>
    <Hello name={"Nous"}/>
    <Hello name={"Nous"}/>
    <Footer/>
    </>
  )
}

export default App
