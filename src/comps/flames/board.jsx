import React, { useState } from "react";
import Name from "./Name";

const boardstyle = {
  width: "600px",
  margin: "0 auto",
  display: "grid",
};

function Board({ clientName, soulmateName, common }) {

  return (
    <div style={boardstyle}>
          <Name clientName={clientName} cross={common} />
          <Name clientName={soulmateName} cross={common} />
    </div>
  );
}

export default Board;
