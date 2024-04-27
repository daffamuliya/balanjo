import React, { useEffect, useState } from 'react';
import NormalNavbar from '../../components/NormalNavbar';
import Footer from '../../components/Footer';
import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const [user_id] = useState('2');
  const [cartItems, setCartItems] = useState([]);

  const handleQuantity = () => {
    if (quantity <= 1) {
      return setQuantity(quantity + 0);
    } else {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/marketplace/${user_id}/getCart`);
        if (response.data.data) {
          setCartItems(response.data.data);
          console.log(response.data.data);
        } else {
          console.error('Data keranjang tidak ditemukan');
        }
      } catch (error) {
        console.error('Terjadi kesalahan saat mengambil data keranjang:', error);
      }
    };

    fetchCartData();
  }, [user_id]);
  return (
    <div>
      <NormalNavbar />
      <MDBContainer>
        <MDBRow className="mt-3 justify-content-center">
          <MDBCol size="12">
            <h2 className="text-center mb-3 mt-3" style={{ fontWeight: 'bold', color: '#A08336' }}>
              Keranjang
            </h2>
            <div className="table-responsive">
              <MDBTable align="middle">
                <MDBTableHead>
                  <tr>
                    <th scope="col">Product</th>
                    <th className="text-center" scope="col">
                      Qty
                    </th>
                    <th scope="col">Price</th>
                    <th scope="col">Subtotal</th>
                    <th scope="col"></th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {Array.isArray(cartItems) &&
                    cartItems.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className="d-flex align-items-center">
                            <img src={item.gambar} alt="" style={{ width: '100px', height: '100px' }} />
                            <div className="ms-3">
                              <p className="fw-bold mb-1">Kacamata Photocromic</p>
                              <p className="text-muted mb-0">Size : 28mm</p>
                            </div>
                          </div>
                        </td>
                        <td className="text-center">
                          <p className="fw-normal mb-1">{item.jumlah}</p>
                        </td>
                        <td>
                          <p className="fw-normal mb-1">Rp{item.harga}</p>
                        </td>
                        <td>
                          <p className="fw-normal mb-1">Rp{item.sub_total}</p>
                        </td>
                        <td>
                          <i class="bi bi-trash-fill" style={{ color: '#A08336', paddingRight: '10px', cursor: 'pointer' }}></i>
                        </td>
                      </tr>
                    ))}
                </MDBTableBody>
              </MDBTable>
            </div>
          </MDBCol>
          <MDBCol size="12" className="mt-3 text-end">
            <a href="checkout" className="btn btn-primary" style={{ backgroundColor: '#A08336', fontSize: '16px', maxWidth: '158px', maxHeight: '42px', textAlign: 'center', border: 'black', display: 'inline-block' }}>
              CHECKOUT
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

export default Cart;
