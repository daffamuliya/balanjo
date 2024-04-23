import React, { useState, useEffect } from 'react';
import UserNavbar from '../../../components/UserNavbar';
import Card from 'react-bootstrap/Card';
import SidebarAkun from '../../../components/SidebarAkun';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

export const KelolaForumUser = () => {
  const [forum, setForum] = useState([]);
  useEffect(() => {
    getForum();
  }, []);

  const getForum = async () => {
    const response = await axios.get('http://localhost:3000/forum');
    setForum(response.data.items);
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
                    Kelola Forum
                  </h2>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Judul Forum</th>
                        <th>Tanggal</th>
                        <th>Kategori</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.isArray(forum) &&
                        forum.map((item) => (
                          <tr key={item.id}>
                            <td>1</td>
                            <td>{item.konten}</td>
                            <td>Otto</td>
                            <td>25 Januari 2022</td>
                            <td>
                              <i class="bi bi-trash-fill" style={{ color: '#A08336', paddingRight: '10px' }}></i>
                              <i class="bi bi-eye-fill" style={{ color: '#A08336', paddingRight: '10px' }}></i>
                            </td>
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

export default KelolaForumUser;
