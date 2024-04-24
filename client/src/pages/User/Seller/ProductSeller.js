import SellerNavbar from '../../../components/SellerNavbar';
import Card from 'react-bootstrap/Card';
import SidebarSeller from '../../../components/SidebarSeller';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Table from 'react-bootstrap/Table';
import CardBody from 'react-bootstrap/esm/CardBody';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductSeller = () => {
  const [marketplace, setMarketplace] = useState([]);

  useEffect(() => {
    getMarketplace();
  }, []);

  const getMarketplace = async () => {
    const response = await axios.get('http://localhost:3000/marketplace');
    setMarketplace(response.data.items);
  };

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
                          {Array.isArray(marketplace) &&
                            marketplace.map((item) => (
                              <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nama}</td>
                                <td>{item.stok}</td>
                                <td> {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.harga)}</td>
                                <td>null</td>
                                <td>{item.deskripsi}</td>
                                <td>
                                  <i class="bi bi-trash-fill" style={{ color: '#A08336', paddingRight: '10px' }}></i>
                                  <i class="bi bi-pencil-square" style={{ color: '#A08336', paddingRight: '10px' }}></i>
                                  <i class="bi bi-eye-fill" style={{ color: '#A08336', paddingRight: '10px' }}></i>
                                </td>
                              </tr>
                            ))}
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
};

export default ProductSeller;
