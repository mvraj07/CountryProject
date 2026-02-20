import { NavLink } from "react-router-dom";
import footerData from "../../api/footerApi.json";
import { FooterComponent } from "../../components/FooterComponent";
export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="details">
          <ul>
            {footerData.map((curData, index) => {
              return <FooterComponent key={index} curData={curData} />;
            })}
          </ul>
        </div>
      </div>
      <div className="copyright-section">
        <div className="container">
          <NavLink
            to="https://github.com/mvraj07/CountryProject"
            className="copyright "
            target="_blank"
          >
            Copyright @2026. All rights reserved <span>Raj Vijay Mahajan</span>
          </NavLink>
          <div className="nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="https://github.com/mvraj07/CountryProject">
              Socials
            </NavLink>
            <NavLink to="https://github.com/mvraj07/CountryProject">
              SourceCode
            </NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};
