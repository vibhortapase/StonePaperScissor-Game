import { useState } from "react";
import Rules from "./Rules";
import Popup from 'reactjs-popup';
import Home from "./Home";
import Result from "./Result";

const App = () => {
  const [score, setScore] = useState(0);
  const [result, setResult] = useState({
    player: 0,
    opponent: 0,
    remark: "",
    showResult: false,
  });

  const handleGameResult = (newResult) => {
    setResult(newResult);
    // setResult((prev) => ({ ...prev, showResult: true }));
  };

  const resetGame = () => {
    setResult({
      player: 0,
      opponent: 0,
      remark: "",
      showResult: false,
    });
  };

  return (
    <div className="game-container">
      {result.showResult ? (
        <Result
          score={score}
          our={result.player}
          computer={result.opponent}
          resultShow={result.remark}
          onPlayAgain={resetGame}
        />
      ) : (
        <Home
          score={score}
          setScore={setScore}
          onGameResult={handleGameResult}
        />
      )}
      
    </div>
  );
};

export default App;
