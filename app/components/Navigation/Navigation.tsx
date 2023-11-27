import './Navigation.css';
import NavigationMenu from './NavigationMenu';
import NavigationBrand from './NavigationBrand';
import React, {Fragment} from 'react';
import NavigationMenuMobileContent from './NavigationMenuMobileContent';
const Navigation: React.FC = () => {
  const handleInputMenuStateChange = () => {
    document.body.classList.toggle('noscroll');
  };

  return (
    <Fragment>
      <input
        onChange={handleInputMenuStateChange}
        type="checkbox"
        id="app-nav-menustate"
        className="app-nav-menustate"
      />
      <nav id="app-nav" className="app-nav">
        <div className="app-nav-wrapper">
          <div className="app-nav-background"></div>
          <div className="app-nav-content">
            <NavigationBrand />
            <NavigationMenu />
          </div>
        </div>
      </nav>
      <NavigationMenuMobileContent />
    </Fragment>
  );
};
export default React.memo(Navigation);
