import {
  MDBContainer,
  MDBRow,
  MDBBtn,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBListGroup,
  MDBListGroupItem,
  MDBCardImage,
  MDBCardText,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import { Chat } from 'react-bootstrap-icons';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LandingForum = () => {
  const [forum, setForum] = useState([]);
  const [basicModal, setBasicModal] = useState(false);
  const toggleOpen = () => setBasicModal(!basicModal);

  const [centredModal, setCentredModal] = useState(false);
  const toggleOpen2 = () => setCentredModal(!centredModal);

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
            <MDBBtn onClick={toggleOpen} className="col-12" style={{ backgroundColor: '#A08336', fontSize: '16px', fontWeight: 'normal', border: '#A08336', borderRadius: '10px', marginBottom: '30px' }}>
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
                        <Chat onClick={toggleOpen2} />
                      </MDBCol>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              ))}
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Create a post</MDBModalTitle>
              <MDBBtn className="btn-close" color="none" onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div className="form-floating">
                <textarea className="form-control" placeholder="Tinggalkan komentar di sini" id="floatingTextarea2" style={{ height: '100px' }}></textarea>
                <label htmlFor="floatingTextarea2">Tanyakan sesuatu pada rangers</label>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleOpen}>
                Close
              </MDBBtn>
              <MDBBtn>Send!</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      <MDBModal tabIndex="-1" open={centredModal} setOpen={setCentredModal}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Add Comment</MDBModalTitle>
              <MDBBtn className="btn-close" color="none" onClick={toggleOpen2}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form>
                <div className="mb-3">
                  <div className="col-auto">
                    <h5>Daffa</h5>
                    <p className="text-secondary">@daffamuliya</p>
                  </div>
                  <div className="col-12 mb-3 mt-1">
                    <p className="komentar">Absen dong yang di rektorat!</p>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">
                    Replying to @daffamuliya
                  </label>
                  <textarea className="form-control" id="message-text"></textarea>
                </div>
              </form>{' '}
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn>Reply</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </section>
  );
};

export default LandingForum;
