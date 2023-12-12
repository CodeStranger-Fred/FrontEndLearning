import { useId, useState } from "react";
import Button from "./Button";
import "../css/Login.css";

function Login({ setClose, setIsLogin, setloginuser }) {
  //Basic
  const [loginusername, setLoginUsername] = useState("");
  const [loginpassword, setLoginPassword] = useState("");
  const id = useId();

  //Validate
  const [loginusernameIsMissing, setLoginusernameIsMissing] = useState(false);
  const [loginpasswordIsMissing, setLoginPasswordIstMissing] = useState(false);
  function fieldIsValid(name) {
    return !!name;
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    setLoginusernameIsMissing(!fieldIsValid(loginusername));
    setLoginPasswordIstMissing(!fieldIsValid(loginpassword));

    if (fieldIsValid(loginusername) && fieldIsValid(loginpassword)) {
      setloginuser(loginusername);
      setLoginUsername("");
      setLoginPassword("");
      setIsLogin();
      setClose();
    }
  };

  return (
    <>
      <div className="login-form__closebutton-container">
        <Button
          children={
            <>
              <i className="gg-close"></i>
            </>
          }
          className={"login-form__closebutton"}
          onClick={setClose}
        />
      </div>
      <div className="login-container">
        <h2 className="login__title">Registered User</h2>
        <p className="login__text">
          Enter your username and password to access the account.
        </p>
        <p className="login__required">*Required</p>
        <form className="login-form" onSubmit={handleLoginSubmit}>
          <label htmlFor={`${id}-login-username`}>Username*</label>
          <input
            id={`${id}-login-username`}
            value={loginusername}
            onChange={(e) => {
              setLoginUsername(e.target.value);
              setLoginusernameIsMissing(!fieldIsValid(e.target.value));
            }}
          />
          {loginusernameIsMissing && <span>Username is Required</span>}

          <label htmlFor={`${id}-login-password`}>Password*</label>
          <input
            id={`${id}-login-password`}
            value={loginpassword}
            onChange={(e) => {
              setLoginPassword(e.target.value);
              setLoginPassword(e.target.value);
              setLoginPasswordIstMissing(!fieldIsValid(e.target.value));
            }}
          />
          {loginpasswordIsMissing && <span>Password is Required</span>}

          <p className="login-form__text">
            Contact our privacy policy for further information
          </p>
          <Button
            children={"Submit"}
            className={"login-form__submitbutton"}
            type="submit"
          />
        </form>
      </div>
    </>
  );
}

export default Login;
