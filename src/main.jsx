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
import store from './app/store'
import { Provider } from 'react-redux'
import AllMovies,{loader as moviesloader} from './pages/all movies/AllMovies';
import MoviePage, {loader as movieloader} from './pages/movie/MoviePages';
import SignUp from './pages/account/Signups';
import Login from './pages/account/Login';
import Logout from './pages/account/Logout';
import UpcomingMoviePage,{loader as upcomingloader} from './pages/home/upcoming/UpcomingMoviePage';

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
        loader: movieloader
      },
      {
        path: "/signup",
        element: <SignUp/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/logout",
        element: <Logout/>,
      },
      {
        path: "/upcoming/:movieId",
        element: <UpcomingMoviePage/>,
        loader: upcomingloader
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
