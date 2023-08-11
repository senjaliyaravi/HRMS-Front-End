
// reactstrap components
import { Link } from "react-router-dom";
import {  Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Row className="align-items-center justify-content-xl-between">
        <Col xl="6">
          <div className="copyright text-center text-xl-left text-muted">
            ©{new Date().getFullYear()}{" "}
            <Link
              className="font-weight-bold ml-1"
              to="https://nexalussoft.com"
              
            >
              Nexalus Soft Team
            </Link>
          </div>
        </Col>

      </Row>
    </footer>
  );
};

export default Footer;
