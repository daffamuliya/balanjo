import React, { Component } from 'react';
import NormalNavbar from '../../components/NormalNavbar';
import Footer from '../../components/Footer';
import { MDBContainer, MDBRow, MDBCol, MDBCardBody, MDBCard } from 'mdb-react-ui-kit';
export default class Landing extends Component {
  render() {
    return (
      <div>
        <NormalNavbar />
        <MDBContainer>
          <MDBRow className="mt-3 justify-content-center">
            <MDBCol size="12">
              <h2 className="text-center mb-3 mt-3" style={{ fontWeight: 'bold', color: '#A08336' }}>
                Checkout
              </h2>
              <MDBCard>
                <MDBCardBody>
                  {' '}
                  <div class="row">
                    <div class="col-12 mb-4 mt-4">
                      <h3 className="text-center mb-3" style={{ fontWeight: 'bold' }}>
                        Informasi Pelanggan
                      </h3>
                      <form>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label" style={{ fontWeight: 'bold' }}>
                            Nama Lengkap
                          </label>
                          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="nama lengkap anda" />
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label" style={{ fontWeight: 'bold' }}>
                            Email
                          </label>
                          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email anda" />
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label" style={{ fontWeight: 'bold' }}>
                            Nomor Handphone
                          </label>
                          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="nomor handphone anda" />
                        </div>
                        <h3 className="text-center mb-3 mt-4" style={{ fontWeight: 'bold' }}>
                          Address Information
                        </h3>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label" style={{ fontWeight: 'bold' }}>
                            Alamat Lengkap
                          </label>
                          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="alamat lengkap anda" />
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label" style={{ fontWeight: 'bold' }}>
                            Provinsi
                          </label>
                          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="provinsi" />
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label" style={{ fontWeight: 'bold' }}>
                            Kota
                          </label>
                          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="kota" />
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label" style={{ fontWeight: 'bold' }}>
                            Kode Pos
                          </label>
                          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="kode pos" />
                        </div>
                      </form>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
              <MDBCard className="mt-3">
                <MDBCardBody>
                  <h3 className="text-center mb-3" style={{ fontWeight: 'bold' }}>
                    Opsi Pengiriman
                  </h3>
                </MDBCardBody>
              </MDBCard>
              <button type="submit" class="btn btn-primary" style={{ marginTop: '20px', backgroundColor: '#A08336', fontSize: '16px', maxWidth: '180px', maxHeight: '42px', textAlign: 'center', border: 'black', float: 'right' }}>
                Bayar
              </button>
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
