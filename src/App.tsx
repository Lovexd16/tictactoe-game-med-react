import Start from "./Components/Start";
import Game from "./Components/Game";
import Finished from "./Components/Finished";
import useTicTacToe from "./useTicTacToe";

function App() {
  const game = useTicTacToe();

  return (
    <div>
      <h1>TicTacToe</h1>

      {game.gameStatus === "started" && (
        <Game board={game.board} handleClick={game.handleClick} />
      )}
      {game.gameStatus === "created" && (
        <Start handleStart={game.handleStart} />
      )}
      {game.gameStatus === "finnished" && (
        <Finished handleRestart={game.handleRestart} name={game.winner} />
      )}
    </div>
  );
}

export default App;
