import React from "react";
import styles from "./Card.module.css";

function Card(props) {
    return (
        <div className={styles.element}>
            <div className={styles.content}>
                <div className={styles.circle}>
                    <img src={Download} className={styles.img} />
                </div>
                <h1 className={styles.iconTittle}></h1>
                <p className={styles.iconContext}>
                    Natus totam voluptatibus animi aspernatur ducimus quas obcaecati
                    mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.
                </p>
            </div>
        </div>
    );
}

export default Card;