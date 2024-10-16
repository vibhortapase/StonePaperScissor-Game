import "./Home.css";
import Rules from "./Rules";

import { FaHandRock, FaHandScissors } from "react-icons/fa";
import { IoHandRight } from "react-icons/io5";

const Home = ({ score, setScore, onGameResult }) => {
  function getRandomNumber() {
    return Math.floor(Math.random() * 3) + 1;
  }

  function getValue(i) {
    var randomValue = getRandomNumber();
    console.log(i);
    console.log(randomValue);
    checkRule(i, randomValue);
  }

  function checkRule(value, randomValue) {
    let remark = "";
    if (value == 1 && randomValue == 3) {
      setScore(score - 1);
      remark = "Loose";
    } else if (value == 3 && randomValue == 1) {
      setScore(score + 1);
      remark = "Win";
    } else if (value < randomValue) {
      setScore(score + 1);
      remark = "Win";
    } else if (value === randomValue) {
      remark = "Tied";
    } else {
      setScore(score - 1);
      remark = "Loose";
    }
    console.log(remark);

    onGameResult({
      player: value,
      opponent: randomValue,
      remark: remark,
      showResult: true,
    });
  }

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
        <div className="iconContainer">
          <div className="icon-box" style={{ borderColor: "blue" }}>
            <FaHandRock className="icon" onClick={() => getValue(1)} />
          </div>
          <div className="icon-box" style={{ borderColor: "red" }}>
            <FaHandScissors className="icon" onClick={() => getValue(2)} />
          </div>
          <div className="icon-box" style={{ borderColor: "yellow" }}>
            <IoHandRight className="icon" onClick={() => getValue(3)} />
          </div>
        </div>
        <Rules />
      </div>
    </>
  );
};

export default Home;
