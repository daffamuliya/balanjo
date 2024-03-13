import React, { Component } from 'react';
import NormalNavbar from '../components/NormalNavbar';
import Footer from '../components/Footer';
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
                Upload Bukti Pembayaran
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
                            Sumber Transfer
                          </label>
                          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label" style={{ fontWeight: 'bold' }}>
                            Tujuan Pembayaran
                          </label>
                          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label" style={{ fontWeight: 'bold' }}>
                            Nominal Pembayaran
                          </label>
                          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label" style={{ fontWeight: 'bold' }}>
                            Nama Pemilik Rekening
                          </label>
                          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label" style={{ fontWeight: 'bold' }}>
                            Tanggal Pembayaran
                          </label>
                          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                          <label class="form-label" for="customFile" style={{ fontWeight: 'bold' }}>
                            Upload Bukti
                          </label>
                          <input type="file" class="form-control" id="customFile" />
                        </div>
                      </form>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
              <button type="submit" class="btn btn-primary" style={{ marginTop: '20px', backgroundColor: '#A08336', fontSize: '16px', maxWidth: '180px', maxHeight: '42px', textAlign: 'center', border: 'black', float: 'right' }}>
                Konfirmasi
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
