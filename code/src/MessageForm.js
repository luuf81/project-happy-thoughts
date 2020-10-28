import React, { useState } from "react";

export const MessageForm = (props) => {
  const [thoughts, setThoughts] = useState(props.messages);
  const [input, setInput] = useState("");  

  console.log(props.messages)
  console.log(thoughts)
  // of 'Hello world' like this example does):
  // // // Send the POST request with the input from your form (instead
  const handleFormSubmit = (event, input) => {
    event.preventDefault();  
    setThoughts([props.messages])
    console.log(thoughts)
    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts", {
      method: "POST",
      body: JSON.stringify({ message: input }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((newThought) => {
        console.log(newThought);
        // Now you have `newThought` which is the response from the
        // API as documented at the top of this readme. You can use
        // it to update the `thoughts` array:
        //setThoughts((previousThoughts) => [...previousThoughts, newThought]);
        //setThoughts([props.messages].concat(newThought));
        //console.log(thoughts)
        window.location.reload();
        //return (<MessageList messages={thoughts} />)
      });
  }

  return (
    <div className="form-container">
      
      <form className="input-form"
        onSubmit={(e) => {
          handleFormSubmit(e, input);
        }}
      >
        <label>What's making you happy right now?</label>
        <textarea
          rows={5}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
        <button className="form-button" type="submit">❤️ &nbsp; Send Happy Thought  &nbsp;❤️</button>
      </form>
    </div>
  );
};