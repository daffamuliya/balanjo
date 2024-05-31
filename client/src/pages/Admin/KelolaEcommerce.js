import React, { useState, useEffect } from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import Card from 'react-bootstrap/Card';
import Sidebar from '../../components/Sidebar';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../../features/authSlice';

const KelolaEcommerce = () => {
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

  const [transaksi, setTransaksi] = useState([]);

  useEffect(() => {
    getTransaksi();
  }, []);

  const getTransaksi = async () => {
    try {
      const response = await axios.get('http://localhost:3000/marketplace/transaksi/all');
      const formattedTransaksi = response.data.data.map((item) => {
        const tanggalPesan = new Date(item.tanggal_pesan);
        const options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          timeZone: 'Asia/Jakarta',
        };
        const tanggalPesanNormal = tanggalPesan.toLocaleDateString('id-ID', options);
        return { ...item, tanggalPesanNormal };
      });
      setTransaksi(formattedTransaksi);
    } catch (error) {
      console.error('Error fetching transaksi:', error);
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
              <Table responsive>
                <thead>
                  <tr>
                    <th>Transaction ID</th>
                    <th>Date</th>
                    <th>Customer</th>
                    <th>Total</th>
                    <th>Payment</th>
                    <th>Status</th>
                    <th>Bukti Pembayaran</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(transaksi) &&
                    transaksi
                      .sort((a, b) => new Date(b.tanggal_pesan) - new Date(a.tanggal_pesan)) // Urutkan berdasarkan tanggal pesan, dari yang terbaru ke yang terlama
                      .map((item) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.tanggalPesanNormal}</td> {/* Gunakan tanggal yang sudah diformat */}
                          <td>{item.user.name}</td>
                          <td>Rp {item.total}</td>
                          <td>{item.payment}</td>
                          <td>{item.status}</td>
                          <td>
                            <a href={item.bukti_transfer} target="_blank" rel="noopener noreferrer">
                              Lihat Bukti Transfer
                            </a>
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
