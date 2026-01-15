import React from 'react'
import { Link } from 'react-router-dom'

const Letter = () => {
  return (
    <div className='letter'>
        <h2>
        <strong> À ma grande sœur adorée, ❤️ </strong> </h2>

    <h2>Tu sais, ta présence est comme un rayon de soleil dans ma vie. ☀️ Tu ne fais pas qu'éclairer mon chemin, tu m'apportes une chaleur et un réconfort qui me touchent au plus profond du cœur. Il y a une telle bienveillance dans ton regard — je sais que je peux toujours compter sur toi. 😍</h2>

    <h2>Je ne veux pas seulement te remercier, je veux te dire à quel point ta présence à mes côtés rend mes journées plus faciles. ✨ Merci d'avoir été là dans les moments de joie comme sous la pluie ; je suis tellement reconnaissant de t'avoir pour m'accompagner tout au long de ma vie.</h2>

    <h2>Tu es mon meilleur soutien Dorothée et mon plus bel exemple. 💖 Et moi ? Je serai toujours là pour toi, quoi qu'il arrive… pour toujours.</h2>
<h2>
    Ton petit frère qui t'aime, <br />
 <strong>Christus 💌✨ </strong>
        </h2>
<h2>Une <Link to={'/Surprise'}>Surprise</Link> t'attend. Va vite la voir !</h2>
    </div>
  )
}

export default Letter
