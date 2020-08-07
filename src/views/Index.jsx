import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from "reactstrap";
import Countdown from "react-countdown-now";
import moment from "moment";

// core components
import Layout from "components/Layout/Layout.jsx";

// data
import { getPlaces, getRelevantDates } from "../variables/data";

const customCountdown = ({ total, days, hours, minutes, seconds, milliseconds, completed }) => {
  if (completed) {
    return <h3>¡Ya está aquí!</h3>;
  }
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
    </div>
  );
};

class Index extends React.Component {
  state = {
    places: [],
    relevantDates: [],
  };

  componentDidMount() {
    const places = getPlaces();
    const relevantDates = getRelevantDates();
    this.setState({
      places,
      relevantDates,
    });
  }

  render() {
    const { relevantDates } = this.state;
    const today = moment().local();
    const actualYear = today.format("YYYY");
    const year = today.isAfter(moment(`${actualYear}1102`))
      ? today.add(1, "year").format("YYYY")
      : actualYear;

    return (
      <Layout>
        <Container>
          <Row className="landing">
            <Col md={4} className="side">
              <h1>XANTOLO 2020</h1>
              <Countdown
                date={moment(`${year}1031`).local().format()}
                renderer={customCountdown}></Countdown>
              <div className="social-networks">
                <a href="https://facebook.com/XantoloMex" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a href="https://twitter.com/XantoloMex" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter-square"></i>
                </a>
              </div>
            </Col>
            <Col md={8} className="content">
              <h2>Días importantes</h2>
              <Row>
                {relevantDates &&
                  relevantDates.map((relevantDate) => {
                    return (
                      <Col md={6} key={relevantDate.date.format("YYYYMMDD")}>
                        <Card className="shadow relevant-date">
                          <CardBody>
                            <div className="date">
                              <p>{relevantDate.date.format("DD")}</p>
                              <p>
                                <small>{relevantDate.date.format("MMM")}</small>
                              </p>
                            </div>
                            <div className="detail">
                              <CardTitle>{relevantDate.title}</CardTitle>
                              <CardText>{relevantDate.detail}</CardText>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    );
                  })}
                <Col md={12}>
                  <Card className="shadow">
                    <CardBody>Tradiciones</CardBody>
                  </Card>
                </Col>
                <Col md={12}>
                  <Card className="shadow">
                    <CardBody>Gastronomia</CardBody>
                  </Card>
                </Col>
                <Col md={12}>
                  <Card className="shadow">
                    <CardBody>Danza</CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

export default Index;
