import Button from "./Button";

function Card({
  className,
  onReadMore,
  pic,
  alt,
  text,
  buttonShow = false,
  price,
  remain,
}) {
  return (
    <div className={className}>
      <img className={`${className}__pic`} alt={alt} src={pic} />

      <p className={`${className}__text`}>{text}</p>
      <div className={`${className}__price-container`}>
        <p className={`${className}__price`}>{price}</p>
        <Button
          className={`${className}-button`}
          children={
            <>
              <i className="gg-info"></i>
            </>
          }
          arialabel={"Show More Info"}
        />
      </div>
      <p className={`${className}__remain`}>{remain}</p>
      {buttonShow && (
        <Button
          children={"Home"}
          className="button-home"
          type="button"
          visual="link"
        />
      )}
    </div>
  );
}

export default Card;
