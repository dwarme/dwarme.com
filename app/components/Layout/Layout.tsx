import {Fragment, ReactNode} from 'react';
import Navigation from '../Navigation';

interface LayoutProps {
  children?: ReactNode;
  id?: string;
}

function ScrollablePage({children, id}: LayoutProps) {
  return (
    <Fragment>
      <Navigation />
      <main role="main" id={id}>
        <div className="content-container">{children}</div>
      </main>
    </Fragment>
  );
}

export default ScrollablePage;
