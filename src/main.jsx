import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './routes/root';
import ErrorPage from './routes/ErrorPage';
import Home from './pages/home/Home';
import AllMovies,{loader as moviesloader} from './pages/all movies/AllMovies';
import MoviePage from './pages/movie/MoviePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/movies",
        element: <AllMovies/>,
        loader: moviesloader
      },
      {
        path: "/movies/:movieId",
        element: <MoviePage/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
