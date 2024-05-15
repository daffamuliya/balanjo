import axios from 'axios';
import { MDBCarousel, MDBCarouselItem, MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';

const Banner = () => {
  const [banner, setBanner] = useState();

  useEffect(() => {
    getBanner();
  }, []);

  const getBanner = async () => {
    const response = await axios.get('http://localhost:3000/marketplace/banner/activeBanner');
    setBanner(response.data.items);
  };

  return (
    <section className="banner mt-5">
      <MDBContainer>
        <MDBRow>
          <MDBCol size="12">
            <MDBCarousel showControls fade swipe>
              {Array.isArray(banner) &&
                banner.map((item, index) => (
                  <MDBCarouselItem key={index} itemId={index}>
                    <img src={item.gambar} className="d-block w-100" alt="..." />
                  </MDBCarouselItem>
                ))}
            </MDBCarousel>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-3 justify-content-around">
          <MDBCol size="6">
            <img src="/img/iklan (1).png" className="img-fluid hover-shadow" alt="" />
          </MDBCol>
          <MDBCol size="6">
            <img src="/img/iklan (2).png" className="img-fluid hover-shadow" alt="" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default Banner;
