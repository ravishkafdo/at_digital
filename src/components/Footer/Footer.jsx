import "./Footer.css"
import logo from "../../assets/atdigital.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-info">
            <img src={logo || "/placeholder.svg"} alt="AT Digital Logo" className="footer-logo" />
            <p className="footer-description">
              Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve
              single objective - your business results.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3>Our Technologies</h3>
              <ul>
                <li>
                  <a href="#">ReactJS</a>
                </li>
                <li>
                  <a href="#">Gatsby</a>
                </li>
                <li>
                  <a href="#">NextJS</a>
                </li>
                <li>
                  <a href="#">NodeJS</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Our Services</h3>
              <ul>
                <li>
                  <a href="#">Social Media Marketing</a>
                </li>
                <li>
                  <a href="#">Web & Mobile App Development</a>
                </li>
                <li>
                  <a href="#">Data & Analytics</a>
                </li>
                <li>
                  <a href="#">Google Marketing Solutions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <span className="footer-separator">|</span>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

