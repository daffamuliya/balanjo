import React, { useState, useEffect } from 'react';
import SellerNavbar from '../../../components/SellerNavbar';
import Card from 'react-bootstrap/Card';
import SidebarSeller from '../../../components/SidebarSeller';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Table from 'react-bootstrap/Table';
import CardBody from 'react-bootstrap/esm/CardBody';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../../../features/authSlice';

const DashboardSeller = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate('/login');
    }
  }, [isError, navigate]);

  const [transaksi, setTransaksi] = useState([]);
  useEffect(() => {
    getTransaksi();
  }, []);

  const getTransaksi = async () => {
    try {
      const response = await axios.get('http://localhost:3000/marketplace/transaksi');
      setTransaksi(response.data.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };
  return (
    <div>
      <SellerNavbar />
      <div className="main">
        <SidebarSeller />
        <div className="container mt-5">
          <MDBRow>
            <MDBRow className="mt-3 justify-content-center">
              <MDBCol md={6} xs={2} className="ms-auto">
                <Card>
                  <CardBody>
                    <h5>Total Revenue</h5>
                    <h3>Rp3.340.000</h3>
                  </CardBody>
                </Card>
              </MDBCol>
              <MDBCol md={6} xs={2} className="ms-auto">
                <Card>
                  <CardBody>
                    <h5>Total Order</h5>
                    <h3>92</h3>
                  </CardBody>
                </Card>
              </MDBCol>
            </MDBRow>
          </MDBRow>
          <MDBRow className="mt-5">
            <h5 style={{ color: '#A08336' }}>Riwayat Pesanan</h5>
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
                          {Array.isArray(transaksi) &&
                            transaksi.map((item) => (
                              <tr>
                                <td>{item.id}</td>
                                <td>{item.produk.nama}</td>
                                <td>{item.tanggal_pesan}</td>
                                <td>{item.user.name}</td>
                                <td>Rp {item.total}</td>
                                <td>{item.payment}</td>
                                <td>{item.status}</td>
                                <td>
                                  <i class="bi bi-trash-fill" style={{ color: '#A08336', paddingRight: '10px' }}></i>
                                  <i class="bi bi-pencil-square" style={{ color: '#A08336', paddingRight: '10px' }}></i>
                                  <i class="bi bi-eye-fill" style={{ color: '#A08336', paddingRight: '10px' }}></i>{' '}
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

export default DashboardSeller;
