import React, { Component } from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import Card from 'react-bootstrap/Card';
import Sidebar from '../../components/Sidebar';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import CardBody from 'react-bootstrap/esm/CardBody';

export default class Landing extends Component {
  render() {
    return (
      <div>
        <AdminNavbar />
        <div className="main">
          <Sidebar />
          <div className="container mt-5">
            <h1 className="title" style={{ color: '#A08336', fontWeight: 'bold' }}>
              Dashboard
            </h1>
            <MDBRow className="mt-3 justify-content-center">
              <MDBCol md={3} xs={2} className="ms-auto">
                <Card>
                  <CardBody>
                    <h5>Total User</h5>
                    <h3>341</h3>
                  </CardBody>
                </Card>
              </MDBCol>
              <MDBCol md={3} xs={2} className="ms-auto">
                <Card>
                  <CardBody>
                    <h5>Total Seller</h5>
                    <h3>341</h3>
                  </CardBody>
                </Card>
              </MDBCol>
              <MDBCol md={3} xs={2} className="ms-auto">
                <Card>
                  <CardBody>
                    <h5>Total Blog</h5>
                    <h3>341</h3>
                  </CardBody>
                </Card>
              </MDBCol>
              <MDBCol md={3} xs={2} className="ms-auto">
                <Card>
                  <CardBody>
                    <h5>Total Forum</h5>
                    <h3>341</h3>
                  </CardBody>
                </Card>
              </MDBCol>
            </MDBRow>
          </div>
        </div>
      </div>
    );
  }
}
