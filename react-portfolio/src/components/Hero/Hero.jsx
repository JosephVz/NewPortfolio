import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Project 1</h3>
              <p>
                This is the first project i had worked on in this bootcamp.
                The project consists of a movie api which searches for your movie title and tells you details about it as well as a picture.
              </p>
              <img
          src={getImageUrl("projects/project.png")}
          alt="Me"
          className={styles.aboutImage}
        />
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Project 2</h3>
              <p>
                This is the second project i had worked on in this bootcamp.
                The project of a food app which has a functioning login and logout section which then logs you into a food api which searches up recipes.
              </p>
              <img
          src={getImageUrl("projects/Project2.png")}
          alt="Me"
          className={styles.aboutImage}
        />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};