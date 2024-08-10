import React from "react";
import Entery from "./Entery";
import emojipedia from "../emojipedia";

// const newemoji= emojipedia.map(function(emojiEntery){
//   return emojiEntery.meaning.substring(0,100)
// })
// console.log(newemoji)

var numbers = [5, 9, 25, 47, 30];
const newnumbers = numbers.map((x) => x * 2);
console.log(newnumbers);

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(emojiTerm => 
          <Entery
            key={emojiTerm.id}
            name={emojiTerm.name}
            emoji={emojiTerm.emoji}
            meaning={emojiTerm.meaning}
          />
        )}
      </dl>
    </div>
  );
}

export default App;
