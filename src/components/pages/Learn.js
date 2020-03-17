import React from "react";
import './App.css';

function Learn() {
  return (
    <div className="App">
    <p>Contact Me</p>
    <div>
    <form action="/action_page.php">
     
    <label>Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />


    <label>Email</label>
    <input type="email" id="email" name="email" placeholder="Your email" />


    <label>Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
    <input type="submit" value="Submit" />
    </form>
    </div>
    </div>
  );
}

export default Learn;
