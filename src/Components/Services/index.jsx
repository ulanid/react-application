import React from "react";
import SunGlasses from "./img/sun-glasses.png";
import Download from "./img/download.png";
import Monitor from "./img/monitor.png";
import Refresh from "./img/refresh.png";
import Message from "./img/message.png";
import Box from "./img/box.png";
import Card from "./Card";
import styles from "./index.module.css";

function Services() {
  return (
    <div className={styles.body}>
      <section id="Services"></section>
      <div className={styles.container}>
        <h1 className={styles.tittle}>Services</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Rem possimus distinctio ex. Natus totam voluptatibus animi
          aspernatur ducimus quas obcaecati mollitia quibusdam temporibus
          culpa dolore molestias blanditiis consequuntur sunt nisi.
        </p>
      </div>
      <div className={styles.slider}>
        <div className={styles.elements}>
          <div className={styles.element}>
            <div className={styles.content}>
              <div className={styles.circle}>
                <img src={SunGlasses} className={styles.img} />
              </div>
              <h1 className={styles.iconTittle}>Web Templates</h1>
              <p className={styles.iconContext}>
                Natus totam voluptatibus animi aspernatur ducimus quas obcaecati
                mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.
              </p>
            </div>
          </div>
          <div className={styles.element}>
            <div className={styles.content}>
              <div className={styles.circle}>
                <img src={Message} className={styles.img} />
              </div>
              <h1 className={styles.iconTittle}>HTML5/CSS</h1>
              <p className={styles.iconContext}>
                Natus totam voluptatibus animi aspernatur ducimus quas
                obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.
              </p>
            </div>
          </div>
          <div className={styles.element}>
            <div className={styles.content}>
              <div className={styles.circle}>
                
              </div>
              <h1 className={styles.iconTittle}>WordPress</h1>
              <p className={styles.iconContext}>
                Natus totam voluptatibus animi aspernatur ducimus quas obcaecati
                mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.
              </p>
            </div>
          </div>

          <div className={styles.element}>
            <div className={styles.content}>
              <div className={styles.circle}>
                <img src={Box} className={styles.img} />
              </div>
              <h1 className={styles.iconTittle}>Web Dvelopment</h1>
              <p className={styles.iconContext}>
                Natus totam voluptatibus animi aspernatur ducimus quas obcaecati
                mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.
              </p>
            </div>
          </div>
          <div className={styles.element}>
            <div className={styles.content}>
              <div className={styles.circle}>
                <img src={Monitor} className={styles.img} />
              </div>
              <h1 className={styles.iconTittle}>Creative Design</h1>
              <p className={styles.iconContext}>
                Natus totam voluptatibus animi aspernatur ducimus quas
                obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.
              </p>
            </div>
          </div>
          <div className={styles.element}>
            <div className={styles.content}>
              <div className={styles.circle}>
                <img src={Refresh} className={styles.img} />
              </div>
              <h1 className={styles.iconTittle}>Branding Design</h1>
              <p className={styles.iconContext}>
                Natus totam voluptatibus animi aspernatur ducimus quas
                obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
};

export default Services;