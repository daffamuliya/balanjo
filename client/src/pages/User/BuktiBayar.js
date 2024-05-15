import React, { useState, useEffect } from 'react';
import NormalNavbar from '../../components/NormalNavbar';
import Footer from '../../components/Footer';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMe } from '../../features/authSlice';
import { MDBContainer, MDBRow, MDBCol, MDBCardBody, MDBCard, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';

export const BuktiBayar = () => {
  const { user } = useSelector((state) => state.auth);
  const id_user = user ? user.id : null;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate('/login');
    }
  }, [isError, navigate]);

  const [total] = useState(650000);
  const [payment, setPayment] = useState('');
  const [status] = useState('Sudah Bayar');
  const [bukti_transfer, setBuktiTransfer] = useState(null);

  const loadImage = (e) => {
    const image = e.target.files[0];
    setBuktiTransfer(image);
  };

  useEffect(() => {}, []);

  const saveBukti = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('id_user', id_user);
    formData.append('total', total);
    formData.append('payment', payment);
    formData.append('status', status);
    formData.append('bukti_transfer', bukti_transfer);
    try {
      const response = await axios.post('http://localhost:3000/marketplace/transfer', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 200) {
        swal({
          icon: 'success',
          title: 'Sukses',
          text: 'Bukti Transfer berhasil diunggah!',
        }).then(() => {
          navigate('/home');
        });
      } else {
        throw new Error('Gagal mengunggah bukti');
      }
    } catch (error) {
      console.log(error);
      swal({
        icon: 'error',
        title: 'Gagal',
        text: 'Gagal mengunggah bukti. Silakan coba lagi.',
      });
    }
  };
  return (
    <div>
      <NormalNavbar />
      <MDBContainer>
        <MDBRow className="mt-3 justify-content-center">
          <MDBCol size="12">
            <h2 className="text-center mb-3 mt-3" style={{ fontWeight: 'bold', color: '#A08336' }}>
              Upload Bukti Pembayaran
            </h2>
            <MDBRow className="pt-3">
              <MDBCol md={4} xs={8} className="mt-3">
                <MDBCard style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', border: 'none', Width: '390px', Height: '239px' }} className="text-center">
                  <MDBCardImage src="/img/mandiri.png" className="mx-auto mt-5" alt="..." style={{ width: '30%' }} />
                  <MDBCardBody>
                    <MDBCardText className="mt-3 mb-3">PT BALANJO INDONESIA</MDBCardText>
                    <br></br>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md={4} xs={8} className="mt-3">
                <MDBCard style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', border: 'none', Width: '390px', Height: '239px' }} className="text-center">
                  <MDBCardImage src="/img/qris.png" className="mx-auto mt-5" alt="..." style={{ width: '30%' }} />
                  <MDBCardBody>
                    <MDBCardText className="mt-3 mb-3">PT BALANJO INDONESIA</MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md={4} xs={8} className="mt-3">
                <MDBCard style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', border: 'none', Width: '390px', Height: '239px' }} className="text-center">
                  <MDBCardImage src="/img/bca.png" className="mx-auto mt-5" alt="..." style={{ width: '30%' }} />
                  <MDBCardBody>
                    <MDBCardText className="mt-3 mb-3">PT BALANJO INDONESIA</MDBCardText>
                    <br></br>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md={4} xs={8} className="mt-3">
                <MDBCard style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', border: 'none', Width: '390px', Height: '239px' }} className="text-center">
                  <MDBCardImage src="/img/dana.png" className="mx-auto mt-5" alt="..." style={{ width: '30%' }} />
                  <MDBCardBody>
                    <MDBCardText className="mt-3 mb-3">PT BALANJO INDONESIA</MDBCardText>
                    <br></br>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md={4} xs={8} className="mt-3">
                <MDBCard style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', border: 'none', Width: '390px', Height: '239px' }} className="text-center">
                  <MDBCardImage src="/img/shoppee.png" className="mx-auto mt-5" alt="..." style={{ width: '30%' }} />
                  <MDBCardBody>
                    <MDBCardText className="mt-3 mb-3">PT BALANJO INDONESIA</MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md={4} xs={8} className="mt-3">
                <MDBCard style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', border: 'none', Width: '390px', Height: '239px' }} className="text-center">
                  <MDBCardImage src="/img/gopay.png" className="mx-auto mt-5" alt="..." style={{ width: '30%' }} />
                  <MDBCardBody>
                    <MDBCardText className="mt-3 mb-3">PT BALANJO INDONESIA</MDBCardText>
                    <br></br>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <MDBCard className="mt-4">
              <MDBCardBody>
                {' '}
                <div class="row">
                  <div class="col-12 mb-4">
                    <h3 className="text-center mb-3 mt-3" style={{ fontWeight: 'bold' }}>
                      Informasi Pelanggan
                    </h3>
                    <form onSubmit={saveBukti}>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label" style={{ fontWeight: 'bold' }}>
                          Nominal Pembayaran
                        </label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Rp650.000" disabled />
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label" style={{ fontWeight: 'bold' }}>
                          Sumber Transfer
                        </label>
                        <select className="form-select" aria-label="Default select example" placeholder="Select size" value={payment} onChange={(e) => setPayment(e.target.value)}>
                          <option value="">Pilih Sumber</option>
                          <option value="E Wallet">E Wallet</option>
                          <option value="Transfer Bank">Transfer Bank</option>
                        </select>
                      </div>
                      {/* <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label" style={{ fontWeight: 'bold' }}>
                          Tujuan Pembayaran
                        </label>
                        <select className="form-select" aria-label="Default select example" placeholder="Select size">
                          <option value="">Pilih Tujuan</option>
                          <option value="1">Gopay</option>
                          <option value="2">Shoppepay</option>
                          <option value="3">Dana</option>
                          <option value="4">Bank Nagari</option>
                          <option value="5">Bank BNI</option>
                          <option value="6">Bank Mandiri</option>
                          <option value="7">Lainnya</option>
                        </select>
                      </div> */}
                      <div class="mb-3">
                        <label class="form-label" for="customFile" style={{ fontWeight: 'bold' }}>
                          Upload Bukti
                        </label>
                        <input type="file" onChange={loadImage} className="form-control" id="bukti_transfer" name="bukti_transfer" required />
                      </div>
                      <button type="submit" class="btn btn-primary" style={{ marginTop: '20px', backgroundColor: '#A08336', fontSize: '16px', maxWidth: '180px', maxHeight: '42px', textAlign: 'center', border: 'black', float: 'right' }}>
                        Konfirmasi
                      </button>
                    </form>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
};

export default BuktiBayar;
