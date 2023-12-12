import "../css/SubMenu.css";

function SubNav({ setPage, submenu }) {
  function go(event, page) {
    event.preventDefault();
    setPage(page);
  }
  const sublist = submenu.map((subitem) => {
    return (
      <li key={subitem.name} className="sub-nav__item">
        <a
          className="sub-nav__link"
          href={subitem.path}
          onClick={(e) => go(e, subitem.name)}
        >
          {subitem.name}
        </a>{" "}
      </li>
    );
  });
  return <ul className="sub-nav__list">{sublist}</ul>;
}

export default SubNav;
