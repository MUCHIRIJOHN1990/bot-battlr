import { useState, useEffect } from "react";

function BotCollection({ onAdd }) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  function handleClick(bot) {
    onAdd(bot);
  }

  return (
    <div>
      <p>Bot Collection</p>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>health</th>
            <th>damage</th>
            <th>armor</th>
            <th>bot_class</th>
            <th>catchphrase</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {bots.map((bot) => (
            <tr key={bot.id} onClick={() => handleClick(bot)}>
              <td>{bot.id}</td>
              <td>{bot.name}</td>
              <td>{bot.health}</td>
              <td>{bot.damage}</td>
              <td>{bot.armor}</td>
              <td>{bot.bot_class}</td>
              <td>{bot.catchphrase}</td>
              <td>
                <img src={bot.avatar_url} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BotCollection;
