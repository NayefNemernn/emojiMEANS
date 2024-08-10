import React from "react";
import Entery from "./Entery";
import emojipedia from "../emojipedia";


function createEntery(emojiTerm){
  return <Entery 
  key = {emojiTerm.id}
  name = {emojiTerm.name} 
  emoji = {emojiTerm.emoji}
  meaning = {emojiTerm.meaning}

/>
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createEntery)}
      </dl>
    </div>
  );
}

export default App;
