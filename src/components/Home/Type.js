import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Today a reader, tomorrow a leader. – Margaret Fuller",
          "Books are a uniquely portable magic. – Stephen King, On Writing: A Memoir of the Craft", 
          "I can feel infinitely alive curled up on the sofa reading a book. – Benedict Cumberbatch", 
          "Books and doors are the same thing. You open them, and you go through into another world. – Jeanette Winterson"
        ],
        autoStart: true,
        loop: true,
        speed:100,
        deleteSpeed: 50,
      }}
    />
  );
}
export default Type;
