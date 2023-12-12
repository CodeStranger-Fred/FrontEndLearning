import GlobalNav from "./GlobalNav";
import "../css/Header.css";
import "../css/icon.css";
import { useRef, useState } from "react";
import Button from "./Button";
import Login from "./Login";

function Header({ setPage }) {
  const [hovered, setHovered] = useState(true);
  const [login, setLogin] = useState(false);
  const [user, setuser] = useState("");
  const modalLoginRef = useRef();

  function setClose() {
    modalLoginRef.current.close();
  }

  function setIsLogin() {
    setLogin(true);
  }

  function setloginuser(user) {
    setuser(user);
  }

  return (
    <header className="header">
      <div className="header__login-container">
        <a
          href="#main"
          className="title-skip"
          aria-label="skip to main content"
        >
          skip to the content
        </a>
        {login ? (
          <>
            <div className="header__logout-word"> Hello {user}</div>
            <Button
              className={"header__logout-button"}
              children={
                <div className="header__logout-pic">
                  <i className="gg-log-out"></i>
                  <div className="header-logout-text">Logout</div>
                </div>
              }
              onClick={() => setLogin(false)}
            />
          </>
        ) : (
          <>
            <Button
              className={"header__login-button"}
              children={
                <div className="header__button-pic">
                  <i className="gg-profile"></i>
                  <div className="header__login-text">Account</div>
                </div>
              }
              onClick={() => modalLoginRef.current.showModal()}
            />
            <dialog ref={modalLoginRef} className="login__dialog">
              <Login
                setClose={setClose}
                setIsLogin={setIsLogin}
                setloginuser={setloginuser}
              />
            </dialog>
          </>
        )}
      </div>
      <div className="header-title-icon__container">
        <button
          id="header__icon"
          className="header__icon"
          onClick={() => setHovered((hovered) => !hovered)}
          aria-label="Show the hamburger menu"
        >
          <i className="gg-menu"></i>
        </button>
        <h1 className="header__title">TeamHua</h1>
      </div>
      <GlobalNav setPage={setPage} hovered={hovered} />
    </header>
  );
}
export default Header;
