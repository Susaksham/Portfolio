import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Navigation from './Components/Navigation/Navigation'
import Wrapper from './Components/Wrapper/Wrapper'
import Projects from './Components/Projects/Projects'
import About from './Components/About/About'
import Contacts from './Components/Contacts/Contacts'
import Skills from './Components/Skills/Skills'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Wrapper></Wrapper>,
    children: [
      {
        path: 'home',
        element: <Home></Home>,
      },
      {
        path: 'about',
        element: <About></About>,
      },
      {
        path: 'skills',
        element: <Skills></Skills>,
      },
      {
        path: 'projects',
        element: <Projects></Projects>,
      },
      {
        path: 'contact',
        element: <Contacts></Contacts>,
      },
    ],
  },
])
function App() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
