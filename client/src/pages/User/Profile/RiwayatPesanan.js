import React, { Component } from 'react';
import UserNavbar from '../../../components/UserNavbar';
import Card from 'react-bootstrap/Card';
import SidebarAkun from '../../../components/SidebarAkun';
import Table from 'react-bootstrap/Table';

export default class Landing extends Component {
  render() {
    return (
      <div>
        <UserNavbar />
        <div className="main">
          <SidebarAkun />
          <div className="container mt-5">
            <Card>
              <Card.Body>
                <section className="blog">
                  <div class="row">
                    <h2 className="title" style={{ fontWeight: 'bold' }}>
                      Riwayat Pesanan
                    </h2>
                    <Table responsive>
                      <thead>
                        <tr>
                          <th>Order ID</th>
                          <th>Produk</th>
                          <th>Tanggal</th>
                          <th>Status</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                          <td>25 Januari 2022</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                          <td>25 Januari 2022</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Larry the Bird</td>
                          <td>Mahmudi</td>
                          <td>@twitter</td>
                          <td>25 Januari 2022</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </section>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
