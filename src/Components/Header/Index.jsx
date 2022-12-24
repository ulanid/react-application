import React from "react";
import styles from "./index.module.css";

function Header() {
    return(
     <div>
        <div className={styles.navbar}>
          <div className={styles.menu}>
            <ul className={styles.ul}>

               <li><a className={styles.siteLogo}>Expert</a></li>
               <li className={styles.li}><a className={styles.a} href="#Home">Home</a></li>
               <li className={styles.li}><a className={styles.a} href="#Projects">Projects</a></li>
               <li className={styles.li}><a className={styles.a} href="#Process">Process</a></li>
               <li className={styles.li}><a className={styles.a} href="#Testimonials">Testimonials</a></li>
               <li className={styles.li}><a className={styles.a} href="#Services">Services</a></li>
               <li className={styles.li2}><a className={styles.a} href="#Pricing">Pricing</a></li>  
               <li className={styles.li3}><button className={styles.button}>
               <a className={styles.a2} href="#Contact">Contact</a></button> </li> 
            </ul>
          </div>
        </div>
     </div>
    );
}

export default Header;