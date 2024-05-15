import React, { useState, useEffect } from 'react';
import SellerNavbar from '../../../components/SellerNavbar';
import Card from 'react-bootstrap/Card';
import SidebarSeller from '../../../components/SidebarSeller';
import { MDBBtn, MDBRow, MDBCol, MDBContainer, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody } from 'mdb-react-ui-kit';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import CardBody from 'react-bootstrap/esm/CardBody';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../../../features/authSlice';

const PesananSeller = () => {
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

  const [TransaksiDetail, setTransaksiDetail] = useState(null);
  const [scrollableModal, setScrollableModal] = useState(false);
  const loadTransaksiDetail = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/marketplace/transaksi/${id}`);
      const TransaksiDetailData = Array.isArray(response.data.data) ? response.data.data : [response.data.data];
      setTransaksiDetail(TransaksiDetailData);
      setScrollableModal(true);
    } catch (error) {
      console.log(error);
    }
  };
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
                                  <i class="bi bi-pencil-square" onClick={() => loadTransaksiDetail(item.id)} style={{ color: '#A08336', paddingRight: '10px', cursor: 'pointer' }}></i>
                                  <i class="bi bi-eye-fill" style={{ color: '#A08336', paddingRight: '10px', cursor: 'pointer' }}></i>
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
      <MDBModal open={scrollableModal} setOpen={setScrollableModal} tabIndex="-1">
        <MDBModalDialog centered scrollable>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Status Transaksi</MDBModalTitle>
              <MDBBtn className="btn-close" color="none" onClick={() => setScrollableModal(!scrollableModal)}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBRow className="justify-content-center">
                <section className="isiblog">
                  {Array.isArray(TransaksiDetail) &&
                    TransaksiDetail.map((detail) => (
                      <MDBContainer key={detail.id}>
                        <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                          <div className="col-lg-12 ">
                            <p style={{ color: 'black', textAlign: 'justify', fontSize: '16px' }}>
                              Nama Produk : <br /> {detail.produk.nama}
                            </p>{' '}
                            <hr />
                            <p style={{ color: 'black', marginTop: '5px', textAlign: 'justify', fontSize: '16px' }}>
                              Customer : <br /> {detail.user.name}
                            </p>{' '}
                            <hr />
                            <p style={{ color: 'black', marginTop: '5px', textAlign: 'justify', fontSize: '16px' }}>
                              Payment : <br /> {detail.payment}
                            </p>{' '}
                            <hr />
                            <p style={{ color: 'black', marginTop: '5px', textAlign: 'justify', fontSize: '16px' }}>Status :</p>
                            <select className="form-select" aria-label="Default select example">
                              <option selected>{detail.status}</option>
                              <option value="1">Dalam Pengiriman</option>
                              <option value="2">Ditolak</option>
                            </select>
                            <button className="btn btn-primary" style={{ backgroundColor: '#A08336', fontSize: '16px', textAlign: 'center', border: 'black', width: '100%', marginTop: '20px' }}>
                              Simpan perubahan status
                            </button>
                          </div>
                        </div>
                      </MDBContainer>
                    ))}
                </section>
              </MDBRow>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
};

export default PesananSeller;
