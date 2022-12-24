import React from "react";
import styles from "./index.module.css";
import VertorPng from "./img/vector.png";
import CountUp from "react-countup";
import Return from "./img/return.png";
import Download from "./img/download.png";
import Monitor from "./img/monitor.png";
import Conversation from "./img/conversation.png";

function Paragraph() {
  return(
    <div>
      <div className={styles.container}>
        <div className={styles.gridBody}>
          <div className={styles.gridItem1}>
            <h1 className={styles.h1}>Love our works</h1>
              <p className={styles.text2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur
                ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias 
                blanditiis consequuntur sunt nisi.
              </p>
              <p className={styles.text2}>
                Aperiam neque id, illum laudantium autem vero quae debitis tempora modi. 
                Ipsa molestias enim in rem et incidunt beatae fugit, ab quam optio atque maiores 
                facere est quidem, veritatis commodi.
              </p>
              <ul className={styles.list}>
                <li className={styles.li}>Aperiam neque id illum laudantium</li>
                <li className={styles.li}>Maiores facere est quidem</li>
                <li className={styles.li}>Laudantium autem vero</li>
              </ul>
              </div>
              <div className={styles.gridItem2}>
               <img src="https://preview.colorlib.com/theme/expert/images/img_1.jpg" className={styles.copterImg}></img>
              </div>
        </div>
      </div>

      <div className={styles.box}> 
          <img className={styles.vectorImg} src={VertorPng}></img>
          <p className={styles.text3}>Pixel Perfect Templates</p>
          <p className={styles.p1}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati commodi aspernatur eum eius inventore facilis.</p>
          <p className={styles.p2}>Visit <a className={styles.visitLink}>Colorlib</a></p>
      </div> 
      
      <div className={styles.boxImg}>
        <div className={styles.item1}>
          <img src={Return} className={styles.img} />
          <CountUp start={0} end={360} enableScrollSpy className={styles.CountUp} scrollSpyOnce />
          <p className={styles.counterText}>Creativity</p>
        </div>
        <div className={styles.item1}>
          <img src={Download} className={styles.img2} />
          <CountUp start={0} end={4500} enableScrollSpy className={styles.CountUp} scrollSpyOnce />
          <p className={styles.counterText2}>WordPress Themes</p>
        </div>
        <div className={styles.item1}>
          <img src={Monitor} className={styles.img2} />
          <CountUp start={0} end={120} enableScrollSpy className={styles.CountUp} scrollSpyOnce />
          <p className={styles.counterText3}>HTML5 / CSS3</p>
        </div>
        <div className={styles.item1}>
          <img src={Conversation} className={styles.img2} />
          <CountUp start={0} end={3913} enableScrollSpy className={styles.CountUp} scrollSpyOnce />
          <p className={styles.counterText4}>Bootstrap</p>
        </div>

      </div>
     
    </div>
  );
}

export default Paragraph;