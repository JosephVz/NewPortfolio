import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container} id="projects">
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
        <a target="_blank" href="https://josephvz.github.io/The-Movie-Tracker/">https://josephvz.github.io/The-Movie-Tracker/</a>
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
         <a target="_blank" href="https://project2gourmetguidance-420dba142b67.herokuapp.com/">https://project2gourmetguidance-420dba142b67.herokuapp.com/</a>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Old Portfolio</h3>
              <p>
                This module was the second ever assignment we had to do. This is the first version of the portfolio i've created.
              </p>
              <img
          src={getImageUrl("projects/project5.png")}
          alt="Me"
          className={styles.aboutImage}
          href="https://josephvz.github.io/Module-2-Portfolio/"
        />
        <a target="_blank" href="https://josephvz.github.io/Module-2-Portfolio/">https://josephvz.github.io/Module-2-Portfolio/</a>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Password Generator</h3>
              <p>
                This is the third project we worked on which is a password generator, however my linked application shows open broken now.
              </p>
              <img
          src={getImageUrl("projects/project6.PNG")}
          alt="Me"
          className={styles.aboutImage}
        />
        <a target="_blank" href="https://josephvz.github.io/Module-3-Password-Generator-Project/">https://josephvz.github.io/Module-3-Password-Generator-Project/</a>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Weather Dashboard</h3>
              <p>
              This module had us build a web app that used a weather api to search up the local temperature in your area for that day.
              </p>
              <img
          src={getImageUrl("projects/project4.png")}
          alt="Me"
          className={styles.aboutImage}
        />
          <a target="_blank" href="https://josephvz.github.io/Weather-Dashboard/">https://josephvz.github.io/Weather-Dashboard/</a>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Note Taking App</h3>
              <p>
                 This app updates its color based on the hour of the day and allowed you to store notes of what to do for the day.
              </p>
              <img
          src={getImageUrl("projects/project3.png")}
          alt="Me"
          className={styles.aboutImage}
        />
        <a target="_blank" href="https://josephvz.github.io/Creating-a-daily-planner/">https://josephvz.github.io/Creating-a-daily-planner/</a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};