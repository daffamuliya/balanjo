import React, { useEffect, useState } from 'react';
import NormalNavbar from '../../components/NormalNavbar';
import Footer from '../../components/Footer';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBCardBody, MDBCard, MDBCardTitle, MDBCardSubTitle, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';

const DetailOrder = () => {
  const [orderDetail, setOrderDetail] = useState(null);
  const user_id = '2';
  const [totalBayar, setTotalBayar] = useState(0);
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchOrderDetail();
    getUser();
  }, []);

  const getUser = async () => {
    const response = await axios.get(`http://localhost:3000/daftaruser/${user_id}`);
    setUser(response.data.items);
    console.log(response.data.items);
  };

  const fetchOrderDetail = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/marketplace/${user_id}/getOrderDetail`);
      if (response.data.data) {
        setOrderDetail(response.data.data);
        const totalBayar = response.data.data.reduce((acc, item) => acc + item.total, 0);
        setTotalBayar(totalBayar);
      } else {
        console.error('Data detail pemesanan tidak ditemukan');
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat mengambil data detail pemesanan:', error);
    }
  };

  const deleteProduk = async (id) => {
    try {
      swal({
        title: 'Anda yakin?',
        text: 'Anda tidak akan dapat mengembalikan produk ini!',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      }).then(async (willDelete) => {
        if (willDelete) {
          await axios.delete(`http://localhost:3000/marketplace/deleteOrderDetail/${id}`);
          fetchOrderDetail();
          swal('Produk berhasil dihapus!', {
            icon: 'success',
          });
        } else {
          swal('Produk Anda tidak jadi dihapus!');
        }
      });
    } catch (error) {
      console.error('Error deleting produk:', error);
    }
  };
  return (
    <div>
      <NormalNavbar />
      <MDBContainer>
        <MDBRow className="mt-3 justify-content-center">
          <MDBCol size="12">
            <h2 className="text-center mb-3 mt-3" style={{ fontWeight: 'bold', color: '#A08336' }}>
              Detail Pemesanan
            </h2>

            <MDBCard className="mb-3">
              <MDBCardBody>
                <MDBCardBody>
                  <MDBCardTitle>{user.name}</MDBCardTitle>
                  <MDBCardSubTitle>{user.email}</MDBCardSubTitle>
                  <MDBCardText>{user.no_telp}</MDBCardText>
                  <MDBCardText>{user.alamat}</MDBCardText>
                </MDBCardBody>
              </MDBCardBody>
            </MDBCard>
            {Array.isArray(orderDetail) &&
              orderDetail.map((item) => (
                <MDBCard key={item.id} className="mt-1">
                  <MDBRow className="g-0">
                    <MDBCol size={10}>
                      <div className="d-flex align-items-center">
                        <img src={item.produk.gambar} alt="" style={{ width: '100px', height: '100px' }} />
                        <div className="ms-3">
                          <p className="fw-bold mb-1">{item.produk.nama}</p>
                          <p className="text-muted mb-0">Harga : {item.total}</p>
                          <p className="text-muted mb-0">{item.produk.deskripsi}</p>
                        </div>
                      </div>
                    </MDBCol>
                    <MDBCol size={2}>
                      <div className="d-flex align-items-center">
                        <div className="ms-3 mt-5">
                          <i class="bi bi-trash-fill" onClick={() => deleteProduk(item.id)} style={{ color: '#A08336' }}></i>
                        </div>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCard>
              ))}

            <p className="text-center mt-3">Total Bayar</p>
            <h2 className="text-center">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(totalBayar)}</h2>
            <hr className="my-4" />
          </MDBCol>
          <h2 className="text-center mt-3" style={{ fontWeight: 'bold', color: '#A08336' }}>
            Metode Pembayaran
          </h2>
        </MDBRow>
        <MDBRow className="pt-5">
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
          <MDBCol size="12" className="mt-5 text-center">
            <a href="bukti-bayar" className="btn btn-primary" style={{ backgroundColor: '#A08336', fontSize: '16px', maxWidth: '178px', maxHeight: '42px', textAlign: 'center', border: 'black', display: 'inline-block' }}>
              Upload Bukti Bayar
            </a>
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

export default DetailOrder;
