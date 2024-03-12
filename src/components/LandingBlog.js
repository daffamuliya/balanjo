import { MDBContainer, MDBRow, MDBBtn, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';

const LandingBlog = () => {
  return (
    <section className="landingeforum">
      <MDBContainer>
        <MDBRow>
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 align-items-center justify-content-between">
              <div className="col-lg-7">
                <div className="d-flex flex-column align-items-start">
                  <p style={{ fontWeight: 'bold', marginBottom: '0' }}>Blog</p>
                  <h1 className="font-weight-bold mt-3" style={{ fontSize: '35px', fontWeight: 'bold', color: '#A08336', marginBottom: '1rem' }}>
                    Temukan Inspirasi Karya Rangers
                  </h1>
                  <p className="text-white-75" style={{ color: '#6A6D70', marginBottom: '1rem' }}>
                    Tempat di mana ide-ide segar bertemu dengan pengetahuan mendalam <br /> untuk membantu mengembangkan bisnis kamu
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mt-5 d-flex justify-content-end">
                <MDBBtn size="lg" style={{ backgroundColor: 'black', fontSize: '16px', maxWidth: '169px', maxHeight: '42px', fontWeight: 'normal', border: '#A08336', borderRadius: '10px' }}>
                  Lainnya -{'>'}
                </MDBBtn>
              </div>
            </div>
          </div>
        </MDBRow>
        <MDBRow className="pt-5">
          <MDBCol size="4" className="mt-3">
            <MDBCard style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '28px', border: 'none', maxWidth: '352px', Height: '444px' }} className="text-left">
              <MDBCardImage src="/img/foto-blog.png" position="top" alt="..." />
              <MDBCardBody>
                <MDBBtn className="mb-3" color="light" style={{ color: '#A08336', fontSize: '14px' }}>
                  Technology
                </MDBBtn>
                <MDBCardTitle style={{ fontSize: '20px', fontWeight: 'bold' }}>The Impact of Technology on the Workplace: How Technology is Changing</MDBCardTitle>
                <div className="d-flex">
                  <MDBCardImage className="me-2 mt-2" src="/img/image.png" style={{ width: '13%', height: '13%' }} />
                  <MDBCardText className="mt-3" style={{ color: '#97989F', fontSize: '14px' }}>
                    Elizabeth Slavin
                  </MDBCardText>
                  <MDBCardText className="ms-5 mt-3 " style={{ color: '#97989F', fontSize: '14px' }}>
                    August 20, 2022
                  </MDBCardText>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol size="4" className="mt-3">
            <MDBCard style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '28px', border: 'none', maxWidth: '352px', Height: '444px' }} className="text-left">
              <MDBCardImage src="/img/foto-blog.png" position="top" alt="..." />
              <MDBCardBody>
                <MDBBtn className="mb-3" color="light" style={{ color: '#A08336', fontSize: '14px' }}>
                  Technology
                </MDBBtn>
                <MDBCardTitle style={{ fontSize: '20px', fontWeight: 'bold' }}>The Impact of Technology on the Workplace: How Technology is Changing</MDBCardTitle>
                <div className="d-flex">
                  <MDBCardImage className="me-2 mt-2" src="/img/image.png" style={{ width: '13%', height: '13%' }} />
                  <MDBCardText className="mt-3" style={{ color: '#97989F', fontSize: '14px' }}>
                    Elizabeth Slavin
                  </MDBCardText>
                  <MDBCardText className="ms-5 mt-3 " style={{ color: '#97989F', fontSize: '14px' }}>
                    August 20, 2022
                  </MDBCardText>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol size="4" className="mt-3">
            <MDBCard style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '28px', border: 'none', maxWidth: '352px', Height: '444px' }} className="text-left">
              <MDBCardImage src="/img/foto-blog.png" position="top" alt="..." />
              <MDBCardBody>
                <MDBBtn className="mb-3" color="light" style={{ color: '#A08336', fontSize: '14px' }}>
                  Technology
                </MDBBtn>
                <MDBCardTitle style={{ fontSize: '20px', fontWeight: 'bold' }}>The Impact of Technology on the Workplace: How Technology is Changing</MDBCardTitle>
                <div className="d-flex">
                  <MDBCardImage className="me-2 mt-2" src="/img/image.png" style={{ width: '13%', height: '13%' }} />
                  <MDBCardText className="mt-3" style={{ color: '#97989F', fontSize: '14px' }}>
                    Elizabeth Slavin
                  </MDBCardText>
                  <MDBCardText className="ms-5 mt-3 " style={{ color: '#97989F', fontSize: '14px' }}>
                    August 20, 2022
                  </MDBCardText>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default LandingBlog;
