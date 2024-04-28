import React, { useEffect, useState } from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import Card from 'react-bootstrap/Card';
import Sidebar from '../../components/Sidebar';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import swal from 'sweetalert';

const KelolaUser = () => {
  const [user, setUser] = useState([]);
  const user_id = '2';

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await axios.get('http://localhost:3000/daftaruser');
      setUser(response.data.items);
      console.log(response.data.items);
    } catch (error) {
      console.error('error', error);
    }
  };

  const [UserDetail, setUserDetail] = useState(null);
  const [scrollableModal, setScrollableModal] = useState(false);
  const loadUserDetail = async (slug) => {
    try {
      const response = await axios.get(`http://localhost:3000/daftaruser/${user_id}`);
      const UserDetailData = Array.isArray(response.data.items) ? response.data.items : [response.data.items];
      setUserDetail(UserDetailData);
      setScrollableModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      swal({
        title: 'Anda yakin?',
        text: 'Anda tidak akan dapat mengembalikan blog ini!',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      }).then(async (willDelete) => {
        if (willDelete) {
          await axios.delete(`http://localhost:3000/daftaruser/deleteUser/${id}`);
          getUser();
          swal('User berhasil dihapus!', {
            icon: 'success',
          });
        } else {
          swal('User Anda tidak jadi dihapus!');
        }
      });
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  return (
    <div>
      <AdminNavbar />
      <div className="main">
        <Sidebar />
        <div className="container mt-5">
          <h3 className="title" style={{ color: '#A08336', fontWeight: 'bold' }}>
            User
          </h3>
          <Card>
            <Card.Body>
              {' '}
              <Table responsive>
                <thead>
                  <tr>
                    <th>User ID</th>
                    <th>Nama</th>
                    <th>username</th>
                    <th>Email</th>
                    <th>Tanggal Bergabung</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(user) &&
                    user.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.created_at}</td>
                        <td>
                          <i class="bi bi-trash-fill" onClick={() => deleteUser(item.id)} style={{ color: '#A08336', marginRight: '5px', cursor: 'pointer' }}></i>
                          <i class="bi bi-eye-fill" onClick={() => loadUserDetail(item.id)} style={{ color: '#A08336', marginLeft: '10px', cursor: 'pointer' }}></i>{' '}
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

export default KelolaUser;
