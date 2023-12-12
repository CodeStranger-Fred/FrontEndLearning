import { useId, useState } from "react";
import gallerydata from "./gallerydata";
import Card from "./Card";
import "../css/Gallery.css";

function Gallery() {
  const [selectedCategory, setselectedCategory] = useState("");
  const id = useId();

  const handleCategory = (e) => {
    const value = e.target.value;
    setselectedCategory(value);
  };

  const galleryList = gallerydata.map((item) => {
    if (item.type == selectedCategory) {
      return (
        <div key={item.index} className="gallery-card__container">
          <Card
            className={"gallery-card"}
            alt={item.alt}
            pic={item.pic}
            text={item.text}
            price={item.price}
            remain={item.remain}
          />
        </div>
      );
    } else if (selectedCategory == "") {
      return (
        <div key={item.index} className="gallery-card__container">
          <Card
            className={"gallery-card"}
            alt={item.alt}
            pic={item.pic}
            text={item.text}
            price={item.price}
            remain={item.remain}
          />
        </div>
      );
    }
  });

  return (
    <>
      <div className="gallery-container">
        <div className="gallery-container__title">
          <h3 className="gallery-title">Gallery</h3>
        </div>
        <div className="gallery-container__filterbar">
          <label htmlFor={`${id}-gallery`} className="gallery__filtertext">
            Sort by
          </label>
          <select
            className="gallery__filterbar"
            value={selectedCategory}
            onChange={handleCategory}
            id={`${id}-gallery`}
          >
            <option key={""} value={""}>
              {"All"}
            </option>
            <option key={"shoe"} value={"shoe"}>
              {"Shoe"}
            </option>
            <option key={"clothe"} value={"clothe"}>
              {"Clothe"}
            </option>
          </select>
        </div>
        <div className="gallery-container__display">{galleryList}</div>
      </div>
    </>
  );
}

export default Gallery;
