import React from 'react';
import {
  Button,
  Container
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = (props) => {
  return (
    <footer className="footer-1 bg-light text-dark">
      <Container>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
      	<div className="links">
      		<ul className="footer-menu list-unstyled d-flex flex-row text-center text-md-left">
      			{/* <li><a href="https://bootstrapbay.com/" target="_blank" rel="noopener noreferrer">Store</a></li>
      			<li><a href="https://bootstrapbay.com/about" target="_blank" rel="noopener noreferrer">About Us</a></li>
      			<li><a href="https://bootstrapbay.com/blog/" target="_blank" rel="noopener noreferrer">Blog</a></li> */}
      			<li><a href="https://bootstrapbay.com/terms" target="_blank" rel="noopener noreferrer">Terms & Conditions</a></li>
      		</ul>
      	</div>
      	<div className="social mt-4 mt-md-0">
          <Button outline className="instagram btn-icon" href="https://www.instagram.com/wondersell_commerce/" target="_blank">
            <FontAwesomeIcon icon={['fab', 'instagram']} />
            <span className="sr-only">View our Instagram Profile</span>
          </Button>
          {/* {" "}
          <Button style={{color: '#000'}} outline className="facebook btn-icon" href="https://www.facebook.com/bootstrapbayofficial/" target="_blank">
            <FontAwesomeIcon icon={['fab', 'facebook-square']} /> {" "}
            <span className="sr-only">View our Facebook Profile</span>
          </Button>
          {" "}
          <Button color="primary" outline className="github btn-icon" href="https://github.com/bootstrapbay" target="_blank">
            <FontAwesomeIcon icon={['fab', 'github']} />
            <span className="sr-only">View our GitHub Profile</span>
          </Button> */}
        </div>
      </div>
      <div className="copyright text-center">
      	<hr />
      	<p className="small">&copy; 2021, made with
          <span className="text-danger">
            {" "}<FontAwesomeIcon icon="heart" />{" "}
          </span>
          by Flembee
        </p>
      </div>
      </Container>
    </footer>
  );
};

export default Footer;
