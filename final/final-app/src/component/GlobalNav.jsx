import menu from "./menu";
import SubNav from "./SubNav";

function GlobalNav({ setPage, hovered }) {
  function go(event, page) {
    event.preventDefault();
    setPage(page);
  }
  const list = menu.map((item) => {
    return (
      <li key={item.name} className="global-nav__item">
        <a
          className="global-nav__link"
          href={item.path}
          onClick={(e) => go(e, item.name)}
        >
          {item.name}
        </a>{" "}
        {item.sub && <SubNav setPage={setPage} submenu={item.sub} />}
      </li>
    );
  });

  return (
    <nav className={hovered ? `global-nav` : `global-nav global-nav--hovered`}>
      <ul className="global-nav__list">{list}</ul>
    </nav>
  );
}

export default GlobalNav;
