import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import G1 from '../assets/G1.jpg'
import G2 from '../assets/G2.jpg'
import G3 from '../assets/G3.jpg'
import G4 from '../assets/G4.jpg'
import G5 from '../assets/G5.jpg'

const Gallery = () => {
  const [image, setImage] = useState([
    {"location": G1},{"location": G2},{"location":  G3},{"location": G4},{"location": G5}
  ])
  return (
    <div className='gallery'>
        <h2>Voici quelques images que j'ai enregistrées dans ma galerie.</h2>
        <h2>Cette fille a volé mon cœur. Si une personne honnête trouve cette fille dans les parages, s'il vous plaît, informez-moi. Je l'emmènerai avec moi pour toujours. 🙃😫</h2>
        <div className='img-container'>
        {image.map((e, index)=>(
          <div className='images' key={index}>
            <img src={e.location} alt={`Gallery ${index}`} srcSet={e.location} />
            </div>
          ))}
          </div>
        <h2>Tu devrais visiter la <Link to={'/Letter'}>Page de la Lettre</Link> pour y découvrir quelque chose.</h2>
    </div>
  )
}

export default Gallery
