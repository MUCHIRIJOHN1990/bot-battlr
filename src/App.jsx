import { useState } from "react";

import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

import "./App.css";

function App() {
  const [army, setArmy] = useState([]);

  function handleAdd(bot) {
    setArmy((army) => [...army, bot]);
  }

  return (
    <div className="container">
      <BotCollection onAdd={handleAdd} />
      <YourBotArmy army={army} />
    </div>
  );
}

export default App;
