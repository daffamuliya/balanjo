import React, { useEffect, useState } from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import Card from 'react-bootstrap/Card';
import Sidebar from '../../components/Sidebar';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import CardBody from 'react-bootstrap/esm/CardBody';
import axios from 'axios';

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
          <h5 className="title" style={{ color: '#A08336' }}>
            Dashboard
          </h5>
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
