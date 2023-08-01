import { useState } from "react";

export default function AlienCard({ alien, alienObjects, setAlienObjects }) {


  const [clicked, setClicked] = useState(false)
  let locallyStoredAlienObjects = [...alienObjects]

  function adjusted(alienId){
    locallyStoredAlienObjects.forEach((alien)=> {
      if (alien._id === alienId && alien.isActive === true) {
        alien.isActive = false
      } else if (alien._id === alienId && alien.isActive === false) {
          alien.isActive = true
      }
    })
    setAlienObjects(locallyStoredAlienObjects)
    console.log(alienObjects)
  }

  let activeAlienCounter = alienObjects.filter((alien)=> {
    return alien.isActive === true
  })

  const handleClickFn = () => {
    if (!clicked) {
      setClicked(true)
    } else {
      setClicked(false)
    }
    adjusted(alien._id)
  }



  return (
    <div className={clicked ? "inactive" : "aliencard"} onClick={()=>{handleClickFn()}}>
      <img
        className="alien-body"
        src={`assets/alien-layers/body-${alien.skinColour}-${alien.skinTexture}.png`}
      />
      <img
        className="alien-eyes"
        src={`assets/alien-layers/eyes-${alien.eyeColour}-${alien.eyes}.png`}
      />
      <img
        className="alien-mouth"
        src={`assets/alien-layers/mouth-${
          alien.isFriendly ? 'friendly' : 'unfriendly-a'
        }.png`}
      />
      {alien.horns ? <img
        className="alien-horns"
        src={`assets/alien-layers/horns-${alien.horns}.png`}
      /> : null}
      {alien.hasAntenna ? (
        <img
          className="alien-antenna"
          src={'assets/alien-layers/antenna.png'}
        />
      ) : null}
      <h2>{activeAlienCounter.length}</h2>
    </div>
  );
}
