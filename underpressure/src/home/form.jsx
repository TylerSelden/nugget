import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [vessel, setVessel] = useState('');
  const [player, setPlayer] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const nav = useNavigate();

  const checkValues = (evt) => {
    var _vessel = vessel.trim();
    var _player = player.trim();

    var isInvalid = (_vessel === "" || _player === "" || _player.length < 3 || _player.length > 12);
    setButtonDisabled(isInvalid);
    if (!isInvalid && evt.key === "Enter") begin();
  }

  const begin = () => {
    nav("/game", { state: {
      vessel,
      player
    }});
  }

  return (
    <div className="container mt-5 text-center">
      <h1>Welcome aboard!</h1>
      <br />
      <p>Please enter your game details below:</p>
      <br />

      <input
        type="text"
        className="form-control form-control-lg mb-3"
        placeholder="Vessel name"
        value={vessel}
        onChange={(evt) => setVessel(evt.target.value)}
        onKeyUp={checkValues}
      />
      <input
        type="text"
        className="form-control form-control-lg mb-3"
        placeholder="Player name"
        value={player}
        onChange={(evt) => setPlayer(evt.target.value)}
        onKeyUp={checkValues}
      />
      <br />
      <button
        class="btn btn-primary btn-lg btn-block mt-3"
        disabled={buttonDisabled}
        onClick={begin}
      >
        Join
      </button>
    </div>
  );
}

export default Form;
