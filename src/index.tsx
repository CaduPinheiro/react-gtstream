import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import { Home } from './components/Home';
import { Header } from './components/Header';
import { Movies } from './components/Movies';
import { Series } from './components/Series';
import { Contact } from './components/Contact';
import { Movie } from '../src/shared/interfaces';
import { Serie } from '../src/shared/interfaces'

const listMovie = [
    { 
      title: "As Branquelas", 
      resume: "Dois irmãos agentes do FBI, Marcus e Kevin Copeland, são forçados a escoltar um par de socialites nos Hamptons.",
      rating: 4,
      realeseYear: "2004",
      image: "https://br.web.img3.acsta.net/newsv7/21/07/03/20/25/3679610.jpg",
    } as Movie,
    { 
      title: "Jogos Vorazes", 
      resume: "A Capital de Panem controla 12 distritos e os força a escolher um garoto e uma garota, conhecidos como tributos, para competir em uma jogo mortal.",
      rating: 5,
      realeseYear: "2012",
      image: "https://cdn.mos.cms.futurecdn.net/LKZtq8VyuxnGXqfJLfpyH.jpg",
    } as Movie,
  ]

const listSerie = [
    { 
      title: "One Day at a Time", 
      resume: "Uma família americana com raízes cubanas, composta por uma mãe recém-divorciada e ex-militar que precisa criar sua filha adolescente e o filho...",
      nSeasons: 4,
      rating: 4,
      image: "https://ogimg.infoglobo.com.br/cultura/23773998-e82-086/FT1086A/ODAAT_309_Unit_01476R.jpg",
    } as Serie,
    { 
      title: "Zoey e a sua Fantástica Playlist", 
      resume: "Em Zoey e a sua Fantástica Playlist, Zoey Clarke (Jane Levy) é uma jovem e inteligente programadora que tenta fazer seu nome no cenário tecnológico...",
      nSeasons: 1,
      rating: 3,
      image: "https://miro.medium.com/max/1014/1*dWX6_bvACeNu251FZtIeRw.jpeg",
    } as Serie,
  ]

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header page=''/>
      <div className='gradient'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/movies' element={<Movies list={listMovie} />}></Route>
          <Route path='/series' element={<Series list={listSerie}/>}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

