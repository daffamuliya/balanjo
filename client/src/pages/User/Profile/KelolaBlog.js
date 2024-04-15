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
                      Kelola Blog
                    </h2>
                    <Table responsive>
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Judul Blog</th>
                          <th>Tanggal</th>
                          <th>Kategori</th>
                          <th>Aksi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>25 Januari 2022</td>
                          <td>
                            <i class="bi bi-trash-fill" style={{ color: '#A08336' }}></i>
                            <i class="bi bi-pencil-square" style={{ color: '#A08336' }}></i>
                            <i class="bi bi-eye-fill" style={{ color: '#A08336' }}></i>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>25 Januari 2022</td>
                          <td>
                            <i class="bi bi-trash-fill" style={{ color: '#A08336' }}></i>
                            <i class="bi bi-pencil-square" style={{ color: '#A08336' }}></i>
                            <i class="bi bi-eye-fill" style={{ color: '#A08336' }}></i>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Larry the Bird</td>
                          <td>Mahmudi</td>
                          <td>25 Januari 2022</td>
                          <td>
                            <i class="bi bi-trash-fill" style={{ color: '#A08336' }}></i>
                            <i class="bi bi-pencil-square" style={{ color: '#A08336' }}></i>
                            <i class="bi bi-eye-fill" style={{ color: '#A08336' }}></i>
                          </td>
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
