import React, { useState } from "react";

export default function Contact() {
  const [isValid, setValid] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const resetState = () => {
    setValid(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  const nameChange = (e) => {
    setName(e.target.value);
  };
  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const messageChange = (e) => {
    setMessage(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };
    const sendData = async (data) => {
      console.log(data);
    };
    if (
      !name ||
      !message ||
      !email ||
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false
    ) {
      setValid(false);
    } else {
      sendData(data);
      resetState();
    }
  };

  return (
    <>
      <main className="contact-form">
        <h2>Hit me up!</h2>
        <form onSubmit={onFormSubmit} className="contactEl">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={nameChange}
            type="text"
            name="name"
          ></input>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={emailChange}
            type="text"
            name="email"
          ></input>
          <label htmlFor="message">Message</label>
          <textarea
            value={message}
            onChange={messageChange}
            type="textarea"
            name="message"
          ></textarea>
          <br></br>
          <button className="submit" type="submit">
            Submit
          </button>
          <br></br>
          {!isValid && (
            <div className="alert alert-dark" role="alert">
              Please make sure all fields have been filled out
            </div>
          )}
        </form>
      </main>
    </>
  );
}
