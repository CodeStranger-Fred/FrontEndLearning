import Accordion from "./Accordion";
import "../css/Contact.css";

function Contact() {
  return (
    <>
      <div className="contact-us">
        <h2 className="contact-us__title">Contact Us</h2>
        <p className="contact-us__detail">
          If you need help with your purchase or to find the information you
          require, please select your reason for seeking assistance.
        </p>
        <Accordion className={"contact-us"} />
      </div>
    </>
  );
}

export default Contact;
