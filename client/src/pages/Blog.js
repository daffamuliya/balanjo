import React, { Component } from 'react';
import NormalNavbar from '../components/NormalNavbar';
import Footer from '../components/Footer';
import { MDBRow, MDBCol, MDBContainer, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
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
            <MDBCol size="10" className="mt-3">
              <form className="d-flex">
                <MDBInput wrapperClass="mb-4 w-100" id="formControlLg" type="email" size="lg" style={{ fontSize: '16px' }} placeholder="Search for products..." className="focus-ring focus-ring-light " autoComplete="new-password" />
              </form>
            </MDBCol>
            <MDBCol size="2" className="mt-3">
              <MDBBtn href="/upload-blog" size="lg" style={{ backgroundColor: '#A08336', fontSize: '16px', border: 'black', marginRight: '5px' }}>
                Buat artikel kamu
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <LandingBlog />
        <br></br>
        <br></br>
        <br></br>
        <Footer />
      </div>
    );
  }
}
