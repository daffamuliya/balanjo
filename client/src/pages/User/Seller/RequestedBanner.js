import React from 'react';
import Card from 'react-bootstrap/Card';
import SellerNavbar from '../../../components/SellerNavbar';
import SidebarSeller from '../../../components/SidebarSeller';
import { MDBCol } from 'mdb-react-ui-kit';
import Table from 'react-bootstrap/Table';

const RequestedBanner = () => {
  return (
    <div>
      <SellerNavbar />
      <div className="main">
        <SidebarSeller />
        <div className="container mt-5">
          <h5 className="title" style={{ color: '#A08336' }}>
            Requested Banner
          </h5>
          <MDBCol size="2" className="mt-3 mb-3">
            <a href="upload-banner" className="btn btn-primary" style={{ backgroundColor: '#A08336', fontSize: '16px', maxWidth: '158px', maxHeight: '42px', textAlign: 'center', border: 'black', display: 'inline-block' }}>
              + Tambah
            </a>
          </MDBCol>
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
};

export default RequestedBanner;
