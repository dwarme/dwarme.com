import Header from './header';
import Text from './text';
import Gallery from './gallery';
import React from 'react';

interface BlogProps {
  children?: React.ReactNode;
}

const Blog: React.FC<BlogProps> & {
  Header: typeof Header;
  Gallery: typeof Gallery;
  Text: typeof Text;
} = ({children}) => {
  return (
    <section>
      <article>{children}</article>
    </section>
  );
};

Blog.Header = Header;
Blog.Gallery = Gallery;
Blog.Text = Text;
export default Blog;

/**
 * Example Usage:
 * 
 *       <Blog>
          <Blog.Header title="Blog title" subtitle="" />
          <Blog.Gallery device="mobile" images={images} />
          <Blog.Text text="Some text" />
        </Blog>
 */
