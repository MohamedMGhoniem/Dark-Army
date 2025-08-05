import { useEffect, useRef } from 'react';
import Decoration from './decoration';
import styles from './Hero.module.css';

function Hero() {
  const bgDecorationRef = useRef(null);

  useEffect(() => {
    const mouseMoveHandler = e => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;

      bgDecorationRef.current.style.transform = `translate(${x * 4 * 20}px, ${
        y * 4 * 20
      }px)`;
    };

    document.addEventListener('mousemove', mouseMoveHandler);

    return () => document.removeEventListener('mousemove', mouseMoveHandler);
  }, []);

  return (
    <section className={styles.heroSection}>
      <img
        ref={bgDecorationRef}
        className="bg-decoration"
        src="./decorations/icons.png"
        aria-hidden="true"
      />
      <div className="container">
        <h1>Welcome to the New Era of Cybersecurity</h1>
        <span className="subheading">
          Connect with elite bug hunters and secure your platform — powered by
          the wisdom of ancient Egypt.
        </span>
        <Decoration />
      </div>
      <div
        className={`${styles.blob} bg-decoration`}
        aria-hidden="true"
        role="img"
      ></div>
      <div
        className={`${styles.circles} bg-decoration circles`}
        aria-hidden="true"
        role="img"
      ></div>
    </section>
  );
}

export default Hero;
