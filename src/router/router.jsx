import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home";
import About from "../components/About";
import Books from "../components/Books";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <h3>Error page</h3>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/books',
        element: <Books />,
        loader: () => fetch('https://api.itbook.store/1.0/new')
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

export default router;