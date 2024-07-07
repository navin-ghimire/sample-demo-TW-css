import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import RootLayout from './components/RootLayout';
import NotFound from './pages/NotFound';

const App = () => {


  const router = createBrowserRouter([
    {
     path:'/',
     element: <RootLayout />,
     children: [
      {
        index: true,
        element: <Home />
      },
      {
        path:'about-page',
        element: <AboutPage />
      },
      {
        path:'contact-page',
        element: <ContactPage />
      },
      {
        path:'*',
        element: <NotFound />
      }
     ]
     
    },
   


  ]);

  return <RouterProvider router={router} />
}

export default App