import Start from "./Components/Start";
import Game from "./Components/Game";
import Finished from "./Components/Finished";

function App() {
  return (
    <div>
      <h1>TicTacToe</h1>
      <Game />
      <Start />
      <Finished />
    </div>
  );
}

export default App;
