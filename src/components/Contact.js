import React from "react";

export default function Contact() {
  return (
    <>
      <main>
        <h2>Hit me up!</h2>
        <form>
          <label for="name">Name</label>
          <input type="text" id="name"></input>
          <label for="name">Email</label>
          <input type="text" id="name"></input>
          <label for="name">Message</label>
          <textarea type="textarea" id="name"></textarea>
          <button type="button">Submit</button>
        </form>
      </main>
    </>
  );
}
