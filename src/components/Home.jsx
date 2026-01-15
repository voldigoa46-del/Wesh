import React from 'react'
import { Link } from 'react-router-dom'
import HomeImg from '../assets/Home.jpg'

const Home = () => {
  return (
    <div className='home'>
        <h2>Bienvenue sur mon site web dédié a ma grande sœur</h2>
        <img src={HomeImg} alt="Image d'accueil" srcSet={HomeImg} />
        <h2>Voici la page web. Vous devriez visiter la <Link to={'/Gallery'}>Page Galerie</Link>.</h2>
    </div>
  )
}

export default Home
