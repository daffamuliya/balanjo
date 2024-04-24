import React, { useEffect, useState } from 'react';
import NormalNavbar from '../../components/NormalNavbar';
import Footer from '../../components/Footer';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCardImage } from 'mdb-react-ui-kit';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import RekomendasiEcom from '../../components/RecomendasiEcom';

const DetailProduk = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = () => {
    if (quantity <= 1) {
      return setQuantity(quantity + 0);
    } else {
      setQuantity(quantity - 1);
    }
  };

  const { id } = useParams();
  const [produk, setProduk] = useState(null);
  useEffect(() => {
    const fetchProduk = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/marketplace/${id}/produk`);
        if (response.data.items) {
          const fetchedProduk = response.data.items;
          localStorage.setItem('savedProduk', JSON.stringify(fetchedProduk));
          setProduk(fetchedProduk);
        } else {
          console.error('Respon dari server tidak sesuai');
        }
      } catch (error) {
        console.error('Kesalahan saat mengambil data produk:', error);
      }
    };

    fetchProduk();

    return () => {
      if (produk) {
        localStorage.removeItem('savedProduk');
      }
    };
  }, [id, produk]);

  if (produk) {
    return (
      <div>
        <NormalNavbar />
        <MDBContainer>
          <MDBRow className="mt-3 justify-content-center">
            <MDBCol size="12">
              <form className="d-flex">
                <MDBInput wrapperClass="mb-4 w-100" id="formControlLg" type="email" size="lg" style={{ fontSize: '16px' }} placeholder="Search for products..." className="focus-ring focus-ring-light " autoComplete="new-password" />
              </form>
            </MDBCol>
            <MDBCol md={12} className="mb-4">
              <MDBCard>
                <MDBCardBody className="d-md-flex justify-content-between align-items-center">
                  <MDBCol md={6} className="mb-md-0">
                    <MDBCardImage src={produk.gambar} position="top" alt="..." />
                  </MDBCol>
                  <MDBCol md={6} className="ms-md-3 mt-3 mt-md-0">
                    <div>
                      <MDBCardTitle style={{ fontSize: '28px', fontWeight: 'bold' }}>{produk.nama}</MDBCardTitle>
                      <MDBCardText style={{ color: '#2D2D2D', fontSize: '16px', opacity: '60%', paddingRight: '5px' }}>{produk.deskripsi}</MDBCardText>
                      <MDBCardTitle style={{ fontSize: '22px', fontWeight: 'bold' }}>Rp{produk.harga}</MDBCardTitle>
                      <hr className="my-4 me-4" />
                      <div className="mb-3 me-4">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                          Variasi
                        </label>
                        <select className="form-select" aria-label="Default select example" placeholder="Select size">
                          <option selected>Select Variant</option>
                          <option value="1">Oversize</option>
                          <option value="2">Normal Size</option>
                        </select>
                      </div>
                      <div className="input-group mb-3 me-4" style={{ paddingRight: '20px' }}>
                        <button className="btn btn-secondary" type="button" onClick={handleQuantity} style={{ backgroundColor: '#fff', border: '1px solid #ccc', color: 'black' }}>
                          -
                        </button>
                        <input type="text" className="form-control text-center font-weight-bold" name="quantity" value={quantity} placeholder={quantity} disabled style={{ backgroundColor: '#fff', border: '1px solid #ccc' }} />
                        <button className="btn btn-secondary" type="button" onClick={() => setQuantity(quantity + 1)} style={{ backgroundColor: '#fff', border: '1px solid #ccc', color: 'black' }}>
                          +
                        </button>
                      </div>
                      <div className="mb-3 me-4">
                        <a href="/" className="btn btn-primary" style={{ backgroundColor: '#A08336', fontSize: '16px', textAlign: 'center', border: 'black', width: '100%' }}>
                          Tambah Keranjang
                        </a>
                      </div>
                    </div>
                  </MDBCol>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <RekomendasiEcom />
          </MDBRow>
        </MDBContainer>
        <br></br>
        <br></br>
        <br></br>
        <Footer />
      </div>
    );
  } else {
    return <div>Loading..</div>;
  }
};

export default DetailProduk;
