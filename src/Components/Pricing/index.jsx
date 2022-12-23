import React from "react";
import styles from "./index.module.css";
import CountUp from "react-countup";
import Dollar from "./img/dollar-sign.png";

function Pricing() {
   return(
    <div>
        <section id="Pricing"></section>
        <div className={styles.container}>
           <h1 className={styles.mainTittle}>Choose Your Plan</h1>
            <p className={styles.text}>
                Natus totam voluptatibus animi aspernatur ducimus
                quas obcaecati mollitia <br/> quibusdam temporibus culpa 
                dolore molestias blanditiis consequuntur sunt nisi.
            </p> 
        </div>

        <div className={styles.pricingBox1}>
          <h1 className={styles.tittles}>Starters</h1>
          <p className={styles.context1}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p className={styles.pricing}>Starting at</p>
          <img src={Dollar} className={styles.dollarImg} />
          <CountUp start={0} end={7} enableScrollSpy className={styles.CountUp} scrollSpyOnce />
          <p className={styles.pricing}>Per month</p>
          <p  className={styles.context1}>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum enim nobis aspernatur saepe dolores?
          </p>
          <button className={styles.button1}>Get started</button>
        </div>
        <div className={styles.pricingBox2}>
          <h1 className={styles.tittles}>Premium</h1>
          <p className={styles.context2}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p className={styles.pricing}>Starting at</p>
          <img src={Dollar} className={styles.dollarImg} />
          <CountUp start={0} end={75} enableScrollSpy className={styles.CountUp} scrollSpyOnce />
          <p className={styles.pricing}>Per month</p>
          <p className={styles.context2}>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum enim nobis aspernatur saepe dolores?
          </p>
          <button className={styles.button2}>Get started</button>
        </div>
        <div className={styles.pricingBox3}>
          <h1 className={styles.tittles}>Enterprise</h1>
          <p className={styles.context3}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p className={styles.pricing1}>Starting at</p>
          <img src={Dollar} className={styles.dollarImg} />
          <CountUp start={0} end={390} enableScrollSpy className={styles.CountUp2} scrollSpyOnce />
          <p className={styles.pricing1}>Per month</p>
          <p className={styles.context3}>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum enim nobis aspernatur saepe dolores?
          </p>
          <button className={styles.button3}>Get started</button>
        </div>
        <div className={styles.video}>
           <iframe src="https://player.vimeo.com/video/325355987?h=361c16f463" width="940" height="660" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
       
    </div>
   );
};

export default Pricing;