// import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  // const [message, setMessage] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setMessage(true);
  // };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form action="https://getform.io/f/6642539c-7ee7-415f-8801-6c7d9fa2ff96" method="POST">
          <input type="text" name="email" placeholder="Email" />
          <input type="text" name="name" placeholder="Name" />
          <textarea name="message" placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {/* {message && <span>Thanks, I'll reply ASAP :)</span>} */}
        </form>
      </div>
    </div>
  );
}
