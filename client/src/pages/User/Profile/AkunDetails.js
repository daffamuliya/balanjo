import React, { Component } from 'react';
import UserNavbar from '../../../components/UserNavbar';
import Card from 'react-bootstrap/Card';
import SidebarAkun from '../../../components/SidebarAkun';

export default class Landing extends Component {
  render() {
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
                      Account Details
                    </h2>
                    <div class="col-12 mb-4 mt-4">
                      <form>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">
                            FIRST NAME *
                          </label>
                          <input type="text" class="form-control" id="exampleInputEmail1" placeholder="First Name" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">
                            LAST NAME *
                          </label>
                          <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Last Name" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">
                            DISPLAY NAME *
                          </label>
                          <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Display Name" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">
                            EMAIL *
                          </label>
                          <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Email" aria-describedby="emailHelp" />
                        </div>
                      </form>
                    </div>
                    <h2 className="title" style={{ fontWeight: 'bold' }}>
                      Password
                    </h2>
                    <div class="col-12 mb-4 mt-4">
                      <form>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">
                            OLD PASSWORD
                          </label>
                          <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Old Password" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">
                            NEW PASSWORD
                          </label>
                          <input type="text" class="form-control" id="exampleInputEmail1" placeholder="New Password" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">
                            REPEAT NEW PASSWORD
                          </label>
                          <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Repeat New Password" aria-describedby="emailHelp" />
                        </div>

                        <button type="submit" class="btn btn-primary" style={{ backgroundColor: '#A08336', fontSize: '16px', maxWidth: '158px', maxHeight: '42px', textAlign: 'center', border: 'black', float: 'right' }}>
                          Kirim
                        </button>
                      </form>
                    </div>
                  </div>
                </section>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
