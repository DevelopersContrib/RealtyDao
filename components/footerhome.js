import {
  NavDropdown,
  Nav,
  Button,
  Form,
  FormControl,
  Navbar,
} from "react-bootstrap";

export default function footerhome() {
  return (
    <React.Fragment>
      <footer className="light-footer dark-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <h4>Realty DAO</h4>
              <p>
                Transparent Virtual Real Estate Holding and Development network for Digital Assets (URLs) on the Blockchain. 
              </p>
              <p>
                Copyright 2020 Realtydao.com
              </p>
            </div>
            <div className="col-sm-3">
              <h4>Features</h4>
              <ul>
                <li><a href="#"><i className="fas fa-chevron-right"></i>How it works</a></li>
                <li><a href="#"><i className="fas fa-chevron-right"></i>TLD Explorer</a></li>
                <li><a href="#"><i className="fas fa-chevron-right"></i>Knowledgebase</a></li>
                <li><a href="#"><i className="fas fa-chevron-right"></i>Blog</a></li>
              </ul>
            </div>
            <div className="col-sm-3">
              <h4>Contact Info</h4>
              <div className="location-info">
                <h6>3411 Silverside Road</h6>
                <h6>Tatnall Building STE 104</h6>
                <h6>Wilmington New Castle</h6>
                <h6>DE 19810 USA</h6>
                <h6><i className="fa fa-envelope"></i> realtydao@gmail.com</h6>
                <h6><i className="fa fa-phone"></i> 18887333772</h6> 
              </div>
            </div>
            <div className="col-sm-3">
              <h4>Social Media</h4>
              <div className="social-media"> 
                <a href="https://www.facebook.com/RealtyDao-102594998025987" target="_blank"><i className="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com/realty_dao" target="_blank"> <i className="fab fa-twitter"></i></a>
                <a href="https://www.pinterest.ph/realtydao/" target="_blank"> <i className="fab fa-pinterest"></i></a>
                <a href="https://www.instagram.com/realtydao.official/" target="_blank"> <i className="fab fa-instagram"></i></a>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="quick-links">
                <div className="qucik-links-title">
                  <h4>Company</h4> </div>
                <ul>
                  <li><a href="/"><i className="fas fa-chevron-right"></i>Home</a></li>
                  <li><a href="about"><i className="fas fa-chevron-right"></i>About Us</a></li>
                  <li><a href="https://www.contrib.com/home/contact" target="_blank"><i className="fas fa-chevron-right"></i>Contact Us</a></li>
                  <li><a href="https://www.domaindirectory.com/policypage/terms?domain=realtydao.com" target="_blank"><i className="fas fa-chevron-right"></i>Terms of Service</a></li>
                  <li><a href="https://www.domaindirectory.com/policypage/privacypolicy?domain=realtydao.com" target="_blank"><i className="fas fa-chevron-right"></i>Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
