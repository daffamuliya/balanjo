import React, { Component } from 'react';
import NormalNavbar from '../components/NormalNavbar';
import Footer from '../components/Footer';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import LandingBlog from '../components/LandingBlog';
export default class Landing extends Component {
  render() {
    return (
      <div>
        <NormalNavbar />
          <MDBRow className="justify-content-center">
            <MDBCol md={12} xs={2} className="ms-auto">
              <img src="/img/banner-blog.png" className="hover-shadow" alt="" style={{ width: '100%' }} />
            </MDBCol>
            <LandingBlog />
          </MDBRow>
        <br></br>
        <br></br>
        <br></br>
        <Footer />
      </div>
    );
  }
}
