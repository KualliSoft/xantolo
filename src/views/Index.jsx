import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  Button,
} from "reactstrap";
import Countdown from "react-countdown-now";
import moment from "moment";

// core components
import Layout from "components/Layout/Layout.jsx";

// resources
import KuallisoftImage from "../assets/img/kuallisoft.png";
import AquatlanImage from "../assets/img/aquatlan.png";
import GastronomiaImage from "../images/food/gastronomia.jpg";
import TradicionImage from "../images/food/tradicion.jpg";
import DanzaImage from "../images/food/danza.jpg";

// data
import { getPlaces } from "../variables/data";

const customCountdown = ({
  total,
  days,
  hours,
  minutes,
  seconds,
  milliseconds,
  completed,
}) => {
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
  };

  componentDidMount() {
    const places = getPlaces();
    this.setState({ places });
  }

  render() {
    return (
      <Layout>
        <div className="landing">
          <div className="banner">
            <Container>
              <div className="title">
                <h3>La fiesta de vivos y muertos...</h3>
                <h1>Xantolo 2020</h1>
              </div>
              <Countdown
                date={moment("20201031").local().format()}
                renderer={customCountdown}
              >
                <div>Xantolo ha comenzado!</div>
              </Countdown>
            </Container>
          </div>
          <Container className="section">
            <Row className="text-center">
              <Col md={4}>
                <Card>
                  <img src={GastronomiaImage} alt="Gastronomía" />
                  <CardBody>
                    <CardTitle>Gastronomia</CardTitle>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit mus
                      massa condimentum dignissim vitae, class interdum aptent
                      ultrices turpis sodales malesuada ad mattis fames tellus,
                      luctus aliquet euismod enim varius cubilia iaculis nulla
                      platea non habitasse.
                    </p>
                    <Button
                      href="/gastronomia/"
                      color="primary"
                      size="sm"
                      block
                    >
                      Conocer más
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <img src={TradicionImage} alt="Tradición" />
                  <CardBody>
                    <CardTitle>Tradicion</CardTitle>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit mus
                      massa condimentum dignissim vitae, class interdum aptent
                      ultrices turpis sodales malesuada ad mattis fames tellus,
                      luctus aliquet euismod enim varius cubilia iaculis nulla
                      platea non habitasse.
                    </p>
                    <Button
                      href="/tradiciones/"
                      color="primary"
                      size="sm"
                      block
                    >
                      Conocer más
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <img src={DanzaImage} alt="Danza" />
                  <CardBody>
                    <CardTitle>Música y Danza</CardTitle>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit mus
                      massa condimentum dignissim vitae, class interdum aptent
                      ultrices turpis sodales malesuada ad mattis fames tellus,
                      luctus aliquet euismod enim varius cubilia iaculis nulla
                      platea non habitasse.
                    </p>
                    <Button
                      href="/musica-danza/"
                      color="primary"
                      size="sm"
                      block
                    >
                      Conocer más
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
          <Container className="section places">
            <h1>Aquí se celebra Xantolo</h1>
            <hr />
            <Row>
              {this.state.places.map((place) => {
                return (
                  <Col md={6} key={place.name}>
                    <Card>
                      <Row>
                        <Col md={6}>
                          <CardImg
                            src={place.image}
                            alt={`${place.name}, ${place.state}`}
                          />
                        </Col>
                        <Col md={6}>
                          <CardBody>
                            <CardTitle>{place.name}</CardTitle>
                            <p>
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit.
                            </p>
                            <Button
                              color="primary"
                              size="sm"
                              block
                              href={`/${place.state}/${place.slug}/`}
                            >
                              Ver detalle
                            </Button>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
          <Container className="section">
            <h1>Patrocinadores Oficiales</h1>
            <hr />
            <Container className="sponsors">
              <Row>
                <Col md={4} sm={6}>
                  <img src={KuallisoftImage} alt="Kuallisoft" />
                </Col>
                <Col md={4} sm={6} className="text-center">
                  <img
                    src={AquatlanImage}
                    alt="Aquatlan"
                    style={{ width: "50%" }}
                  />
                </Col>
                <Col md={4} sm={6}></Col>
              </Row>
            </Container>
          </Container>
        </div>
      </Layout>
    );
  }
}

export default Index;
