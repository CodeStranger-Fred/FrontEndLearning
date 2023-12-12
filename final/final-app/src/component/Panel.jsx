import Button from "./Button";
import { useState } from "react";
import "../css/Panel.css";

function Panel({
  className,
  title,
  alt1,
  alt2,
  src1,
  src2,
  text,
  buttontext,
  buttonClickText,
}) {
  const [click, setClick] = useState(true);

  return (
    <div className={`panel ${className}`}>
      <div className="panel__pic-container">
        <img
          className={`panel__pic1 ${className}__pic1`}
          alt={alt1}
          src={src1}
        />
        <img
          className={`panel__pic2 ${className}__pic2`}
          alt={alt2}
          src={src2}
        />
      </div>
      <div className={`panel__text-container ${className}__text-container`}>
        <h2 className={`panel__title ${className}__title`}>{title}</h2>
        <p className={`panel__text ${className}__text`}>{text}</p>
        <Button
          children={click ? buttontext : buttonClickText}
          className={`panel__button ${className}__button`}
          onClick={() => {
            const nextclick = !click;
            setClick(nextclick);
          }}
        />
      </div>
    </div>
  );
}

export default Panel;
