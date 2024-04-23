import React, { Component } from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import Card from 'react-bootstrap/Card';
import Sidebar from '../../components/Sidebar';
import Table from 'react-bootstrap/Table';

export default class Landing extends Component {
  render() {
    return (
      <div>
        <AdminNavbar />
        <div className="main">
          <Sidebar />
          <div className="container mt-5 ">
            <h3 className="title" style={{ color: '#A08336', fontWeight: 'bold' }}>
              Transaction History
            </h3>
            <Card>
              <Card.Body>
                {' '}
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Product</th>
                      <th>Date</th>
                      <th>Customer</th>
                      <th>Total</th>
                      <th>Payment</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>000123</td>
                      <td>Kacamata</td>
                      <td>12 Maret 2022</td>
                      <td>Daffa Riza Muliya</td>
                      <td>Rp 0,00</td>
                      <td>Lunas</td>
                      <td>Dikirim</td>
                      <td>
                        <i class="bi bi-eye-fill" style={{ color: '#A08336' }}></i>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
