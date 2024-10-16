import "./Result.css";
import Rules from "./Rules";
import { FaHandRock, FaHandScissors } from "react-icons/fa";
import { IoHandRight } from "react-icons/io5";

const Result = ({ score, our, computer, resultShow, onPlayAgain }) => {
  const iconArray = [
    <FaHandRock className="icon" />,
    <FaHandScissors className="icon" />,
    <IoHandRight className="icon" />,
  ];

  return (
    <>
    <div className="container">
        <div className="header">
          <h1>
            Stone <br /> Paper <br /> Scissor
          </h1>
          <div className="scoreBox">
            <h2 style={{ color: "rgb(47, 64, 95)" }}>Score</h2>
            <h1>{score}</h1>
          </div>
        </div>
      <div className="resultBox">
        <div className="playerMove">
          <h2>You</h2>
          <div className="iconBox" style={{ borderColor: "" }}>
            {iconArray[our - 1]}
          </div>
        </div>
        <div className="playerMove">
          <h2>Opponent</h2>
          <div className="iconBox" style={{ borderColor: "lightgreen" }}>
            {iconArray[computer - 1]}
          </div>
        </div>

        <div className="result">
          <h1>{resultShow}</h1>
          <button type="button" className="playAgainBTN" onClick={onPlayAgain}>
            Play Again
          </button>
        </div>
      </div>
      <Rules />
      </div>
    </>
  );
};

export default Result;
