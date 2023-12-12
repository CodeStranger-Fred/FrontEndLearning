import Panel from "./Panel";
import shops1 from "../images/shops1.jpg";
import shops2 from "../images/shops2.jpg";
import shops3 from "../images/shops3.jpg";
import shops4 from "../images/shops4.jpg";
import shops5 from "../images/shops5.jpg";
import shops6 from "../images/shops6.jpg";
import shops7 from "../images/shops7.jpg";
import shops8 from "../images/shops8.jpg";
import "../css/Shops.css";

function Shops() {
  return (
    <>
      <div>
        <Panel
          className={"panel--top"}
          title={"Special Man Gift"}
          alt1={"a man wearing a black shirt looking at the left"}
          alt2={"a man wearing a brown jacket looking in front"}
          src1={shops1}
          src2={shops2}
          text={"Collection"}
          buttontext={"Shop Now!"}
          buttonClickText={"Out of sale"}
        />
        <Panel
          className={"panel--bottom"}
          title={"Special Girl Gift"}
          alt1={"a girl wearing a halter top looking at the right"}
          alt2={"a girl wearing a mink cloting looking in front"}
          src1={shops3}
          src2={shops4}
          text={"Collection"}
          buttontext={"Shop Now!"}
          buttonClickText={"Out of sale"}
        />
        <Panel
          className={"panel--top"}
          title={"Special Watch Gift"}
          alt1={"a brown watch stiring to right"}
          alt2={"a white watch stiring to left"}
          src1={shops5}
          src2={shops6}
          text={"Collection"}
          buttontext={"Shop Now!"}
          buttonClickText={"Out of sale"}
        />
        <Panel
          className={"panel--bottom"}
          title={"Special Jewerelly Gift"}
          alt1={"a big blue ring"}
          alt2={"a golden neckless"}
          src1={shops7}
          src2={shops8}
          text={"Collection"}
          buttontext={"Shop Now!"}
          buttonClickText={"Out of sale"}
        />
      </div>
    </>
  );
}

export default Shops;
