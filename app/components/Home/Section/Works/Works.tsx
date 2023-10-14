const Works: React.FC = () => {
  return (
    <div
      className="width-full display-flex justify-content-center align-items-center"
      style={{height: '100%'}}
    >
      <picture>
        <source
          media="(max-width: 734px)"
          srcSet="https://cdn.shopify.com/s/files/1/0770/5690/1456/files/works-small-theme-light.png?v=1697285147"
        />
        <source
          media="(min-width: 735px)"
          srcSet="https://cdn.shopify.com/s/files/1/0770/5690/1456/files/works-large-theme-ligth.png?v=1697284907"
        />
        <img
          className="width-full"
          style={{objectFit: 'contain'}}
          alt="built"
          loading="lazy"
          src="https://cdn.shopify.com/s/files/1/0770/5690/1456/files/works-large-theme-ligth.png?v=1697284907"
        />
      </picture>
    </div>
  );
};

export default Works;
