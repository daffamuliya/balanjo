import React, { Component } from 'react';
import NormalNavbar from '../components/NormalNavbar';
import Footer from '../components/Footer';
import { MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit';
import LandingBlog from '../components/LandingBlog';
export default class Landing extends Component {
  render() {
    return (
      <div>
        <NormalNavbar />
        <MDBContainer>
          <MDBRow className="mt-3 justify-content-center">
            <MDBCol md={12} xs={2} className="ms-auto">
              <img src="/img/banner-blog.png" className="hover-shadow" alt="" style={{ width: '100%' }} />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <br></br>
        <LandingBlog />
        <br></br>
        <br></br>
        <br></br>
        <Footer />
      </div>
    );
  }
}
