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
              User
            </h1>
            <Card>
              <Card.Body>
                {' '}
                <Table responsive>
                  <thead>
                    <tr>
                      <th>User ID</th>
                      <th>Nama</th>
                      <th>username</th>
                      <th>Email</th>
                      <th>Tanggal Bergabung</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Daffa</td>
                      <td>2011527001</td>
                      <td>daffa@gmail.com</td>
                      <td>25 Januari 2022</td>
                      <td>
                        <i class="bi bi-trash-fill" style={{ color: '#A08336' }}></i>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Bobby</td>
                      <td>2011527002</td>
                      <td>bobby@gmail.com</td>
                      <td>25 Januari 2022</td>
                      <td>
                        <i class="bi bi-trash-fill" style={{ color: '#A08336' }}></i>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Kemal</td>
                      <td>2011527003</td>
                      <td>kemal@gmail.com</td>
                      <td>25 Januari 2022</td>
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
