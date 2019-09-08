import React from "react";
import { Col, Container, Row } from "reactstrap";
import XantoloLogo from '../../assets/img/xantolo-icon.png'

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col md="9">
              <h1 className="title"><img src={XantoloLogo} alt="" />Xantolo<small>.mx</small></h1>
            </Col>
            <Col md="3">
              <p>Hecho con <i className="fas fa-heart"></i> por <a href="https://facebook.com/KualliSoft">KualliSoft</a></p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
