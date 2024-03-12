import React, { Component } from 'react';
import NormalNavbar from '../components/NormalNavbar';
import Banner from '../components/Banner';
import LandingEcom from '../components/LandingEcom';
import LandingBlog from '../components/LandingBlog';
import Footer from '../components/Footer';
import LandingForum from '../components/LandingForum';
import { MDBContainer, MDBRow, MDBBtn } from 'mdb-react-ui-kit';

export default class Landing extends Component {
  render() {
    return (
      <div>
        <NormalNavbar />
        <Banner />
        <LandingEcom />
        <LandingBlog />
        <MDBContainer>
          {' '}
          <MDBRow>
            <div className="container px-4 px-lg-5 mt-5">
              <div className="row gx-4 gx-lg-5 align-items-center justify-content-between">
                <div className="col-lg-7">
                  <div className="d-flex flex-column align-items-start">
                    <p style={{ fontWeight: 'bold', marginBottom: '0' }}>Forum</p>
                    <h1 className="font-weight-bold mt-3" style={{ fontSize: '35px', fontWeight: 'bold', color: '#A08336', marginBottom: '1rem' }}>
                      Mari Berdiskusi Dengan Para Rangers{' '}
                    </h1>
                    <p className="text-white-75" style={{ color: '#6A6D70', marginBottom: '1rem' }}>
                      Tempat di mana ide-ide segar bertemu dengan pengetahuan mendalam <br /> untuk membantu mengembangkan bisnis kamu
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 mt-5 d-flex justify-content-end">
                  <MDBBtn size="lg" style={{ backgroundColor: 'black', fontSize: '16px', maxWidth: '169px', maxHeight: '42px', fontWeight: 'normal', border: '#A08336', borderRadius: '10px' }}>
                    Lainnya -{'>'}
                  </MDBBtn>
                </div>
              </div>
            </div>
          </MDBRow>
        </MDBContainer>

        <LandingForum />
        <br></br>
        <br></br>
        <br></br>
        <Footer />
      </div>
    );
  }
}
