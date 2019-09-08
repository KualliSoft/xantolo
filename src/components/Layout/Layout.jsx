/*!

=========================================================
* Layout
=========================================================
* Principal Layout of site, contains 
*  - Header (navbar)
*  - Main (only container with children from props)
*  - Footer 

*/
import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";

import Footer from "components/Footer/Footer.jsx";
import ReactGA from 'react-ga';

ReactGA.initialize('UA-99005820-2');
ReactGA.pageview(window.location.pathname + window.location.search);

class Layout extends React.Component {
    render() {
        return (
            <>
                <IndexNavbar />
                <main>
                    {this.props.children}
                </main>
                <Footer />
            </>
        );
    }
}

export default Layout;
