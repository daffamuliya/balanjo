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
              <h5 style={{ color: '#A08336' }}>Pesanan</h5>
              <MDBRow className="mt-3 justify-content-center">
                <MDBCol md={12} xs={2} className="ms-auto">
                  <Card>
                    <CardBody>
                      {' '}
                      <div class="row">
                        <Table responsive>
                          <thead>
                            <tr>
                              <th>Order ID</th>
                              <th>Produk</th>
                              <th>Qty</th>
                              <th>Tanggal</th>
                              <th>Nama Kustomer</th>
                              <th>Total</th>
                              <th>Status</th>
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
