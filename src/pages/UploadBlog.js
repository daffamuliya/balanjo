import React, { Component } from 'react';
import NormalNavbar from '../components/NormalNavbar';
import Footer from '../components/Footer';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
export default class Landing extends Component {
  render() {
    return (
      <div>
        <NormalNavbar />
        <MDBContainer>
          <MDBRow className="mt-3 justify-content-center">
            <MDBCol size="12">
              <img src="/img/upload-blog.png" className="hover-shadow" alt="" />
            </MDBCol>
            <section className="landingeforum">
              {' '}
              <div class="row">
                <div class="col-12 mb-4 mt-4">
                  <form>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Judul
                      </label>
                      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Slug
                      </label>
                      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" disabled />
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">
                        Kategori
                      </label>
                      <select class="form-select" aria-label="Default select example" placeholder="Masukkan Kategori Blog">
                        <option selected></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <label class="form-label" for="customFile">
                        Foto
                      </label>
                      <input type="file" class="form-control" id="customFile" />
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">
                        Body
                      </label>
                      <textarea class="form-control" placeholder="Isi yang memuat konten anda" id="floatingTextarea"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary" style={{ backgroundColor: '#A08336', fontSize: '16px', maxWidth: '158px', maxHeight: '42px', textAlign: 'center', border: 'black', float: 'right' }}>
                      Kirim
                    </button>
                  </form>
                </div>
              </div>
            </section>
          </MDBRow>
        </MDBContainer>
        <br></br>
        <br></br>
        <br></br>
        <Footer />
      </div>
    );
  }
}
