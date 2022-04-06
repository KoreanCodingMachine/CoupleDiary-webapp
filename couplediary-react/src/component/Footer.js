import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default class Footer extends React.Component {
  render() {
    return (
      <MDBFooter
        bgColor='light'
        className='text-center text-lg-start text-muted'
      >
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div className='me-5 d-none d-lg-block'>
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href='' className='me-4 text-reset'>
              <i className='fab fa-facebook-f'></i>
            </a>
            <a href='' className='me-4 text-reset'>
              <i className='fab fa-twitter'></i>
            </a>
            <a href='' className='me-4 text-reset'>
              <i className='fab fa-google'></i>
            </a>
            <a href='' className='me-4 text-reset'>
              <i className='fab fa-instagram'></i>
            </a>
            <a href='' className='me-4 text-reset'>
              <i className='fab fa-linkedin'></i>
            </a>
            <a href='' className='me-4 text-reset'>
              <i className='fab fa-github'></i>
            </a>
          </div>
        </section>

        <section className=''>
          <div className='container text-center text-md-start mt-5'>
            <div className='row mt-3'>
              <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <i className='fas fa-gem me-3'></i>Couple Diary
                </h6>
                <p>Here you can use Couple Diary</p>
              </div>

              <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Function</h6>
                <p>
                  <div className='text-reset'>CardWrite</div>
                </p>
                <p>
                  <div href='#!' className='text-reset'>
                    CardUpdate
                  </div>
                </p>
                <p>
                  <div href='#!' className='text-reset'>
                    EventCard
                  </div>
                </p>
              </div>

              <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>skills</h6>
                <p>
                  <div className='text-reset'>Javascript</div>
                </p>
                <p>
                  <div className='text-reset'>React</div>
                </p>
                <p>
                  <div className='text-reset'>Html5</div>
                </p>
                <p>
                  <div className='text-reset'>Css3</div>
                </p>
              </div>

              <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                  <i className='fas fa-home me-3'></i> Seoul, SomeWhere
                </p>
                <p>
                  <i className='fas fa-envelope me-3'></i>
                  pon03078@naver.com
                </p>
                <p>
                  <i className='fas fa-phone me-3'></i> + 010 8761 8632
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className='text-center p-4'
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
        >
          © 2021 Copyright:
          <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
            MDBootstrap.com
          </a>
        </div>
      </MDBFooter>
    );
  }
}
