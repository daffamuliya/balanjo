import React, { Component } from 'react';
import SellerNavbar from '../../../components/SellerNavbar';
import Card from 'react-bootstrap/Card';
import SidebarSeller from '../../../components/SidebarSeller';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Table from 'react-bootstrap/Table';

import CardBody from 'react-bootstrap/esm/CardBody';

export default class Landing extends Component {
  render() {
    return (
      <div>
        <SellerNavbar />
        <div className="main">
          <SidebarSeller />
          <div className="container mt-5">
            <MDBRow className="mt-5">
              <h5 style={{ color: '#A08336' }}>Produk</h5>
              <MDBCol size="2" className="mt-3">
                <a href="upload-produk" className="btn btn-primary" style={{ backgroundColor: '#A08336', fontSize: '16px', maxWidth: '158px', maxHeight: '42px', textAlign: 'center', border: 'black', display: 'inline-block' }}>
                  + Tambah
                </a>
              </MDBCol>
              <MDBRow className="mt-3 justify-content-center">
                <MDBCol md={12} xs={2} className="ms-auto">
                  <Card>
                    <CardBody>
                      {' '}
                      <div class="row">
                        <Table responsive>
                          <thead>
                            <tr>
                              <th>Produk ID</th>
                              <th>Nama Produk</th>
                              <th>Stok</th>
                              <th>Harga</th>
                              <th>Terjual</th>
                              <th>Deskripsi</th>
                              <th>Aksi</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                              <td>25 Januari 2022</td>
                              <td>Otto</td>
                              <td>
                                <i class="bi bi-trash-fill" style={{ color: '#A08336', paddingRight: '10px' }}></i>
                                <i class="bi bi-pencil-square" style={{ color: '#A08336', paddingRight: '10px' }}></i>
                                <i class="bi bi-eye-fill" style={{ color: '#A08336', paddingRight: '10px' }}></i>
                              </td>
                            </tr>
                            <tr>
                              <td>1</td>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                              <td>25 Januari 2022</td>
                              <td>Otto</td>
                              <td>
                                <i class="bi bi-trash-fill" style={{ color: '#A08336', paddingRight: '10px' }}></i>
                                <i class="bi bi-pencil-square" style={{ color: '#A08336', paddingRight: '10px' }}></i>
                                <i class="bi bi-eye-fill" style={{ color: '#A08336', paddingRight: '10px' }}></i>
                              </td>
                            </tr>
                            <tr>
                              <td>1</td>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                              <td>25 Januari 2022</td>
                              <td>Otto</td>
                              <td>
                                <i class="bi bi-trash-fill" style={{ color: '#A08336', paddingRight: '10px' }}></i>
                                <i class="bi bi-pencil-square" style={{ color: '#A08336', paddingRight: '10px' }}></i>
                                <i class="bi bi-eye-fill" style={{ color: '#A08336', paddingRight: '10px' }}></i>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </CardBody>
                  </Card>
                </MDBCol>
              </MDBRow>
            </MDBRow>
          </div>
        </div>
      </div>
    );
  }
}
