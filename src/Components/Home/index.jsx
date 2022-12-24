import React from "react";
import styles from "./index.module.css";
import leftArrow from "./img/left-arrow.png";
import rightArrow from "./img/right-arrow.png";

function Home() { 
  return (
    <div className={styles.homeSection}>
      <section id="Home" />
      <div className={styles.carousel}>
        <div className={styles.slider1}>
          <div className={styles.slides}>
            <div id="slide-1">
              <p className={styles.tittle}>Welcome</p>
              <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.
              </p>
              <p>
                <button className={styles.button}>Get Started</button>
              </p>
            </div>

            <div id="slide-2">
              <p className={styles.tittle}>High Quality Website Templates</p>
              <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.
              </p>
              <p>
                <button className={styles.button}>Get Started</button>
              </p>
            </div>

            <div id="slide-3">
              <p className={styles.tittle}>We do things right.</p>
              <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.
              </p>
              <p>
                <button className={styles.button}>Get Started</button>
              </p>
            </div>

            <div id="slide-4">
              <p className={styles.tittle}>We do awesome things</p>
              <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.
              </p>
              <p>
                <button className={styles.button}>Get Started</button>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.slider2}>
          <div className={styles.slides2}>
            <div id="slide-1">
              <img className={styles.img} src="https://preview.colorlib.com/theme/expert/images/img_1.jpg.webp"></img>
            </div>

            <div id="slide-2">
              <img className={styles.img} src="https://preview.colorlib.com/theme/expert/images/img_2.jpg.webp"></img>
            </div>

            <div id="slide-3">
              <img className={styles.img} src="https://preview.colorlib.com/theme/expert/images/img_3.jpg.webp"></img>
            </div>

            <div id="slide-4">
              <img className={styles.img} src="https://preview.colorlib.com/theme/expert/images/img_4.jpg.webp"></img>
            </div>
          </div>

          <div className={styles.buttonContainer}>
            <button className={styles.sliderButton}><img className={styles.arrow} src={leftArrow} /></button>
            <button className={styles.sliderButton}><img className={styles.arrow} src={rightArrow} /></button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;