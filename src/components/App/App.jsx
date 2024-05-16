import { Link, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from '../Layout/Layout'
import './App.css'
// import HomePage from './pages/HomePage/HomePage'
// import MoviesPage from './pages/MoviesPage/MoviesPage'
// import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage'
import Navigation from '../Navigation/Navigation'
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
// import MovieCast from './components/MovieCast/MovieCast'
// import MovieReviews from './components/MovieReviews/MovieReviews'

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"))
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"))
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage/MovieDetailsPage"))
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"))
const MovieCast = lazy(() => import("../MovieCast/MovieCast"))
const MovieReviews = lazy(()=> import("../MovieReviews/MovieReviews"))



function App() {


  return (
    <>
    
      <Layout>
              <Suspense fallback={null}>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/movies' element={<MoviesPage />}></Route>
        <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
          <Route path='cast' element={<MovieCast />}/>
          <Route path='reviews' element={<MovieReviews />}/>
         </Route>
         <Route path='*' element={ <NotFoundPage/>  }></Route>

      </Routes>
   </Suspense>
</Layout>
    
    </>
  )
}

export default App
