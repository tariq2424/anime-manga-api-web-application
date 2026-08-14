import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Anime from './pages/Anime'
import Manga from './pages/Manga'
import SearchResults from './pages/SearchResults'
import AnimeDetails from './pages/AnimeDetails'
import MangaDetails from './pages/MangaDetails'
import TopAnimeDetails from './pages/TopAnimeDetails'
import TopMangadetails from './pages/TopMangaDetails'





function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/animes' element={<Anime/>} />
      <Route path='/mangas' element={<Manga/>} />
      <Route path='/searchresults' element={<SearchResults/>} />
      <Route path='/animedetails/:id' element={<AnimeDetails/>} />
      <Route path='/mangadetails/:id' element={<MangaDetails/>} />
      <Route path='/topanimedetails/:id' element={<TopAnimeDetails/>} />
      <Route path='/topmangadetails/:id' element={<TopMangadetails/>} />
    </Routes>
    </BrowserRouter>

     

      
    </>
  )
}

export default App
