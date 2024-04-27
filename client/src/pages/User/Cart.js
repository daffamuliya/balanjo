import React, { useState } from 'react';
import NormalNavbar from '../../components/NormalNavbar';
import Footer from '../../components/Footer';
import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = () => {
    if (quantity <= 1) {
      return setQuantity(quantity + 0);
    } else {
      setQuantity(quantity - 1);
    }
  };
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
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Subtotal</th>
                    <th scope="col"></th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img src="/img/produk.png" alt="" style={{ width: '100px', height: '100px' }} />
                        <div className="ms-3">
                          <p className="fw-bold mb-1">Kacamata Photocromic</p>
                          <p className="text-muted mb-0">Size : 28mm</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <button className="btn btn-secondary me-2" type="button" onClick={handleQuantity}>
                          -
                        </button>
                        <input type="text" className="form-control text-center font-weight-bold" value={quantity} disabled style={{ width: '50px' }} />
                        <button className="btn btn-secondary ms-2" type="button" onClick={() => setQuantity(quantity + 1)}>
                          +
                        </button>
                      </div>
                    </td>
                    <td>
                      <p className="fw-normal mb-1">Rp90.000</p>
                    </td>
                    <td>
                      <p className="fw-normal mb-1">Rp90.000</p>
                    </td>
                    <td>
                      <i class="bi bi-trash-fill" style={{ color: '#A08336', paddingRight: '10px', cursor: 'pointer' }}></i>
                    </td>
                  </tr>
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
