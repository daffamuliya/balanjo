import React from 'react';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon } from 'mdb-react-ui-kit';

function  Login() {
  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard className="bg-white my-5 mx-auto" style={{ borderRadius: '10px', maxWidth: '644px' }}>
            <MDBCardBody className="p-5 w-100 d-flex flex-column ">
              <h2 className="fw mb-2 text-center" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                Login
              </h2>
              <p className="text-black-100" style={{ fontSize: '16px' }}>
                Email
              </p>
              <MDBInput wrapperClass="mb-4 w-100" id="formControlLg" type="email" size="lg" style={{ fontSize: '16px' }} placeholder="your email address" className="focus-ring focus-ring-light " autoComplete="new-password" />
              <p className="text-black-100" style={{ fontSize: '16px' }}>
                Password
              </p>
              <MDBInput wrapperClass="mb-4 w-100" id="formControlLg" type="password" size="lg" style={{ fontSize: '16px' }} placeholder="your password" className="focus-ring focus-ring-light" autoComplete="new-password" />
              <MDBRow className="d-flex justify-content-center align-items-center text-center">
                <MDBBtn size="lg" style={{ backgroundColor: 'black', fontSize: '16px', maxWidth: '158px', maxHeight: '42px', fontWeight: 'semi-bold', textAlign: 'center', border: 'black' }}>
                  Sign In
                </MDBBtn>
              </MDBRow>
              <br></br>
              <hr className="my-4" />
              <br></br>
              <div className="d-flex justify-content-center">
                <p className="text-black-100 me-3 mt-2" style={{ fontSize: '14px' }}>
                  Don't have an account?
                </p>
                <MDBBtn className="w-100" href="/register" size="lg" style={{ backgroundColor: 'white', color: 'black', borderColor: '#7E7E7E', fontSize: '16px', maxWidth: '158px', maxHeight: '42px', fontWeight: 'bold' }}>
                  <MDBIcon fab icon="google" />
                  Register
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
