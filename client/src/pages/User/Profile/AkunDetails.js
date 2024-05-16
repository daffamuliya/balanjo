import React, { useEffect, useState } from 'react';
import UserNavbar from '../../../components/UserNavbar';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import SidebarAkun from '../../../components/SidebarAkun';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../../../features/authSlice';

const AkunDetails = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate('/login');
    }
  }, [isError, navigate]);

  const handleEditProfileClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveChanges = () => {
    setShowModal(false);
  };

  return (
    <div>
      <UserNavbar />
      <div className="main">
        <SidebarAkun />
        <div className="container mt-5 ">
          <Card>
            <Card.Body>
              <section className="blog">
                <div className="row">
                  <h2 className="title" style={{ fontWeight: 'bold' }}>
                    Account Details
                  </h2>
                  <div className="col-12 mb-4 mt-4">
                    <form>
                      <div className="mb-3">
                        <label className="form-label">FULL NAME *</label>
                        <input type="text" className="form-control" disabled placeholder={user && user.name} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">USERNAME *</label>
                        <input type="text" className="form-control" disabled placeholder={user && user.username} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">EMAIL *</label>
                        <input type="text" className="form-control" disabled placeholder={user && user.email} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">HANDPHONE *</label>
                        <input type="text" className="form-control" disabled placeholder={user && user.no_telp} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">ALAMAT *</label>
                        <input type="text" className="form-control" disabled placeholder={user && user.alamat} />
                      </div>
                    </form>
                    <button
                      type="button"
                      className="btn btn-primary"
                      style={{ backgroundColor: '#A08336', fontSize: '16px', maxWidth: '158px', maxHeight: '42px', textAlign: 'center', border: 'black', float: 'right' }}
                      onClick={handleEditProfileClick}
                    >
                      Edit Profile
                    </button>
                  </div>
                  <h2 className="title" style={{ fontWeight: 'bold' }}>
                    Change Password
                  </h2>
                  <div className="col-12 mb-4 mt-4">
                    <form>
                      <div className="mb-3">
                        <label className="form-label">OLD PASSWORD</label>
                        <input type="password" className="form-control" placeholder="Old Password" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">NEW PASSWORD</label>
                        <input type="password" className="form-control" placeholder="New Password" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">REPEAT NEW PASSWORD</label>
                        <input type="password" className="form-control" placeholder="Repeat New Password" />
                      </div>
                      <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#A08336', fontSize: '16px', maxWidth: '158px', maxHeight: '42px', textAlign: 'center', border: 'black', float: 'right' }}>
                        Save Changes
                      </button>
                    </form>
                  </div>
                </div>
              </section>
            </Card.Body>
          </Card>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label className="form-label">FULL NAME </label>
              <input type="text" className="form-control" defaultValue={user && user.name} disabled />
            </div>
            <div className="mb-3">
              <label className="form-label">USERNAME </label>
              <input type="text" className="form-control" defaultValue={user && user.username} disabled />
            </div>
            <div className="mb-3">
              <label className="form-label">EMAIL </label>
              <input type="email" className="form-control" defaultValue={user && user.email} disabled />
            </div>
            <div className="mb-3">
              <label className="form-label">HANDPHONE </label>
              <input type="text" className="form-control" defaultValue={user && user.no_telp} />
            </div>
            <div className="mb-3">
              <label className="form-label">ALAMAT </label>
              <input type="text" className="form-control" defaultValue={user && user.alamat} />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges} style={{ backgroundColor: '#A08336', border: 'none' }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AkunDetails;
