import React from 'react';

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({title, subtitle}) => {
  return (
    <div className="article-header">
      <div className="pagetitle component">
        <div className="component-content">
          <h1 className="hero-headline">{title}</h1>
        </div>
      </div>
      {Boolean(subtitle) && (
        <div className="article-subhead component">
          <div className="component-content">{subtitle}</div>
        </div>
      )}
    </div>
  );
};

export default Header;
