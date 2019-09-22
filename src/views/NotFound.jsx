import React from "react";
import Layout from "components/Layout/Layout.jsx";
import {
    Container, Col, Card, CardBody
} from 'reactstrap'

class NotFound extends React.Component {
    render() {
        return (
            <Layout>
                <Container className="section">
                    <Col md={{ size: 8, offset: 2 }} >
                        <Card className="text-center">
                            <CardBody>
                                <p>Estaban los programadores contentos</p>
                                <p>observando el servidor,</p>
                                <p>cuando de pronto llegó la calaca</p>
                                <p>y comenzó el verdadero terror....</p>
                                <br />
                                <h1>Error 404</h1>
                                <p>No se encontró ningún resultado</p>
                            </CardBody>
                        </Card>
                    </Col>
                </Container>

            </Layout>
        )
    }
}

export default NotFound