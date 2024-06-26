import { useEffect, useState, useRef } from "react";
import styles from "./About.module.css";

const About = () => {
  const aboutSectionRef = useRef(null);
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
        console.log(isInViewport);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const aboutSection = aboutSectionRef.current;
    if (aboutSection) {
      observer.observe(aboutSection);
    }
  }, [isInViewport]);

  return (
    <div
      className={`${styles.aboutSection} main-bg mx-auto py-5`}
      id="aboutSection"
      ref={aboutSectionRef}
    >
      <div className="container">
        <h2 className="text-center py-3 h-1">About Me</h2>
        <div className="row py-3">
          <div className="col-md-6 text-center align-self-center position-relative">
            {isInViewport ? (
              <div className={styles.leftContainer}>
                <h2>Overview</h2>
                <p>
                  A graduated dentist who decided to shift his career following
                  his passion and obsession with computers through programming.
                  I started the learning process through online and onsite
                  courses to become a significant web developer.
                </p>
                <div className="align-item-center">
                  <h2>Education</h2>
                  <ul>
                    <li>Bachelor's Degree in Oral and Maxillofacial Surgery</li>
                    <li>Degree: Excellent</li>
                    <li>CGPA: 3.87</li>
                  </ul>
                </div>
              </div>
            ) : null}
          </div>
          <div className="col-md-6 text-center position-relative">
            {isInViewport ? (
              <div className={styles.rightContainer}>
                <h3>Web Development Courses</h3>
                <div>
                  <h4>Frontend Diploma by Route Academy</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="text-start">
                        <li>React</li>
                        <li>Next.js</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>jQuery</li>
                        <li>Redux</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="text-start">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Sass</li>
                        <li>Bootstrap</li>
                        <li>Git</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h4>Professional Frontend Web Development by Egyfwd</h4>
                  <ul className="text-start">
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                  </ul>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
