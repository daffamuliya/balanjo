import SellerNavbar from '../../../components/SellerNavbar';
import Card from 'react-bootstrap/Card';
import SidebarSeller from '../../../components/SidebarSeller';
import Table from 'react-bootstrap/Table';
import CardBody from 'react-bootstrap/esm/CardBody';
import React, { useState, useEffect } from 'react';
import { MDBCol, MDBBtn, MDBRow, MDBContainer, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import swal from 'sweetalert';

const ProductSeller = () => {
  const [marketplace, setMarketplace] = useState([]);

  useEffect(() => {
    getMarketplace();
  }, []);

  const getMarketplace = async () => {
    const response = await axios.get('http://localhost:3000/marketplace');
    setMarketplace(response.data.items);
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
          await axios.delete(`http://localhost:3000/marketplace/deleteProduk/${id}`);
          getMarketplace();
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

  const [ProdukDetail, setProdukDetail] = useState(null);
  const [scrollableModal, setScrollableModal] = useState(false);
  const loadProdukDetail = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/marketplace/${id}/produk`);
      const ProdukDetailData = Array.isArray(response.data.items) ? response.data.items : [response.data.items];
      setProdukDetail(ProdukDetailData);
      setScrollableModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <SellerNavbar />
      <div className="main">
        <SidebarSeller />
        <div className="container mt-5">
          <MDBRow className="mt-5">
            <h5 style={{ color: '#A08336' }}>Produk</h5>
            <MDBCol size="2" className="mt-3">
              <a href="upload-produk" className="btn btn-primary" style={{ backgroundColor: '#A08336', fontSize: '16px', maxWidth: '158px', maxHeight: '42px', textAlign: 'center', border: 'black', display: 'inline-block' }}>
                + Tambah
              </a>
            </MDBCol>
            <MDBRow className="mt-3 justify-content-center">
              <MDBCol md={12} xs={2} className="ms-auto">
                <Card>
                  <CardBody>
                    {' '}
                    <div class="row">
                      <Table responsive>
                        <thead>
                          <tr>
                            <th>Produk ID</th>
                            <th>Nama Produk</th>
                            <th>Stok</th>
                            <th>Harga</th>
                            <th>Terjual</th>
                            <th>Deskripsi</th>
                            <th>Aksi</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Array.isArray(marketplace) &&
                            marketplace.map((item) => (
                              <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nama}</td>
                                <td>{item.stok}</td>
                                <td> {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.harga)}</td>
                                <td>null</td>
                                <td>{item.deskripsi}</td>
                                <td>
                                  <i class="bi bi-trash-fill" onClick={() => deleteProduk(item.id)} style={{ color: '#A08336', paddingRight: '10px', cursor: 'pointer' }}></i>
                                  <i class="bi bi-pencil-square" style={{ color: '#A08336', paddingRight: '10px' }}></i>
                                  <i class="bi bi-eye-fill" onClick={() => loadProdukDetail(item.id)} style={{ color: '#A08336', paddingRight: '10px', cursor: 'pointer' }}></i>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </Table>
                    </div>
                  </CardBody>
                </Card>
              </MDBCol>
            </MDBRow>
          </MDBRow>
        </div>
      </div>
      <MDBModal open={scrollableModal} setOpen={setScrollableModal} tabIndex="-1">
        <MDBModalDialog centered scrollable>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Produk Details</MDBModalTitle>
              <MDBBtn className="btn-close" color="none" onClick={() => setScrollableModal(!scrollableModal)}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBRow className="justify-content-center">
                <section className="isiblog">
                  {Array.isArray(ProdukDetail) &&
                    ProdukDetail.map((detail) => (
                      <MDBContainer key={detail.id}>
                        <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center mt-5 text-center">
                          <div className="col-lg-12 ">
                            <img src={detail.gambar} className="hover-shadow" alt="" style={{ width: '100%' }} />
                          </div>
                        </div>
                        <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center mt-5 ">
                          <div className="col-lg-12 ">
                            <h5>
                              Nama Produk : <strong>{detail.nama}</strong>
                            </h5>
                            <h5>
                              Jumlah Stok : <strong>{detail.stok}</strong>
                            </h5>
                            <h5>
                              Harga Produk : <strong>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(detail.harga)}</strong>
                            </h5>
                          </div>
                        </div>
                        <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content ">
                          <div className="col-lg-12 ">
                            <p style={{ color: 'black', marginTop: '25px', textAlign: 'justify', fontSize: '20px' }}>Deskripsi Produk : </p>
                            <p style={{ color: 'black', marginTop: '25px', textAlign: 'justify', fontSize: '20px' }} dangerouslySetInnerHTML={{ __html: detail.deskripsi }}></p>
                          </div>
                        </div>
                      </MDBContainer>
                    ))}
                </section>
              </MDBRow>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
};

export default ProductSeller;
