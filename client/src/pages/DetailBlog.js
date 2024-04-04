import React, { Component } from 'react';
import NormalNavbar from '../components/NormalNavbar';
import Footer from '../components/Footer';
import { MDBContainer, MDBRow, MDBBtn } from 'mdb-react-ui-kit';
export default class Landing extends Component {
  render() {
    return (
      <div>
        <NormalNavbar />
        <MDBRow className="justify-content-center">
          <section className="judul-blog">
            <MDBContainer>
              <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center mt-5">
                <div className="col-lg-12 ">
                  <MDBBtn className="mb-3" color="light" style={{ color: '#A08336', fontSize: '14px' }}>
                    Technology
                  </MDBBtn>
                  <h1 className="font-weight-bold" style={{ color: 'black', fontSize: '40px', fontWeight: 'bold' }}>
                    The Scalability Solution: Understanding Layer One vs. Layer Two Blockchains
                  </h1>
                  <p style={{ color: '#50739F' }}>20 Jan 2024, 8:00pm</p>
                  <p style={{ color: 'black' }}>by Elizabeth Slavin</p>
                </div>
              </div>
            </MDBContainer>
          </section>
        </MDBRow>
        <MDBRow className="justify-content-center">
          <section className="isiblog">
            <MDBContainer>
              <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center mt-5 text-center">
                <div className="col-lg-12 ">
                  <img src="/img/cover-blog.png" className="hover-shadow" alt="" style={{ width: '100%' }} />
                </div>
              </div>
              <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content mt-5">
                <div className="col-lg-12 ">
                  <p style={{ color: 'black', marginTop: '25px', textAlign: 'justify', fontSize: '20px' }}>
                    Negara-negara Arab, seperti banyak negara di seluruh dunia, terlibat dalam berbagai peristiwa dan konflik yang melibatkan pelanggaran hukum internasional. Pelanggaran ini berkisar dari konflik bersenjata hingga masalah
                    hak asasi manusia dan intervensi kebijakan luar negeri yang kontroversial. Meskipun tidak semua negara Arab terlibat dalam pelanggaran serupa, sejumlah peristiwa telah menimbulkan kekhawatiran di tingkat internasional.
                    Intervensi Militer dan Konflik Bersenjata Salah satu bentuk pelanggaran hukum internasional yang paling mencolok adalah intervensi militer dan konflik bersenjata. Contohnya termasuk perang saudara di Suriah yang telah
                    berlangsung selama bertahun-tahun dengan banyak pelanggaran hak asasi manusia yang dilaporkan, termasuk penggunaan senjata kimia dan serangan terhadap warga sipil. Intervensi militer di Yaman oleh koalisi pimpinan Arab
                    Saudi telah menjadi subjek kritik internasional karena dituduh melanggar hukum humaniter internasional, termasuk serangan udara yang menargetkan infrastruktur sipil dan blokade yang menyebabkan krisis kemanusiaan. Hak
                    Asasi Manusia Pelanggaran hak asasi manusia juga menjadi perhatian penting dalam konteks negara-negara Arab. Banyak negara dalam wilayah tersebut menghadapi kritik atas penindasan terhadap kebebasan berbicara, menahan
                    aktivis politik, penyalahgunaan tahanan, dan perlakuan yang tidak manusiawi terhadap tahanan politik. Misalnya, Arab Saudi sering dikritik karena pelanggaran hak asasi manusia yang sistematis, termasuk eksekusi mati
                    tanpa proses hukum yang adil dan pembatasan yang ketat terhadap kebebasan berbicara dan berkumpul. Kebijakan Luar Negeri Kontroversial Beberapa negara Arab juga terlibat dalam kebijakan luar negeri yang kontroversial
                    yang dianggap melanggar hukum internasional. Contohnya termasuk blokade terhadap Qatar oleh sejumlah negara Arab pada tahun 2017, yang dipandang sebagai pelanggaran terhadap prinsip-prinsip perdamaian dan kebebasan
                    berdagang. Selain itu, intervensi politik di negara lain di wilayah tersebut, seperti upaya untuk mengontrol atau memengaruhi perubahan politik di negara-negara tetangga, juga telah menimbulkan pertanyaan tentang
                    kepatuhan terhadap hukum internasional. Implikasi dan Tanggapan Pelanggaran hukum internasional oleh negara-negara Arab memiliki implikasi yang luas, termasuk kerusakan kredibilitas dan reputasi di tingkat internasional,
                    serta konsekuensi politik dan ekonomi. Organisasi internasional seperti Perserikatan Bangsa-Bangsa (PBB) dan organisasi hak asasi manusia telah memainkan peran penting dalam memantau dan mengkritik pelanggaran semacam
                    itu, sering kali menyerukan akuntabilitas dan tindakan perbaikan. Negara-negara Arab juga menghadapi tekanan dari masyarakat internasional, organisasi non-pemerintah, dan sekutu politik untuk mematuhi standar hukum
                    internasional. Sanksi ekonomi, isolasi diplomatik, dan tekanan politik adalah beberapa alat yang digunakan oleh masyarakat internasional untuk mencoba mempengaruhi perilaku negara-negara yang terlibat dalam pelanggaran.
                    Dalam rangka mencapai perdamaian dan stabilitas di wilayah tersebut, serta untuk memastikan perlindungan hak asasi manusia yang universal, penting bagi negara-negara Arab dan komunitas internasional untuk bekerja sama
                    dalam menegakkan hukum internasional dan memperjuangkan prinsip-prinsip keadilan, keamanan, dan kemanusiaan.
                  </p>
                </div>
              </div>
            </MDBContainer>
          </section>
        </MDBRow>
        <br></br>
        <br></br>
        <br></br>
        <Footer />
      </div>
    );
  }
}
