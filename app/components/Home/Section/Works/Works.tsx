const Works: React.FC = () => {
  return (
    <div
      className="width-full display-flex justify-content-center"
      style={{height: '100%'}}
    >
      <picture>
        <source
          media="(max-width: 734px)"
          srcSet="https://cdn.shopify.com/s/files/1/0770/5690/1456/files/built-small-theme-light.png?v=1697281784"
        />
        <source
          media="(min-width: 735px)"
          srcSet="https://cdn.shopify.com/s/files/1/0770/5690/1456/files/built-large-theme-ligth.png?v=1697282133"
        />
        <img
          className="width-full"
          style={{objectFit: 'contain'}}
          alt="built"
          loading="lazy"
          src="https://cdn.shopify.com/s/files/1/0770/5690/1456/files/built-large-theme-ligth.png?v=1697282133"
        />
      </picture>
    </div>
  );
};

export default Works;
