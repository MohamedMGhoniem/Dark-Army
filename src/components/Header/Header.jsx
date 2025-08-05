import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useRef, useState } from 'react';

function Header() {
  const [toggleList, setToggleList] = useState(false);

  const navbarRef = useRef(null);

  const handleToggleList = function () {
    navbarRef.current.classList.toggle(`${styles.toggled}`);
    setToggleList(cur => !cur);
  };

  return (
    <header className={`${styles.header}`}>
      <Link to={'/'} className="link">
        <img src="./logo.png" alt="Dark Army company logo" />
      </Link>

      <nav className={styles.navbar} ref={navbarRef}>
        <ul class={`${styles.navbarList} list`}>
          <li class="nav-item">
            <Link class="nav-link link">
              text 1 <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link link">text 2</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link link">text 3</Link>
          </li>
        </ul>
        <div className={`${styles.authControls}`}>
          <button className="btn btn-secondary">Log in</button>
          <button className="btn btn-primary">Sign up</button>
        </div>
      </nav>

      <button className={styles.toggleListBtn} onClick={handleToggleList}>
        {toggleList ? (
          <svg className="icon">
            <use href="/svg.svg#icon-close" />
          </svg>
        ) : (
          <svg className="icon">
            <use href="/svg.svg#icon-list" />
          </svg>
        )}
      </button>
    </header>
  );
}

export default Header;
