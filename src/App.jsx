
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MoviesManagement from './pages/movies-management'
import HomePage from './pages/home';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<HomePage/>,
    },
    {
      path: "/Pet",
      element:<MoviesManagement/>,
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App