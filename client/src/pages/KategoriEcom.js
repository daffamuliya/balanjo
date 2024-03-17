import React, { Component } from 'react';
import NormalNavbar from '../components/NormalNavbar';
import Footer from '../components/Footer';
import { MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import LandingEcom from '../components/LandingEcom';
export default class Landing extends Component {
  render() {
    return (
      <div>
        <NormalNavbar />
        <MDBContainer>
          <MDBRow className="mt-3 justify-content-center">
            <MDBCol size="12">
              <form className="d-flex">
                <MDBInput wrapperClass="mb-4 w-100" id="formControlLg" type="email" size="lg" style={{ fontSize: '16px' }} placeholder="Search for products..." className="focus-ring focus-ring-light " autoComplete="new-password" />
              </form>
            </MDBCol>
            <MDBCol md={12} xs={2} className="ms-auto">
              <img src="/img/kategori-ecom.png" className="hover-shadow" alt="" style={{ width:'100%' }}/>
            </MDBCol>
            <LandingEcom />
          </MDBRow>
        </MDBContainer>
        <br></br>
        <br></br>
        <br></br>
        <Footer />
      </div>
    );
  }
}
