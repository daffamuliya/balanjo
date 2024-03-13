import React, { Component } from 'react';
import NormalNavbar from '../components/NormalNavbar';
import Footer from '../components/Footer';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCardImage } from 'mdb-react-ui-kit';
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
            <MDBCol size="12">
              <MDBCard>
                <MDBCardBody className="d-flex justify-content-between ">
                  <MDBCol size="6">
                    <MDBCardImage src="/img/detail-produk.png" position="top" alt="..." />
                  </MDBCol>
                  <MDBCol size="6" className="ms-3 mt-5">
                    <div>
                      <MDBCardTitle style={{ fontSize: '40px' }}>Kacamata Photocromic</MDBCardTitle>
                      <MDBCardText style={{ color: '#2D2D2D', fontSize: '17px', opacity: '60%' }}>
                        Kacamata ini dapat melindungi mata kita dari berbagai jenis radiasi. Mulai dari radiasi sinar ultraviolet sampai radiasi nuklir. Selain itu, kacamata ini juga memiliki bentuk yang keren dan kece.
                      </MDBCardText>
                      <MDBCardTitle style={{ fontSize: '30px' }}>Rp90.000</MDBCardTitle>
                      <hr className="my-4 me-4" />
                      <div class="mb-3 me-4 ">
                        <label for="exampleInputPassword1" class="form-label">
                          Variasi
                        </label>
                        <select class="form-select" aria-label="Default select example" placeholder="Select size">
                          <option selected>Select Size</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div class="mb-3 me-4 mt-5">
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                      </div>
                      <MDBBtn size="lg" style={{ backgroundColor: '#A08336', fontSize: '16px', textAlign: 'center', border: 'black', width: '97%' }} >
                        Tambah ke Keranjang
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBCardBody>
              </MDBCard>
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
