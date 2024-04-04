import React, { useState } from 'react';
import NormalNavbar from '../components/NormalNavbar';
import Footer from '../components/Footer';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UploadBlog = () => {
  const [judul, setJudul] = useState('');
  const [slug, setSlug] = useState('');
  const [kategori_blog, setKategori] = useState('Wirausaha');
  const [gambar, setGambar] = useState('');
  const [summary, setSummary] = useState('');
  const [konten, setKonten] = useState('');
  const navigate = useNavigate();

  const saveBlog = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/blog/addBlog', {
        judul,
        slug,
        kategori_blog,
        gambar,
        summary,
        konten,
      });
      navigate('/blog');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NormalNavbar />
      <MDBContainer>
        <MDBRow className="mt-3 justify-content-center">
          <MDBCol md={12} xs={2} className="ms-auto">
            <img src="/img/upload-blog.png" className="hover-shadow" alt="" style={{ width: '100%' }} />
          </MDBCol>
        </MDBRow>
        <section className="blog">
          {' '}
          <div class="row">
            <div class="col-12 mb-4 mt-4">
              <form onSubmit={saveBlog}>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Judul
                  </label>
                  <input type="text" value={judul} onChange={(e) => setJudul(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Slug
                  </label>
                  <input type="text" value={slug} onChange={(e) => setSlug(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" disabled />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Kategori
                  </label>
                  <select value={kategori_blog} onChange={(e) => setKategori(e.target.value)} class="form-select" aria-label="Default select example" placeholder="Masukkan Kategori Blog">
                    <option selected></option>
                    <option value="1">Wirauhaha</option>
                    <option value="2">Keuangan Finansial</option>
                    <option value="3">Bisnis Teknologi</option>
                    <option value="4">Agribisnis</option>
                    <option value="5">Bisnis Peternakan</option>
                    <option value="6">Bisnis Kuliner</option>
                    <option value="7">Bisnis Kreatif</option>
                    <option value="8">Bisnis Jasa</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label class="form-label" for="customFile">
                    Foto
                  </label>
                  <input type="file" value={gambar} onChange={(e) => setGambar(e.target.value)} class="form-control" id="customFile" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Ringkasan
                  </label>
                  <textarea class="form-control" value={summary} onChange={(e) => setSummary(e.target.value)} placeholder="Ringkasan yang merangkum konten anda" id="floatingTextarea"></textarea>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Body
                  </label>
                  <textarea class="form-control" value={konten} onChange={(e) => setKonten(e.target.value)} placeholder="Isi yang memuat konten anda" id="floatingTextarea"></textarea>
                </div>
                <button type="submit" class="btn btn-primary" style={{ backgroundColor: '#A08336', fontSize: '16px', maxWidth: '158px', maxHeight: '42px', textAlign: 'center', border: 'black', float: 'right' }}>
                  Kirim
                </button>
              </form>
            </div>
          </div>
        </section>
      </MDBContainer>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
};

export default UploadBlog;
