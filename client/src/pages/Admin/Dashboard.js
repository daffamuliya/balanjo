import React, { useEffect, useState } from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import Card from 'react-bootstrap/Card';
import Sidebar from '../../components/Sidebar';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import CardBody from 'react-bootstrap/esm/CardBody';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const Dashboard = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalBlog, setTotalBlog] = useState(0);
  const [totalForum, setTotalForum] = useState(0);

  useEffect(() => {
    getTotalUsers();
    getTotalBlog();
    getTotalForum();
  }, []);
  const getTotalUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/daftaruser/user/total');
      setTotalUsers(response.data.totalUsers);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const getTotalBlog = async () => {
    try {
      const response = await axios.get('http://localhost:3000/blog/totalblog');
      setTotalBlog(response.data.totalBlog);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const getTotalForum = async () => {
    try {
      const response = await axios.get('http://localhost:3000/forum/total/totalforum');
      setTotalForum(response.data.totalForum);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div>
      <AdminNavbar />
      <div className="main">
        <Sidebar />
        <div className="container mt-5">
          <MDBRow>
            <MDBRow className="mt-3 justify-content-center">
              <MDBCol md={3} xs={2} className="ms-auto">
                <Card>
                  <CardBody>
                    <h5>Total User</h5>
                    <h3>{totalUsers}</h3>
                  </CardBody>
                </Card>
              </MDBCol>
              <MDBCol md={3} xs={2} className="ms-auto">
                <Card>
                  <CardBody>
                    <h5>Total Banner</h5>
                    <h3>341</h3>
                  </CardBody>
                </Card>
              </MDBCol>
              <MDBCol md={3} xs={2} className="ms-auto">
                <Card>
                  <CardBody>
                    <h5>Total Blog</h5>
                    <h3>{totalBlog}</h3>
                  </CardBody>
                </Card>
              </MDBCol>
              <MDBCol md={3} xs={2} className="ms-auto">
                <Card>
                  <CardBody>
                    <h5>Total Forum</h5>
                    <h3>{totalForum}</h3>
                  </CardBody>
                </Card>
              </MDBCol>
            </MDBRow>
          </MDBRow>
          <MDBRow className="mt-5">
            <h5 style={{ color: '#A08336' }}>Active Banner</h5>
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
                        {/* <tbody>
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
                        </tbody> */}
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

export default Dashboard;
