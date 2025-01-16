import React from 'react'; 
import '../styles/footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'; // Make sure to import these
import { Link } from 'react-router-dom';
import logo from '/public/img/logo.svg';


const quick__links = [
  { path: "/home", display: "Home" },
  { path: "/about", display: "About" },
  { path: "/tours", display: "Tours" },
];

const quick__links2 = [
  { path: "/gallery", display: "Gallery" },
  { path: "login", display: "Login" },
  { path: "/register", display: "Register" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3'>
            <div className='logo'>
              <img src={logo} alt='' />
              <p>
              Welcome to Hotel Celebrations, where elegance meets comfort in the heart of opulence. Nestled in a serene location, our hotel offers an unparalleled experience of sophistication and warmth.
              </p>
              <div className='social__links d-flex align-items-center gap-4'>
                {['ri-youtube-line', 'ri-github-line', 'ri-facebook-circle-fill', 'ri-instagram-line'].map((icon, index) => (
                  <span key={index}>
                    <Link to='#'>
                      <i className={icon}></i>
                    </Link>
                  </span>
                ))}
              </div>
            </div>
          </Col>
          <Col lg='3'>
            <h5 className='footer__link-title'>Discover</h5>
            <ListGroup className='footer__quick-links'>
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className='footer__link-title'>Quick Links</h5>
            <ListGroup className='footer__quick-links'>
              {quick__links2.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className='footer__link-title'>Contact</h5>
            <ListGroup className='footer__quick-links'>
              {[
                { icon: 'ri-map-pin-line', label: 'Address:', text: 'Jaipur, Rajasthan'},
                { icon: 'ri-mail-line', label: 'Email:', text: 'enquiry@hotelcelebrations.com' },
                { icon: 'ri-phone-fill', label: 'Phone:', text: '+01233456789' },
              ].map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0 d-flex align-items-center gap-3'>
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span>
                      <i className={item.icon}></i>
                    </span>
                    {item.label}
                  </h6>
                  <p className='mb-0'>{item.text}</p>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg='12' className='text-center pt-5'>
          <p style={{ color: '#ff5700', fontWeight: 'bold', fontFamily: 'Merriweather', fontStyle: 'normal' }}>
          Copyright {year}. Designed and developed by © Liege Developers.
          </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;