import {Fragment, ReactNode} from 'react';
import Navbar from '../Navbar';

interface LayoutProps {
  children?: ReactNode;
  sectionClassName?: string;
}

function Layout({children, sectionClassName = ''}: LayoutProps) {
  return (
    <Fragment>
      <Navbar />
      <main>
        <section className={`section app-mainsection ${sectionClassName}`}>
          <div className="section-content">{children}</div>
        </section>
      </main>
      <footer />
    </Fragment>
  );
}

export default Layout;
