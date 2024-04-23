import { MDBBtn, MDBRow, MDBContainer, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody } from 'mdb-react-ui-kit';
import React, { useState, useEffect } from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import Card from 'react-bootstrap/Card';
import Sidebar from '../../components/Sidebar';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import swal from 'sweetalert';

const KelolaBlog = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:3000/blog');
      const formattedBlogs = response.data.items.map((item) => {
        const waktu = new Date(item.created_at);
        const options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          timeZone: 'Asia/Jakarta',
        };
        const waktuNormal = waktu.toLocaleDateString('id-ID', options);
        return { ...item, waktuNormal };
      });
      setBlog(formattedBlogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  const [BlogDetail, setBlogDetail] = useState(null);
  const [scrollableModal, setScrollableModal] = useState(false);
  const loadBlogDetail = async (slug) => {
    try {
      const response = await axios.get(`http://localhost:3000/blog/baca/${slug}`);
      const BlogDetailData = Array.isArray(response.data.items) ? response.data.items : [response.data.items];
      setBlogDetail(BlogDetailData);
      setScrollableModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBlog = async (id) => {
    try {
      swal({
        title: 'Anda yakin?',
        text: 'Anda tidak akan dapat mengembalikan blog ini!',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      }).then(async (willDelete) => {
        if (willDelete) {
          await axios.delete(`http://localhost:3000/blog/deleteBlog/${id}`);
          getBlogs();
          swal('Blog berhasil dihapus!', {
            icon: 'success',
          });
        } else {
          swal('Blog Anda tidak jadi dihapus!');
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
            Kelola Blog
          </h3>
          <Card>
            <Card.Body>
              {' '}
              <Table responsive>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Judul Blog</th>
                    <th>Kategori</th>
                    <th>Uploader</th>
                    <th>Tanggal Upload</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(blog) &&
                    blog.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.judul}</td>
                        <td>{item.kategori_blog}</td>
                        <td>{item.user}</td>
                        <td>{item.waktuNormal}</td>
                        <td>
                          <i class="bi bi-trash-fill" onClick={() => deleteBlog(item.id)} style={{ color: '#A08336', marginRight: '5px', cursor: 'pointer' }}></i>
                          <i class="bi bi-eye-fill" onClick={() => loadBlogDetail(item.slug)} style={{ color: '#A08336', marginLeft: '10px', cursor: 'pointer' }}></i>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </div>
      </div>
      <MDBModal open={scrollableModal} setOpen={setScrollableModal} tabIndex="-1">
        <MDBModalDialog centered scrollable>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Blog Details</MDBModalTitle>
              <MDBBtn className="btn-close" color="none" onClick={() => setScrollableModal(!scrollableModal)}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBRow className="justify-content-center">
                <section className="isiblog">
                  {Array.isArray(BlogDetail) &&
                    BlogDetail.map((detail) => (
                      <MDBContainer key={detail.slug}>
                        <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center mt-5 text-center">
                          <div className="col-lg-12 ">
                            <img src={detail.url} className="hover-shadow" alt="" style={{ width: '100%' }} />
                          </div>
                        </div>
                        <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center mt-5 text-center">
                          <div className="col-lg-12 ">
                            <h1>{detail.judul}</h1>
                          </div>
                        </div>
                        <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content mt-5">
                          <div className="col-lg-12 ">
                            <p style={{ color: 'black', marginTop: '25px', textAlign: 'justify', fontSize: '20px' }} dangerouslySetInnerHTML={{ __html: detail.konten }}></p>
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

export default KelolaBlog;
