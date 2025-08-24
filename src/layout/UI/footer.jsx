import { IoMdMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { ImLocation2 } from "react-icons/im";
export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
        <div className="find flex">
          <ImLocation2 className="icon" />
          <div className="find-data">
            <p>Find Us</p>
            <p className="light">Pune Maharashtra</p>
          </div>
        </div>
        <div className="call flex">
          <IoCallSharp className="icon" />
          <div className="call-data">
            <p>Call Us</p>
            <p className="light">+91 7898 844 853</p>
          </div>
        </div>
        <div className="mail flex">
          <IoMdMail className="icon" />
          <div className="mail-data">
            <p>Mail Us</p>
            <p className="light">mvraj7898@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
