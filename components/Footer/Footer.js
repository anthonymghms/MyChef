import * as React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <div className='footer'>
      <MDBFooter color="black" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
            <img src='./images/logoMychef.png' className='img-hero' alt='Logo' style={{marginTop:'30px'}} />
            </MDBCol>
           <MDBCol md="6">
             <h2 className="footer-title">About MyChef</h2>
              <div className='footer-minors'>
                <h4 className="list-unstyled">
                  <a href="#top">Join Now</a>
                </h4>
                <h4 className="list-unstyled">
                  <a href="#explore">Explore</a>
                </h4>
                <h4 className="list-unstyled">
                  <a href="#categories">Categories</a>
                </h4>
                <h4 className="list-unstyled">
                  <a href="#contact-section">Contact Us</a>
                </h4>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MyChef.com </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
}

export default Footer;
