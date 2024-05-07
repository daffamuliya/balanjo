import React from 'react';
import NormalNavbar from '../../components/NormalNavbar';
import Footer from '../../components/Footer';
import { MDBRow, MDBCol, MDBContainer, MDBInput } from 'mdb-react-ui-kit';
import LandingBlog from '../../components/LandingBlog';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

export default function Landing() {
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const handleCreateArticle = () => {
    if (user) {
      navigate('/upload-blog');
    } else {
      swal({
        title: 'Oops!',
        text: 'Silakan login terlebih dahulu untuk membuat artikel.',
        icon: 'warning',
        buttons: ['Batal', 'Login'],
      }).then((isConfirmed) => {
        if (isConfirmed) {
          navigate('/login');
        }
      });
    }
  };

  return (
    <div>
      <NormalNavbar />
      <MDBContainer>
        <MDBRow className="mt-3 justify-content-center">
          <MDBCol md={12} xs={2} className="ms-auto">
            <img src="/img/banner-blog.png" className="hover-shadow" alt="" style={{ width: '100%' }} />
          </MDBCol>
          <MDBCol size="10" className="mt-3">
            <form className="d-flex">
              <MDBInput wrapperClass="mb-4 w-100" id="formControlLg" type="email" size="lg" style={{ fontSize: '16px' }} placeholder="Search for products..." className="focus-ring focus-ring-light " autoComplete="new-password" />
            </form>
          </MDBCol>
          <MDBCol size="2" className="mt-3">
            {user ? (
              <button className="btn btn-primary" style={{ backgroundColor: '#A08336', fontSize: '16px', textAlign: 'center', border: 'black', width: '100%' }} onClick={handleCreateArticle}>
                Tambah Keranjang
              </button>
            ) : (
              <button
                className="btn btn-primary"
                style={{ backgroundColor: '#A08336', fontSize: '16px', textAlign: 'center', border: 'black', width: '100%' }}
                onClick={() =>
                  swal({
                    icon: 'warning',
                    title: 'Oops!',
                    text: 'Anda belum login. Silakan login terlebih dahulu untuk menambahkan produk ke keranjang.',
                  })
                }
              >
                Tambah Keranjang
              </button>
            )}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <LandingBlog />
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}
