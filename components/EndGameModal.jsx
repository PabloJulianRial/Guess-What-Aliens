import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EndGameModal({
  chosenAlien,
  setIsGameFinished,
  setHasWon
}) {
  const [clicked, setClicked] = useState(false);

  const winnerAlien = chosenAlien;

  const router = useRouter();

  function handlePlayAgain(e) {
    e.preventDefault();
    setIsGameFinished(false);
    setClicked(true);
    setHasWon(null)
  }

  function handleHome(e) {
    e.preventDefault();
    setClicked(true);
    router.push("/");
  }


  return (
    <div className="modal">
      <div className="text-box">
        <h1>The winner is {}</h1>
        <div className="aliencard winner-card">
          <img
            className="alien-planet"
            src={`assets/alien-layers/planet-${winnerAlien.planet}.png`}
          />
          <img
            className="alien-body"
            src={`assets/alien-layers/body-${winnerAlien.skinColour}-${winnerAlien.skinTexture}.png`}
          />
          <img
            className="alien-eyes"
            src={`assets/alien-layers/eyes-${winnerAlien.eyeColour}-${winnerAlien.eyes}.png`}
          />
          <img
            className="alien-mouth"
            src={`assets/alien-layers/mouth-${
              winnerAlien.isFriendly ? "friendly" : "unfriendly-a"
            }.png`}
          />
          {winnerAlien.horns ? (
            <img
              className="alien-horns"
              src={`assets/alien-layers/horns-${winnerAlien.horns}.png`}
            />
          ) : null}
          {winnerAlien.hasAntenna ? (
            <img
              className="alien-antenna"
              src={"assets/alien-layers/antenna.png"}
            />
          ) : null}
        </div>
        <div></div>

        <button
          onClick={(e) => {
            handlePlayAgain(e);
          }}
        >
          Play again
        </button>
        <br />
        {/* <Link href='/singleplayerdisplay' >Play again</Link> */}

        <button
          onClick={(e) => {
            handleHome(e);
          }}
        >
          Home
        </button>
      </div>
    </div>
  );
}
