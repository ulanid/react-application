import React from "react";
import reactPlayer from "react-player";
import styles from "./index.module.css";

function Testimonials() {
   return(
    <div>
        <section id="Testimonials"></section>
        <div className={styles.container}>
            <h1 className={styles.tittle}>Testimonials</h1>
            <p className={styles.text}>
                Natus totam voluptatibus animi aspernatur ducimus
                quas <br/> obcaecati mollitia quibusdam temporibus culpa
                dolore molestias blanditiis consequuntur sunt nisi.
            </p>
        </div>
    </div>
   );
}

export default Testimonials;