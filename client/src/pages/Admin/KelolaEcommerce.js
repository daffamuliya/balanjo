import React, { useState, useEffect } from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import Card from 'react-bootstrap/Card';
import Sidebar from '../../components/Sidebar';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const KelolaEcommerce = () => {
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
      <AdminNavbar />
      <div className="main">
        <Sidebar />
        <div className="container mt-5 ">
          <h5 className="title" style={{ color: '#A08336' }}>
            Transaction History
          </h5>
          <Card>
            <Card.Body>
              {' '}
              <Table responsive>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Product</th>
                    <th>Date</th>
                    <th>Customer</th>
                    <th>Total</th>
                    <th>Payment</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(transaksi) &&
                    transaksi.map((item) => (
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.produk.nama}</td>
                        <td>{item.tanggal_pesan}</td>
                        <td>{item.user.name}</td>
                        <td>Rp {item.total}</td>
                        <td>{item.payment}</td>
                        <td>{item.status}</td>
                        <td>
                          <i class="bi bi-eye-fill" style={{ color: '#A08336' }}></i>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default KelolaEcommerce;
