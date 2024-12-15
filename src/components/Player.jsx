import { useState } from "react";
export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setEditing] = useState(false);
  const onEdit = (symbol,playerName) => {
    setEditing((prev) => !prev);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
        <button onClick={() => onEdit(symbol,playerName)}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </span>
    </li>
  );
}
