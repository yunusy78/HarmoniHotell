import React from 'react'
import Footer from '../components/layout/footer';
import Script2 from '../components/layout/Script2'
import Header from '../components/layout/header';
import Spinner from '../components/layout/spinner';

const Layout = ({children}) => {
  return <React.Fragment>
    <div className="container-xxl bg-white p-0">
     {/* Spinner Start */}
  <Spinner/>
    {/* Spinner End */}
  {/* Header Start */}
 <Header/>
  {/* Header End */}
    {children}
      {/* Footer Start */}
  <Footer/>
  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
    <i className="bi bi-arrow-up" />
  </a>
</div>
<Script2/>

    </React.Fragment>
};

export default Layout
