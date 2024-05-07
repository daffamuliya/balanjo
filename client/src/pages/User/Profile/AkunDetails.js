import React, { useEffect } from 'react';
import UserNavbar from '../../../components/UserNavbar';
import Card from 'react-bootstrap/Card';
import SidebarAkun from '../../../components/SidebarAkun';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../../../features/authSlice';

const AkunDetails = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate('/login');
    }
  }, [isError, navigate]);

  return (
    <div>
      <UserNavbar />
      <div className="main">
        <SidebarAkun />
        <div className="container mt-5 ">
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
                          FULL NAME *
                        </label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" disabled placeholder={user && user.name} />
                      </div>

                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                          USERNAME *
                        </label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" disabled placeholder={user && user.username} />
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                          EMAIL *
                        </label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" disabled placeholder={user && user.email} />
                      </div>
                    </form>
                  </div>
                  <h2 className="title" style={{ fontWeight: 'bold' }}>
                    Change Password
                  </h2>
                  <div class="col-12 mb-4 mt-4">
                    <form>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                          OLD PASSWORD
                        </label>
                        <input type="password" class="form-control" id="exampleInputEmail1" placeholder="Old Password" aria-describedby="emailHelp" />
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                          NEW PASSWORD
                        </label>
                        <input type="password" class="form-control" id="exampleInputEmail1" placeholder="New Password" aria-describedby="emailHelp" />
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                          REPEAT NEW PASSWORD
                        </label>
                        <input type="password" class="form-control" id="exampleInputEmail1" placeholder="Repeat New Password" aria-describedby="emailHelp" />
                      </div>
                      <button type="submit" class="btn btn-primary" style={{ backgroundColor: '#A08336', fontSize: '16px', maxWidth: '158px', maxHeight: '42px', textAlign: 'center', border: 'black', float: 'right' }}>
                        Save Changes
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
};

export default AkunDetails;
