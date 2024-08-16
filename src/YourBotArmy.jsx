function YourBotArmy({ army }) {
  return (
    <div>
      <p>Bot Army</p>
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
          {army.map((bot) => (
            <tr key={bot.id}>
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

export default YourBotArmy;
