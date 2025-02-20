/** @format */

const ImageComponent = ({ src, alt, widthClass, heightClass }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`${widthClass} ${heightClass} object-cover`}
    />
  );
};

export default ImageComponent;
