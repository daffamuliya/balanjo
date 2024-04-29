import React, { useState, useEffect } from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import Card from 'react-bootstrap/Card';
import Sidebar from '../../components/Sidebar';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const RequestedBanner = () => {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    getBanner();
  }, []);

  const getBanner = async () => {
    try {
      const response = await axios.get('http://localhost:3000/marketplace/banner/requestedBanner');
      setBanner(response.data.items);
    } catch (error) {
      console.error('Error fetching banner:', error);
    }
  };
  return (
    <div>
      <AdminNavbar />
      <div className="main">
        <Sidebar />
        <div className="container mt-5">
          <h5 className="title" style={{ color: '#A08336' }}>
            Requested Banner
          </h5>

          <Card>
            <Card.Body>
              {' '}
              <Table responsive>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Requested by</th>
                    <th>Nama Baner</th>
                    <th>Deskripsi</th>
                    <th>Gambar</th>
                    <th>Bukti Transfer</th>
                    <th>Status</th>
                    <th className="text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(banner) &&
                    banner.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.user.name}</td>
                        <td>{item.nama_banner}</td>
                        <td>{item.deskripsi}</td>
                        <td>
                          <img src={item.gambar} alt="" style={{ width: '100px', height: '100px' }} />
                        </td>
                        <td>
                          <img src={item.bukti_transfer} alt="" style={{ width: '100px', height: '100px' }} />
                        </td>
                        <td>{item.status}</td>
                        <td className="text-center">
                          <a href="upload-banner" className="btn btn-primary" size="sm" style={{ backgroundColor: '#A08336', fontSize: '13px', maxWidth: '120px', maxHeight: '30px', border: 'black', marginRight: '5px' }}>
                            Setujui
                          </a>
                          <a href="upload-banner" className="btn btn-danger" size="sm" style={{ fontSize: '13px', maxWidth: '120px', maxHeight: '30px', border: 'black' }}>
                            Tolak
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

export default RequestedBanner;
