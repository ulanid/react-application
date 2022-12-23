import React from "react";
import styles from "./index.module.css";

function Contact() {
    return(
        <div>
            <section id="Contact"></section>
            <div className={styles.container}>
              <div className={styles.item}>
                <div className={styles.contactBox}>
                    <h1 className={styles.tittle}>Contact us</h1>
                    <p className={styles.content}> 
                       Natus totam voluptatibus animi aspernatur ducimus quas <br/>
                       obcaecati mollitia quibusdam temporibus culpa dolore molestias <br/>
                       blanditiis consequuntur sunt nisi.
                    </p>
                    <div className={styles.form}>
                     <input className={styles.contactForm1} type="text" name="name" placeholder="First name" />
                     <input className={styles.contactForm2} type="text" name="name" placeholder="Last name" />
                     <input className={styles.input} type="text" placeholder="Subject" />
                     <input  className={styles.input} type="email" name="email" placeholder="Email" />
                     <textarea  className={styles.message} id="subject" name="subject" placeholder=" Write your message here."></textarea>
                    </div>
                    <div className={styles.button}>send message</div>
                </div>
            </div>
            <div className={styles.item}>
              <img src="https://preview.colorlib.com/theme/expert/images/about_1.jpg" className={styles.imgContact}></img>
            </div>               
        </div>
        </div>
    );
}

export default Contact;