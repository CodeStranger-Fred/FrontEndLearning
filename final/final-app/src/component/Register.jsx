import { useId, useState, useRef } from "react";
import { city, location } from "./registerData";
import "../css/Register.css";
import Button from "./Button";

function Register() {
  //Required Information
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [telephone, setTelephone] = useState("");
  const id = useId();
  const modalRef = useRef();

  //Validate the Information
  const [usernameIsMissing, setusernameIsMissing] = useState(false);
  const [emailIsMissing, setEmailIsMissing] = useState(false);
  const [passwordIsMissing, setPasswordIstMissing] = useState(false);
  const [confirmPasswordIsMissing, setConfirmPasswordIsMissing] =
    useState(false);
  const [passIsSameAsConfirm, setpassIsSameAsConfirm] = useState(true);

  //validate function
  function fieldIsValid(name) {
    return !!name;
  }

  function passwordIsSameAsConfirm(pass, confirmpass) {
    return pass == confirmpass;
  }

  //Overall Function
  const handleSubmit = (e) => {
    e.preventDefault();

    //validate
    setusernameIsMissing(!fieldIsValid(username));
    setEmailIsMissing(!fieldIsValid(email));
    setPasswordIstMissing(!fieldIsValid(password));
    setConfirmPasswordIsMissing(!fieldIsValid(confirmPassword));

    setpassIsSameAsConfirm(passwordIsSameAsConfirm(password, confirmPassword));

    //handle submit success
    if (
      fieldIsValid(username) &&
      fieldIsValid(email) &&
      fieldIsValid(password)
    ) {
      if (passwordIsSameAsConfirm(password, confirmPassword)) {
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setSelectedCity("");
        setSelectedLocation("");
        setShippingaddress("");
        setSameAddress(false);
        setBillingAddress("");
        setTelephone("");
        modalRef.current.showModal();
      } else {
        setpassIsSameAsConfirm(false);
      }
    }
  };

  //City
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleCity = (e) => {
    const value = e.target.value;
    setSelectedCity(value);
  };

  const handleLocation = (e) => {
    const value = e.target.value;
    setSelectedLocation(value);
  };

  //Address
  const [sameAddress, setSameAddress] = useState(false);
  const [shippingaddress, setShippingaddress] = useState("");
  const [billingAddress, setBillingAddress] = useState("");

  const handleAddress = (e) => {
    const checked = e.target.checked;
    setSameAddress(checked);

    if (checked) {
      setBillingAddress(shippingaddress);
    } else {
      setBillingAddress("");
    }
  };

  const handleShipping = (e) => {
    const value = e.target.value;
    setShippingaddress(value);

    if (sameAddress) {
      setBillingAddress(event.target.value); // Update billing address if sameAddress is checked
    }
  };

  return (
    <div className="register-form__main">
      <div className="register-form__container">
        <h2 className="register-form__title">Register Form</h2>
        <p className="register-form__subtitle">Become Our Member Now</p>
        <p className="register-form__text">
          Register now can get you a 40% promotion code over the shops and also
          get the package free. Besides, becoming a member can get you 20% off
          in the following orders.
        </p>
        <p className="register-form__required">*Required</p>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor={`${id}-username`}>Username*</label>
          <input
            id={`${id}-username`}
            value={username}
            onInput={(e) => {
              setUsername(e.target.value);
              setusernameIsMissing(!fieldIsValid(e.target.value));
            }}
          />
          {usernameIsMissing && <span>Username is required</span>}

          <label htmlFor={`${id}-email`}>Email*</label>
          <input
            id={`${id}-email`}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailIsMissing(!fieldIsValid(e.target.value));
            }}
          />
          {emailIsMissing && <span>Email is required</span>}

          <label htmlFor={`${id}-password`}>Password*</label>
          <input
            id={`${id}-password`}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordIstMissing(!fieldIsValid(e.target.value));
            }}
          />
          {passwordIsMissing && <span>Password is required</span>}

          <label htmlFor={`${id}-confirm-password`}>Confirm Password*</label>
          <input
            id={`${id}-confirm-password`}
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setConfirmPasswordIsMissing(!fieldIsValid(e.target.value));
            }}
          />
          {confirmPasswordIsMissing && (
            <span>Confirm Password is required</span>
          )}

          {!confirmPasswordIsMissing &&
            !passIsSameAsConfirm &&
            !passwordIsSameAsConfirm(password, confirmPassword) && (
              <span>Confirm Password is not same as Password</span>
            )}

          <label htmlFor={`${id}-telephone`}>Telephone/Cell</label>
          <input
            id={`${id}-telephone`}
            value={telephone}
            onChange={(e) => {
              setTelephone(e.target.value);
            }}
          />

          <div className="register-form__deliever">
            <p>Deliever Information</p>
            <p className="deliever">
              (This section is optional. You can edit it after you successfully
              registered.)
            </p>
          </div>

          <label htmlFor={`${id}-city`}>City</label>
          <select id={`${id}-city`} value={selectedCity} onChange={handleCity}>
            {city.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>

          <label htmlFor={`${id}-location`}>Location</label>
          <select
            id={`${id}-location`}
            value={selectedLocation}
            onChange={handleLocation}
          >
            {location[selectedCity] &&
              location[selectedCity].map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
          </select>

          <label htmlFor={`${id}-shippingaddress`}>Shipping Address:</label>
          <input
            id={`${id}-shippingaddress`}
            onChange={handleShipping}
            value={shippingaddress}
          />

          <div className="register-form__addresscheck">
            <input
              type="checkbox"
              id={`${id}-sameAsAddress`}
              checked={sameAddress}
              onChange={handleAddress}
            />
            <label htmlFor={`${id}-sameAsAddress`}>
              Billing Address Same as Shipping Address
            </label>
          </div>

          <label htmlFor={`${id}-billingaddress`}>Billing Address:</label>
          <input
            id={`${id}-billingaddress`}
            value={billingAddress}
            onChange={(e) => setBillingAddress(e.target.value)}
            readOnly={sameAddress ? true : false}
          />

          <div className="register-form__privacytext">
            <p>
              Your personal data will be used by this site for purposes related
              to the service requested.
            </p>
            <p>
              This site will not use the personal information collected for
              purposes other than those useful in this service. Consult our
              Privacy Policy for further information.
            </p>
          </div>

          <div className="register-form__protect">
            <p>
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </p>
          </div>

          <Button
            children={"Submit"}
            className={"register-form__button"}
            type="submit"
          />
        </form>
        <dialog ref={modalRef} className="register-form__dialog">
          <p className="success__text">Submit Successfully!</p>
          <Button
            children={"OK"}
            className={"success__button"}
            onClick={() => modalRef.current.close()}
          />
        </dialog>
      </div>
    </div>
  );
}

export default Register;
