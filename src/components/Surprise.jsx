import { useState } from 'react'
import SurpriseImg from '../assets/image.png'
import { useNavigate} from 'react-router-dom'

const Surprise = () => {
  const navigate = useNavigate();
  const [position, setPosition] = useState({x: 0, y: 0})
  const [clicked, setClicked] = useState(false)
  
  const clickedFunc = () => {
    navigate('/Happy');
  }
  
  const handleClick = () => {
    // Calcul de positions aléatoires pour que le bouton s'échappe
    const randomX = Math.random() * 80 // Réduit un peu pour éviter de sortir de l'écran
    const randomY = Math.random() * 80
    setPosition({ x: randomX, y: randomY });
    setClicked(true)
  }

  return (
    <div className='surprise'>
        <h2>Est-ce que tu acceptes d'être la meilleure grande sœur du monde pour toujours ?</h2>
        <img src={SurpriseImg} alt="Image Surprise" srcSet={SurpriseImg} />
        
        <div className="buttons-container">
            <button className='yesss' onClick={clickedFunc}>Oui !</button>
            <button  
                className='noo'
                onClick={ handleClick } 
                onMouseEnter={ handleClick } // Optionnel : le bouton fuit dès qu'on l'approche
                style={{ 
                    position: clicked ? 'absolute' : 'relative', 
                    left: clicked ? `${position.x}vw` : 'auto', 
                    top: clicked ? `${position.y}vh` : 'auto', 
                }}
            >
                Non
            </button>
        </div>
    </div>
  )
}

export default Surprise
