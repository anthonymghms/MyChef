import * as React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="red" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
          <img src='./images/logoMychef.png' className='img-hero' alt='Logo' />    
          </MDBCol>
          <MDBCol md="6">
            <h2 className="title">About MyChef</h2>
              <h4 className="list-unstyled">
                <a href="#!">Join Now</a>
              </h4>
              <h4 className="list-unstyled">
                <a href="#!">Explore</a>
              </h4>
              <h4 className="list-unstyled">
                <a href="#!">Categories</a>
              </h4>
              <h4 className="list-unstyled">
                <a href="#!">Contact Us</a>
              </h4>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MyChef.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;

