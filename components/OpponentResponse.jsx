import { useContext, useEffect, useRef } from "react";
import { UserContext } from "@/contexts/User";

export const OpponentResponse = ({ answer, hasWon }) => {
  const { userOne, setUserOne } = useContext(UserContext);
  const positiveResponse = [
    "Yes!",
    "How did you know?",
    "You're right!",
    "Correct!",
  ];
  const negativeResponse = ["Nope!", "No they don't", "False", "Wrong"];
  const responseDiv = useRef();

  useEffect(() => {
    if (answer === null) {
      responseDiv.current.className = "response-div";
    } else {
      responseDiv.current.className = "response-div-show";
    }

    if (hasWon !== null) {
      responseDiv.current.className = "response-div-show";
    }
  }, [answer, hasWon]);

  return (
    <div className="opponent-response">
      <div className="response-div" ref={responseDiv}>
        <img src="./assets/speech-bubble-w.png" className="w-40" />
        <div className="response-text">
          {/* {answer === null && <p>Welcome {`${userOne}`}</p>} */}
          {hasWon ? <p>You Won!</p> : <p>Incorrect!</p>}
          {answer && (
            <p>
              {
                positiveResponse[
                  Math.floor(Math.random() * positiveResponse.length)
                ]
              }
            </p>
          )}

          {answer !== null && !answer && (
            <p>
              {
                negativeResponse[
                  Math.floor(Math.random() * negativeResponse.length)
                ]
              }
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
