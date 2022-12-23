import React from "react";
import styles from "./index.module.css"

function Projects() {
    return (
        <div className={styles.Projects}>
            <section id="Projects"></section>
            <div className={styles.container}>
                <h1 className={styles.tittle}>Our Projects</h1>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem possimus distinctio ex. Natus totam voluptatibus animi
                    aspernatur ducimus quas obcaecati mollitia quibusdam temporibus
                    culpa dolore molestias blanditiis consequuntur sunt nisi.
                </p>
            </div>
            <div className={styles.slider}>
                <div className={styles.slides}>
                    <div className={styles.slide} id="slide1">
                        <a src="https://preview.colorlib.com/theme/expert/images/img_1.jpg.webp" className={styles.images}>
                            <div className={styles.wotkText}>
                                <h3>Project Name Here</h3>
                                <span className={styles.category}>Illustartion</span>
                            </div>
                        </a>
                    </div>
                    <div className={styles.slide} id="slide2">
                        <img src="https://preview.colorlib.com/theme/expert/images/img_2.jpg.webp" className={styles.images} />
                    </div>
                    <div className={styles.slide} id="slide3">
                        <img src="https://preview.colorlib.com/theme/expert/images/img_3.jpg.webp" className={styles.images} />
                    </div>
                    <div className={styles.slide} id="slide4">
                        <img src="https://preview.colorlib.com/theme/expert/images/img_4.jpg.webp" className={styles.images} />
                    </div>
                    <div className={styles.slide} id="slide1">
                        <img src="https://preview.colorlib.com/theme/expert/images/img_1.jpg.webp" className={styles.images} />
                    </div>
                    <div className={styles.slide} id="slide2">
                        <img src="https://preview.colorlib.com/theme/expert/images/img_2.jpg.webp" className={styles.images} />
                    </div>
                    <div className={styles.slide} id="slide3">
                        <img src="https://preview.colorlib.com/theme/expert/images/img_3.jpg.webp" className={styles.images} />
                    </div>
                    <div className={styles.slide} id="slide4">
                        <img src="https://preview.colorlib.com/theme/expert/images/img_4.jpg.webp" className={styles.images} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;