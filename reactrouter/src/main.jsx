import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Home from './components/Home/Home.jsx'
import About from './components/About/Aboutus.jsx'
import Contact from './components/Contact/Contactus.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import { githubLoaderInfo } from './components/Github/Github.jsx'
// First way of routing
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: "home",
//         element: <Home />
//       },

//       {
//         path: "about",
//         element: <About />
//       },

//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

// Second way of routing
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about-us' element={<About />} />
      <Route path='contact-us' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route loader={githubLoaderInfo} path='github' element={<Github />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
