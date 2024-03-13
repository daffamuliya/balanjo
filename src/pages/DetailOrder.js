import React, { Component } from 'react';
import NormalNavbar from '../components/NormalNavbar';
import Footer from '../components/Footer';
import { MDBContainer, MDBRow, MDBCol, MDBCardBody, MDBCard, MDBCardTitle, MDBCardSubTitle, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';
export default class Landing extends Component {
  render() {
    return (
      <div>
        <NormalNavbar />
        <MDBContainer>
          <MDBRow className="mt-3 justify-content-center">
            <MDBCol size="12">
              <h2 className="text-center mb-3 mt-3" style={{ fontWeight: 'bold', color: '#A08336' }}>
                Detail Pemesanan
              </h2>
              <MDBCard className="mb-3">
                <MDBCardBody>
                  <MDBCardTitle>Budi Anto</MDBCardTitle>
                  <MDBCardSubTitle>budigeming762@gmail.com</MDBCardSubTitle>
                  <MDBCardText>+628234234231</MDBCardText>
                  <MDBCardText>Jl Durian Tarung No 9, Kel. Pasar Ambacang, Kec. Kuranji, Kota Padang, Sumatera Barat</MDBCardText>
                </MDBCardBody>
              </MDBCard>
              <MDBCard>
                <MDBRow className="g-0">
                  <div className="d-flex align-items-center">
                    <img src="/img/produk.png" alt="" style={{ width: '100px', height: '100px' }} />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">Kacamata Photocromic</p>
                      <p className="text-muted mb-0">Size : 28mm</p>
                    </div>
                  </div>
                </MDBRow>
              </MDBCard>
              <p className="text-center mt-3">Total Bayar</p>
              <h2 className="text-center">Rp90,000,000</h2>
              <hr className="my-4" />
            </MDBCol>
            <h2 className="text-center mt-3" style={{ fontWeight: 'bold', color: '#A08336' }}>
              Metode Pembayaran
            </h2>
          </MDBRow>
          <MDBRow className="pt-5">
            <MDBCol size="4">
              <MDBCard style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', border: 'none', Width: '390px', Height: '239px' }} className="text-center">
                <MDBCardImage src="/img/mandiri.png" className="mx-auto mt-5" alt="..." style={{ width: '30%' }} />
                <MDBCardBody>
                  <MDBCardText className="mt-3 mb-3">Fitur untuk berdiskusi, sekaligus memamerkan kreativitas.</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol size="4">
              <MDBCard style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', border: 'none', Width: '390px', Height: '239px' }} className="text-center">
                <MDBCardImage src="/img/qris.png" className="mx-auto mt-5" alt="..." style={{ width: '30%' }} />
                <MDBCardBody>
                  <MDBCardText className="mt-3 mb-3">Fitur untuk berdiskusi, sekaligus memamerkan kreativitas.</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol size="4">
              <MDBCard style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', border: 'none', Width: '390px', Height: '239px' }} className="text-center">
                <MDBCardImage src="/img/bca.png" className="mx-auto mt-5" alt="..." style={{ width: '30%' }} />
                <MDBCardBody>
                  <MDBCardText className="mt-3 mb-3">Fitur untuk berdiskusi, sekaligus memamerkan kreativitas.</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol size="4" className="mt-3">
              <MDBCard style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', border: 'none', Width: '390px', Height: '239px' }} className="text-center">
                <MDBCardImage src="/img/dana.png" className="mx-auto mt-5" alt="..." style={{ width: '30%' }} />
                <MDBCardBody>
                  <MDBCardText className="mt-3 mb-3">Fitur untuk berdiskusi, sekaligus memamerkan kreativitas.</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol size="4" className="mt-3">
              <MDBCard style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', border: 'none', Width: '390px', Height: '239px' }} className="text-center">
                <MDBCardImage src="/img/shoppee.png" className="mx-auto mt-5" alt="..." style={{ width: '30%' }} />
                <MDBCardBody>
                  <MDBCardText className="mt-3 mb-3">Fitur untuk berdiskusi, sekaligus memamerkan kreativitas.</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol size="4" className="mt-3">
              <MDBCard style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', border: 'none', Width: '390px', Height: '239px' }} className="text-center">
                <MDBCardImage src="/img/gopay.png" className="mx-auto mt-5" alt="..." style={{ width: '30%' }} />
                <MDBCardBody>
                  <MDBCardText className="mt-3 mb-3">Fitur untuk berdiskusi, sekaligus memamerkan kreativitas.</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
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
