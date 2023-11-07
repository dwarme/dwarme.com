const NavigationMenu: React.FC = () => {
  return (
    <div className="app-nav-menu">
      <div className="app-nav-menu__desktop">
        <ul className="app-nav-menu__items">
          <li className="app-nav-menu__item">
            <a className="app-nav-menu__link current" href={'/'}>
              About
            </a>
          </li>
          <li className="app-nav-menu__item">
            <a className="app-nav-menu__link" href={'/resume'}>
              Resume
            </a>
          </li>
        </ul>
      </div>
      <div className="app-nav-actions">
        <div className="app-nav-action app-nav-action-menucta">
          <label htmlFor="app-nav-menustate" className="app-nav-menucta">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="20"
              height="20"
              fill="#000"
            >
              <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z" />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
