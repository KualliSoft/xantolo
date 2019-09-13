import React from "react";
import { Container, Row, Col } from 'reactstrap'
import Countdown from 'react-countdown-now';
import moment from 'moment'

// core components
import Layout from "components/Layout/Layout.jsx";

// resources
import KuallisoftImage from '../assets/img/kuallisoft.png'
import AquatlanImage from '../assets/img/aquatlan.png'

// data
import { getEvents } from '../variables/data'

const customCountdown = ({ total, days, hours, minutes, seconds, milliseconds, completed }) => {
  return (
    <div className="countdown">
      <div>
        <p className="number">{days}</p>
        <p className="description">días</p>
      </div>
      <div>
        <p className="number">{hours}</p>
        <p className="description">horas</p>
      </div>
      <div>
        <p className="number">{minutes}</p>
        <p className="description">minutos</p>
      </div>
      <div>
        <p className="number">{seconds}</p>
        <p className="description">segundos</p>
      </div>
    </div>)
}

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div className="landing">
          <div className="banner section">
            <Container>
              <p>La fiesta de vivos y muertos...</p>
              <h1>Xantolo 2019</h1>
              <Countdown date={moment('20191031').local()} renderer={customCountdown}>
                <div>Xantolo ha comenzado!</div>
              </Countdown>
            </Container>
          </div>
          <Container className="section">
            <h1>Patrocinadores Oficiales</h1>
            <Container className="sponsors">
              <Row>
                <Col md={4} sm={6}>
                  <img src={KuallisoftImage} alt="Kuallisoft" />
                </Col>
                <Col md={4} sm={6} className="text-center">
                  <img src={AquatlanImage} alt="Aquatlan" style={{ width: '50%' }} />
                </Col>
                <Col md={4} sm={6}>

                </Col>
              </Row>
            </Container>
          </Container>
        </div>
      </Layout>
    );
  }
}

export default Index;
