import Decoration from './Decoration';
import styles from './How.module.css';

function How() {
  return (
    <section className={styles.sectionHow}>
      <img
        className="bg-decoration"
        src="./decorations/icons.png"
        aria-hidden="true"
      />
      <div className={`${styles.howContainer}  `}>
        <Decoration />
      </div>
    </section>
  );
}

export default How;
