import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home";
import About from "../components/About";
import Books from "../components/Books";
import BookDetails from "../components/BookDetails";
import ErrorPage from "../components/ErrorPage";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/books',
        element: <Books />,
        loader: () => fetch('https://api.itbook.store/1.0/new'),
      },
      {
        path: '/book/:id',
        element: <BookDetails />,
        loader: ({params}) => fetch(`https://api.itbook.store/1.0/books/${params.id}`),
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

export default router;