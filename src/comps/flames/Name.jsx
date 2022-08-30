import React, { useState } from "react";
import Character from "./Character";

function Name({ clientName, cross }) {
  const nameArr = Array.from(clientName);
  
  return (
    <div className="m-4">
      {nameArr.map((ch, index) => (
        <Character key={ch + index} ch={ch} iscrossed = {cross.includes(ch)}/>
      ))}
    </div>
  );
}
export default Name;
