const Image = ({ url }) => {
  if (!url)
    return (
      <h1 className="tc fw3">
        This app will detect food items in your image Url!
      </h1>
    );
  return (
    <div className="flex ma justify-center">
      <div className="absolute mt2">
        <img alt="food" src={url} width="75%" height="auto" />
      </div>
    </div>
  );
};

export default Image;
