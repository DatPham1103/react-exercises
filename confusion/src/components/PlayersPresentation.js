import React from "react";
import { useState } from "react";
export default function PlayersPresentation({ players }) {
  const [player, setPlayer] = useState([]);
  //console.log(players);
  return (
    <div className="container">
      {players.map((player) => (
        <div className="column">
          <div className="card">
            <img src={player.img} />
            <h3>{player.name}</h3>
            <p className="title">{player.club}</p>
            <p>
              <div className="detail">
                <a href="#popup1" id="openPopUp">
                  <button
                    onClick={() => {
                      setPlayer(player);
                    }}
                  >
                    <a href='#popup1' id='openPopUp' style={{color:"white",textDecoration:"none"}}>Detail</a>
                  </button>
                </a>
              </div>
            </p>
          </div>
        </div>
      ))}
      <div id="popup1" className="overlay">
        <div className="popup">
          <img src={player.img} alt="#" />
          <h2>{player.name}</h2>
          <a className="close" href="#">
            &times;
          </a>
          <div className="content">{player.info}</div>
        </div>
      </div>
    </div>
  );
}
