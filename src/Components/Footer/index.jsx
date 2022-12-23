import React from "react";
import styles from "./index.module.css";

function Footer() {
    return(
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.item}>
                    <h1 className={styles.tittle}>about us</h1>
                    <p className={styles.text}> 
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Porro consectetur ut hic ipsum et veritatis corrupti. Itaque
                        eius soluta optio dolorum temporibus in, atque, quos fugit sunt sit quaerat dicta.
                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.tittle1}>Links</h1>
                    <ul className={styles.linksList}>
                        <li className={styles.list}><a className={styles.a} href="#Home">Home </a></li>
                        <li className={styles.list}><a className={styles.a} href="#Projects">Projects</a></li>
                        <li className={styles.list}><a className={styles.a} href="#Process">Process</a></li>
                        <li className={styles.list}><a className={styles.a} href="#Testimonials">Testimonials</a></li>
                        <li className={styles.list}><a className={styles.a} href="#Services"> Services</a></li>
                    </ul>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.tittle}>Contact us</h1>
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Nesciunt incidunt iure iusto architecto? Numquam, natus?
                    </p>
                    <div className={styles.form}>
                      <input  className={styles.input} type="email" name="email" placeholder="Email" />
                      <input className={styles.button} type="submit"  value="subscribe"/>
                    </div>
                </div>
            </div>
            <hr className={styles.underline} />
        </div>
    );
}

export default Footer;