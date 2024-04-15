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
          <div className="container mt-5">
            <h1 className="title" style={{ color: '#A08336', fontWeight: 'bold' }}>
              Daftar Request Banner
            </h1>
            <Card>
              <Card.Body>
                {' '}
                <Table responsive>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Produk</th>
                      <th>Seller</th>
                      <th>Tanggal</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Mark</td>
                      <td>Mark</td>
                      <td>
                        <i class="bi bi-trash-fill" style={{ color: '#A08336' }}></i>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Mark</td>
                      <td>Mark</td>
                      <td>
                        <i class="bi bi-trash-fill" style={{ color: '#A08336' }}></i>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Larry the Bird</td>
                      <td>Mark</td>
                      <td>Mark</td>
                      <td>
                        <i class="bi bi-trash-fill" style={{ color: '#A08336' }}></i>
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
