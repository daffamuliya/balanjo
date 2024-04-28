import React, { useState, useEffect } from 'react';
import UserNavbar from '../../../components/UserNavbar';
import Card from 'react-bootstrap/Card';
import SidebarAkun from '../../../components/SidebarAkun';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const RiwayatPesanan = () => {
  const [transaksi, setTransaksi] = useState([]);
  useEffect(() => {
    getTransaksi();
  }, []);

  const getTransaksi = async () => {
    try {
      const response = await axios.get('http://localhost:3000/marketplace/transaksi');
      setTransaksi(response.data.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };
  return (
    <div>
      <UserNavbar />
      <div className="main">
        <SidebarAkun />
        <div className="container mt-5">
          <Card>
            <Card.Body>
              <section className="blog">
                <div class="row">
                  <h2 className="title" style={{ fontWeight: 'bold' }}>
                    Riwayat Pesanan
                  </h2>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Product</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Payment</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.isArray(transaksi) &&
                        transaksi.map((item) => (
                          <tr>
                            <td>{item.id}</td>
                            <td>{item.produk.nama}</td>
                            <td>{item.tanggal_pesan}</td>
                            <td>Rp {item.total}</td>
                            <td>{item.payment}</td>
                            <td>{item.status}</td>
                          </tr>
                        ))}
                    </tbody>
                  </Table>
                </div>
              </section>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RiwayatPesanan;
