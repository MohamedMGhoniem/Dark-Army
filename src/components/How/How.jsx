import { useObserver } from '../../helpers/helper';
import Decoration from './Decoration';
import './How.css';

function How() {
  const elementRef = useObserver(0.1);

  return (
    <section className="section-how" ref={elementRef}>
      <img
        className="bg-decoration"
        src="./decorations/wave.png"
        aria-hidden="true"
      />
      <div className="how-container">
        <Decoration />
      </div>
    </section>
  );
}

export default How;
