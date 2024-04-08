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
  const [user_id] = useState('2');
  const [user] = useState('Daffa');
  const [konten, setKonten] = useState('');
  const [komentar, setKomentar] = useState('');
  const [selectedForumId, setSelectedForumId] = useState(null);

  const handleButtonClick = (forum_id) => {
    setSelectedForumId(forum_id);
  };

  const saveKomentar = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/forum/addComment', {
        user_id,
        forum_id: selectedForumId, // Gunakan selectedForumId dari state
        user,
        komentar,
      });
      setKomentar('');
      setScrollableModal(false); // Menutup modal setelah komentar dikirim
    } catch (error) {
      console.log(error);
    }
  };

  const saveForum = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/forum/addForum', {
        user_id,
        user,
        konten,
      });
      toggleOpen();
    } catch (error) {
      console.log(error);
    }
  };

  const [forum, setForum] = useState([]);
  const [basicModal, setBasicModal] = useState(false);
  const toggleOpen = () => setBasicModal(!basicModal);
  const handleCloseModal = () => {
    toggleOpen();
    window.location.reload();
  };

  const [scrollableModal, setScrollableModal] = useState(false);
  const [forumDetail, setForumDetail] = useState(null);
  const [statusDetail, setStatusDetail] = useState(null);

  useEffect(() => {
    getForum();
  }, []);

  const getForum = async () => {
    const response = await axios.get('http://localhost:3000/forum');
    setForum(response.data.items);
  };

  const loadForumDetail = async (id) => {
    try {
      //Response konten forum
      const response2 = await axios.get(`http://localhost:3000/forum/${id}`);
      const statusDetailData = Array.isArray(response2.data.items) ? response2.data.items : [response2.data.items];
      setStatusDetail(statusDetailData);

      //Response konten komentar
      await handleButtonClick(id);
      const response = await axios.get(`http://localhost:3000/forum/comment/${id}`);
      const forumDetailData = Array.isArray(response.data.items) ? response.data.items : [response.data.items];
      setForumDetail(forumDetailData);

      console.log('statusDetail:', statusDetailData);
      console.log('forumDetail:', forumDetailData);

      setScrollableModal(true);
    } catch (error) {
      console.log(error);
    }
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
                        <Chat onClick={() => loadForumDetail(item.id)} style={{ cursor: 'pointer' }} />
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
            <form onSubmit={saveForum}>
              <MDBModalBody>
                <div className="form-floating">
                  <textarea value={konten} onChange={(e) => setKonten(e.target.value)} className="form-control" placeholder="Tinggalkan komentar di sini" id="floatingTextarea2" style={{ height: '100px' }}></textarea>
                  <label htmlFor="floatingTextarea2">Tanyakan sesuatu pada rangers</label>
                </div>
              </MDBModalBody>
              <MDBModalFooter>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleCloseModal}
                  style={{ backgroundColor: '#A08336', fontSize: '16px', maxWidth: '158px', maxHeight: '42px', textAlign: 'center', border: 'black', float: 'right' }}
                >
                  Send!
                </button>
              </MDBModalFooter>
            </form>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      <MDBModal open={scrollableModal} setOpen={setScrollableModal} tabIndex="-1">
        <MDBModalDialog centered scrollable>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Add Comment</MDBModalTitle>
              <MDBBtn className="btn-close" color="none" onClick={() => setScrollableModal(!scrollableModal)}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              {statusDetail && ( //bagian disini belom
                <form onSubmit={saveKomentar}>
                  <div className="mb-3">
                    <div className="col-auto">
                      <MDBCardText className="mt-2" style={{ color: 'black', fontSize: '18px', fontWeight: 'bold' }}>
                        {statusDetail.user}
                      </MDBCardText>
                    </div>
                    <div className="col-12 mb-3 mt-1">
                      <p className="komentar" style={{ color: 'black', fontSize: '20px' }}>
                        {statusDetail.konten}
                      </p>
                    </div>
                  </div>
                  <div className="mb-5">
                    <label htmlFor="message-text" className="col-form-label">
                      Replying to Daffa
                    </label>
                    <textarea value={komentar} onChange={(e) => setKomentar(e.target.value)} className="form-control" id="message-text"></textarea>
                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#A08336', fontSize: '16px', maxWidth: '158px', maxHeight: '42px', textAlign: 'center', border: 'black', float: 'right', marginTop: '15px' }}>
                      Send Reply
                    </button>
                  </div>
                </form>
              )}

              <div className="mb-3">
                <label className="col-form-label">Comments</label>
                {Array.isArray(forumDetail) &&
                  forumDetail.map((detail) => (
                    <MDBCard className="mb-3" key={detail.id}>
                      {' '}
                      {/* Pindahkan key ke elemen MDBCard */}
                      <div className="d-flex">
                        <MDBCardImage className="me-2 mt-2 ms-2" src="/img/profile.png" style={{ width: '10%', height: '13%' }} />
                        <MDBCol>
                          <MDBCardText className="mt-2 ms-2 " style={{ color: 'black', fontSize: '16px', fontWeight: 'bold' }}>
                            {detail.user}
                          </MDBCardText>
                          <MDBCardText className="mb-3 ms-2" style={{ color: 'black', fontSize: '16px', marginTop: '-15px' }}>
                            {detail.komentar}
                          </MDBCardText>
                        </MDBCol>
                      </div>
                    </MDBCard>
                  ))}
              </div>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </section>
  );
};

export default LandingForum;
