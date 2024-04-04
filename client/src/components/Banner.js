import { MDBCarousel, MDBCarouselItem, MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';

const Banner = () => {
  return (
    <section className="banner mt-5">
      <MDBContainer>
        <MDBRow>
          <MDBCol size="12">
            <MDBCarousel showControls fade>
              <MDBCarouselItem itemId={1}>
                <img src="/img/banner.png" className="d-block w-100" alt="..." />
              </MDBCarouselItem>
              <MDBCarouselItem itemId={2}>
                <img src="/img/banner.png" className="d-block w-100" alt="..." />
              </MDBCarouselItem>
              <MDBCarouselItem itemId={3}>
                <img src="/img/banner.png" className="d-block w-100" alt="..." />
              </MDBCarouselItem>
            </MDBCarousel>{' '}
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
