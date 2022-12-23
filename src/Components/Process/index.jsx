import React from "react";
import styles from "./index.module.css";
import Eyeglasses from "./img/eyeglasses.png";
import Vector from "./img/vector.png";
import Monitor from "./img/monitor.png";

function Paragraph3() {
    return(
        <div className={styles.body}>
            <section id="Process"></section>
            <div className={styles.container}>
            <h1 className={styles.tittle}>Our Approach</h1>
            <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio 
               ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia 
               quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.
            </p>
            </div>
            <table cellSpacing={30}>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.box}>
                            <img className={styles.images} src={Eyeglasses}></img>
                            <h2 className={styles.tittles}>Data Gathering</h2>
                            <p className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                             Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati 
                             mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.
                            </p>
                            </div>
                        </td>

                        <td>
                        <div className={styles.box}>
                            <img className={styles.images} src={Vector}></img>
                            <h2 className={styles.tittles}>Implementation</h2>
                            <p className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                             Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati 
                             mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.
                            </p>
                            </div>
                        </td>

                        <td>
                        <div className={styles.box}>
                        <img className={styles.images} src={Monitor}></img>
                            <h2 className={styles.tittles}>launch</h2>
                            <p className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                             Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati 
                             mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.
                            </p>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
      
      
    )
};

export default Paragraph3;
