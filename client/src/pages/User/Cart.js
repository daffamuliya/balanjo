import React, { Component } from 'react';
import NormalNavbar from '../../components/NormalNavbar';
import Footer from '../../components/Footer';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
export default class Landing extends Component {
  render() {
    return (
      <div>
        <NormalNavbar />
        <MDBContainer>
          <MDBRow className="mt-3 justify-content-center">
            <MDBCol size="12">
              <h2 className="text-center mb-3 mt-3" style={{ fontWeight: 'bold', color: '#A08336' }}>
                Keranjang
              </h2>
              <div className="table-responsive">
                <MDBTable align="middle">
                  <MDBTableHead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Price</th>
                      <th scope="col">Subtotal</th>
                      <th scope="col"></th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="/img/produk.png" alt="" style={{ width: '100px', height: '100px' }} />
                          <div className="ms-3">
                            <p className="fw-bold mb-1">Kacamata Photocromic</p>
                            <p className="text-muted mb-0">Size : 28mm</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="fw-normal mb-1">- 1 +</p>
                      </td>
                      <td>
                        <p className="fw-normal mb-1">Rp90.000</p>
                      </td>
                      <td>
                        <p className="fw-normal mb-1">Rp90.000</p>
                      </td>
                      <td>
                        <MDBBtn color="link" rounded size="sm">
                          Hapus
                        </MDBBtn>
                      </td>
                    </tr>
                  </MDBTableBody>
                </MDBTable>
              </div>
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
