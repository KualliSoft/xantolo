import React from "react";
import Layout from "components/Layout/Layout.jsx";
import {
    Container
} from 'reactstrap'

class About extends React.Component {

    render() {
        return (
            <Layout>
                <div className="about">
                    <Container className="section">
                        <h2>Acerca de</h2>
                        <hr />
                        <p>
                            Xantolo.mx es un proyecto creado por entusiastas de la tecnología, para impulsar (aún mas) los usos y costumbres de la fiesta más importante de la Huasteca.
                            Tenemos una meta a mediano plazo, que es publicar como se celebra Xantolo en cada rincón de la Huasteca y cuáles son los eventos más relevantes que suceden todos los años.
                        </p>
                        <p>
                            Si deseas colaborar en el proyecto puedes <a href="mailto:kuallisoft@gmail.com">contactarnos</a> o ver nuestro repositorio en <a href="https://github.com/elMatadito/xantolo" target="_blank" rel="noopener noreferrer">Github</a>.
                            Toda ayuda para mantener este sitio es bienvenida.
                        </p>
                        <p>
                            <a className="bmc-button" target="_blank" href="https://www.buymeacoffee.com/kuallisoft" rel="noopener noreferrer">
                                <img src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/BMC-btn-logo.svg" alt="Apoyar el proyecto" />
                                <span>Cómpranos un café/chocolate/zacahuil</span>
                            </a>
                        </p>
                    </Container>
                    <Container className="section credits">
                        <h2>Creditos</h2>
                        <hr />
                        <p>
                            Para crear el contenido de este sitio, nos apoyamos de la información pública en diferentes sitios de internet, redes sociales u opiniones de colaboradores.
                            En la medida de lo posible, trataremos de dar los créditos correspondientes:
                        </p>
                        <ul>
                            <li>
                                Fotos de <a href="/"> portada</a>:
                                <ul>
                                    <li>Secretaría de Turismo SLP (visto en <a href="https://archivo.eluniversal.com.mx/destinos-viajes/2013/xantolo-fiesta-de-una-mascara-80968.html" target="_blank" rel="noopener noreferrer">el universal</a>)</li>
                                    <li>@amanecerhuastecoslp visto en <a href="https://www.instagram.com/p/ByvuL_tgwNB/" target="_blank" rel="noopener noreferrer">instagram</a></li>
                                    <li>@gavbroadcast visto en <a href="https://www.instagram.com/p/B2C6JMQBBbT/" target="_blank" rel="noopener noreferrer">instagram</a></li>
                                </ul>
                            </li>
                        </ul>
                        <p>¿Crees que omitimos algún crédito? No fue nuestra intención, discúlpanos, puedes <a href="mailto:kuallisoft@gmail.com" rel="noopener noreferrer">contactarnos</a> para darte el crédito correspondiente.</p>
                        <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg" alt="Deploys by Netlify" />
                        </a>
                    </Container>
                </div>
            </Layout>
        )
    }
}

export default About