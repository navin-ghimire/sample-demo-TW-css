import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Page1 from './pages/nested-compo/Page1';
import Page2 from './pages/nested-compo/Page2';
import RootLayout from './components/RootLayout';

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
      }
     ]
     
    },
   


  ]);

  return <RouterProvider router={router} />
}

export default App