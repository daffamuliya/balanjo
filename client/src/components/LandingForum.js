import { MDBContainer, MDBRow, MDBBtn, MDBCol, MDBCard, MDBCardBody, MDBListGroup, MDBListGroupItem, MDBCardImage, MDBCardText } from 'mdb-react-ui-kit';
import { Chat } from 'react-bootstrap-icons';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LandingForum = () => {
  const [forum, setForum] = useState([]);

  useEffect(() => {
    getForum();
  }, []);

  const getForum = async () => {
    const response = await axios.get('http://localhost:3000/forum');
    setForum(response.data.items);
  };
  return (
    <section className="landingsocial">
      <MDBContainer>
        <MDBRow className="mt-4">
          <MDBCol md={4} xs={12}>
            <MDBBtn size="lg" className="col-12" style={{ backgroundColor: '#A08336', fontSize: '16px', fontWeight: 'normal', border: '#A08336', borderRadius: '10px', marginBottom: '30px' }}>
              Mulai Diskusi Baru
            </MDBBtn>
            <p className="text-white-75 d-none d-md-block" style={{ color: '#6A6D70', marginBottom: '1rem' }}>
              Kategori{' '}
            </p>
            <MDBListGroup style={{ minWidth: '22rem', paddingBottom: '35px' }} className="d-none d-md-block">
              <MDBListGroupItem noBorders style={{ backgroundColor: 'transparent' }}>
                - Campus Life
              </MDBListGroupItem>
              <MDBListGroupItem noBorders style={{ backgroundColor: 'transparent' }}>
                - Tech
              </MDBListGroupItem>
              <MDBListGroupItem noBorders style={{ backgroundColor: 'transparent' }}>
                - Kesehatan
              </MDBListGroupItem>
              <MDBListGroupItem noBorders style={{ backgroundColor: 'transparent' }}>
                - Informasi
              </MDBListGroupItem>
              <MDBListGroupItem noBorders style={{ backgroundColor: 'transparent' }}>
                - Bisnis
              </MDBListGroupItem>
            </MDBListGroup>
            <p className="text-white-75 d-none d-md-block" style={{ color: '#6A6D70', marginBottom: '1rem' }}>
              Trending{' '}
            </p>
            <MDBListGroup style={{ minWidth: '22rem', backgroundColor: 'transparent' }} className="d-none d-md-block">
              <MDBListGroupItem className="d-flex justify-content-between align-items-start" noBorders style={{ backgroundColor: 'transparent' }}>
                <div className="me-auto">
                  <div className="fw-bold">Info tempat nongkrong di Unand dong</div>14 balasan
                  <hr />
                </div>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-start" noBorders style={{ backgroundColor: 'transparent' }}>
                <div className="me-auto">
                  <div className="fw-bold">Guyss, ada info jadwal wisuda ga?</div>12 balasan
                  <hr />
                </div>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-start" noBorders style={{ backgroundColor: 'transparent' }}>
                <div className="me-auto">
                  <div className="fw-bold">Rekomen beli hadiah buat sempro</div>10 balasan
                  <hr />
                </div>
              </MDBListGroupItem>
            </MDBListGroup>
          </MDBCol>
          <MDBCol md={8} xs={12}>
            {Array.isArray(forum) &&
              forum.map((item) => (
                <MDBCard key={item.id} className="mb-3 ">
                  <MDBCardBody>
                    {' '}
                    <div className="d-flex">
                        <MDBCardImage className="me-2 mt-2" src="/img/profile.png" style={{ width: '8%', height: '13%' }} />
                      <MDBCol>
                        <MDBCardText className="mt-2 ms-2" style={{ color: 'black', fontSize: '18px', fontWeight: 'bold' }}>
                          {item.user}
                        </MDBCardText>
                        <MDBCardText className=" ms-2" style={{ color: 'black', fontSize: '18px', marginTop: '-15px' }}>
                          {item.konten}
                        </MDBCardText>
                        <Chat />
                      </MDBCol>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              ))}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default LandingForum;
