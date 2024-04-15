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
              Kelola Forum
            </h1>
            <Card>
              <Card.Body>
                {' '}
                <Table responsive>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Judul Forum</th>
                      <th>Uploader</th>
                      <th>Balasan</th>
                      <th>Tanggal Upload</th>
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
                      <td>
                        <i class="bi bi-trash-fill" style={{ color: '#A08336' }}></i>
                        <i class="bi bi-eye-fill" style={{ color: '#A08336' }}></i>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>25 Januari 2022</td>
                      <td>
                        <i class="bi bi-trash-fill" style={{ color: '#A08336' }}></i>
                        <i class="bi bi-eye-fill" style={{ color: '#A08336' }}></i>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Larry the Bird</td>
                      <td>Mahmudi</td>
                      <td>@twitter</td>
                      <td>25 Januari 2022</td>
                      <td>
                        <i class="bi bi-trash-fill" style={{ color: '#A08336' }}></i>
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
