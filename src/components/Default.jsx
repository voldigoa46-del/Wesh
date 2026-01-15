import React from 'react'
import { Link } from 'react-router-dom'
import DefaultImg from '../assets/Default.jpg'

const Default = () => {
  return (
    <div className='main'>
        <h2>Bonjour, <br />
Il est temps de présenter un autre de mes projets dédié spécialement a ma grande sœur <br />
et qui a été créé pour ma grande sœur Dorothée.</h2>
    <img src={DefaultImg} alt="Image par défaut" srcSet={DefaultImg} />
    <h2>Appuyez sur la navigation <Link to={'/Home'}> Page d'accueil </Link> pour être accueilli.</h2>
    </div>
  )
}

export default Default
