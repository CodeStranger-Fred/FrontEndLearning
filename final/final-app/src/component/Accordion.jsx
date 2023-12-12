import Button from "./Button";
import { useState } from "react";
import accordionMenu from "./accordionMenu";
import "../css/Accordion.css";

function Accordion({ className }) {
  const [expanded, setExpanded] = useState([]);

  const toggleSection = (index) => {
    const sectionIndex = expanded.indexOf(index);
    let updatedSections = [...expanded];

    if (sectionIndex !== -1) {
      updatedSections.splice(sectionIndex, 1);
    } else {
      updatedSections.push(index);
    }

    setExpanded(updatedSections);
  };

  const accordionList = accordionMenu.map((item, index) => {
    return (
      <li key={item.spanName} className={`${className}-nav__item`}>
        <Button
          className={`${className}-nav__button`}
          children={
            <>
              <div className={`${className}-nav__title-container`}>
                <i className={item.iconName}></i>
                <span>{item.spanName}</span>
              </div>
              <i
                className={
                  expanded.includes(index) ? item.minusName : item.addName
                }
              ></i>
            </>
          }
          onClick={() => toggleSection(index)}
          arialabel={item.arialabel}
        />
        {item.sub && expanded.includes(index) && (
          <ul className={`${className}-nav__submenulist`}>
            {item.sub.map((subitem) => {
              return (
                <li
                  key={subitem.name}
                  className={`${className}-nav__submenuItem`}
                >
                  <p className={`${className}-nav__submenutext`}>
                    {subitem.name}
                  </p>
                </li>
              );
            })}
          </ul>
        )}
      </li>
    );
  });

  return (
    <nav className={`${className}-nav`}>
      <ul className={`${className}-nav__list`}>{accordionList}</ul>
    </nav>
  );
}

export default Accordion;
