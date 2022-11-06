import React from 'react';
import styles from './projects.module.css';
import livingroom from './../../../assets/images/png/Livingroom.png';
import workspace from './../../../assets/images/png/Workspace.png';
import library from './../../../assets/images/png/Library.png';

function Projects() {
  return (
    <>
      <section className={styles.projects}>
        <div className="wrapper">
          <div className={styles.projectsHeader}>
            <h2 className="title">Our project</h2>
            <p className={`description ${styles.projectsHeaderTitle}`}>
              Introducing our first official project
            </p>
          </div>
          <ul className={styles.projectsContainer}>
            <li className={styles.projectsItem}>
              <a href="!#" className={styles.projectsLink}>
                <h3 className={styles.projectsTitle}>Project Livingroom</h3>
                <p className={styles.projectsDescription}>
                  A simple guide to create the perfect livingroom for. Night
                  Watc works beautifully in a wide gamut of arrangements.
                </p>
                <img
                  className={styles.projectsImage}
                  src={livingroom}
                  alt="livingroom"
                />
              </a>
            </li>
            <li className={styles.projectsItem}>
              <a href="!#" className={styles.projectsLink}>
                <h3 className={styles.projectsTitle}>Project workspace</h3>
                <p className={styles.projectsDescription}>
                  A simple guide to create the perfect livingroom for. Night
                  Watc works beautifully in a wide gamut of arrangements.
                </p>
                <img
                  className={styles.projectsImage}
                  src={workspace}
                  alt="workspace"
                />
              </a>
            </li>
            <li className={styles.projectsItem}>
              <a href="!#" c>
                <h3 className={styles.projectsTitle}>Project Livingroom</h3>
                <p className={styles.projectsDescription}>
                  A simple guide to create the perfect livingroom for. Night
                  Watc works beautifully in a wide gamut of arrangements.
                </p>
                <img
                  className={styles.projectsImage}
                  src={library}
                  alt="library"
                />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Projects;
