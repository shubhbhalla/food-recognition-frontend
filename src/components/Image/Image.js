const Image = ({ url }) => {
  if (!url || url.substring(0, 4) === 'data')
    return (
      <h1 className="tc fw3 pa5 ma4 dark-blue lh-solid lh-copy">
        Input Image URL Above
      </h1>
    );
  return (
    <div className="flex ma justify-center">
      <div className="absolute mt2 pa2 pb5">
        <img alt="food" src={url} width="75%" height="auto" />
      </div>
    </div>
  );
};

export default Image;
