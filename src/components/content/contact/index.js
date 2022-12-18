import React from "react";
import './style.css'

function Contact () {
 return (<div className="contact">
  <div className="content_in_contact">

    <h1>Get in touch</h1>
    <br/>
    <p>
    Nullam id dolor id nibh ultricies vehicula ut id elit.<br/> 
    Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae elit libero, a pharetra augue. 
    Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. 
    Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit<br/>  amet risus.
    </p>
    <br/>
    <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. 
      Etiam porta sem malesuada magna mollis euismod. Aenean<br/>  eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
      </p>
      <form method="post" action="https://www.w3resource.com/html-css-exercise/basic/solution/input-required-answer-demo.php">
     <h3>Name</h3>
     <input type="text" placeholder="Enter your name" required></input>
     <h3>Email adress</h3>
     <input type="text" placeholder="Enter your email address" required></input>
     <h3>Message</h3>
     <textarea class="form-textarea" rows="5" placeholder="Message" required></textarea>
     
     <br/>
      <button>Submit</button>
      </form>
    </div>
  
 
 </div>);
}

export default Contact;