import React from "react";
import Layout from "components/Layout/Layout.jsx";
import {
    Container
} from 'reactstrap'

class Place extends React.Component {

    render() {
        const { match: { params: { state, place } } } = this.props
        console.log(this.props)
        return (
            <Layout>
                <Container className="section">
                    {`Estas viendo ${place} - ${state}`}
                </Container>
            </Layout>
        )
    }
}

export default Place