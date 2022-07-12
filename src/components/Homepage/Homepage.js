import React from 'react';
import logo from './img/logo.png';
import pic4 from './img/pic4.jpg';




class Homepage extends React.Component{
    render(){
        return(
            <>
            <div class="row justify-content-end">
        <div class="col-12 col-lg-7 col-xl-6 col-xxl-5">
            <nav id="navbar" class="navbar navbar-expand-lg position-fixed top-0 ms-auto">
               
                <div class="collapse shadow-bg navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav p-5">
                        <a className="nav-item nav-link text-center mx-3 active" href="#home">Home</a>
                        <a className="nav-item nav-link text-center mx-3" href="#portfolio">Portfolios</a>
                        <a className="nav-item nav-link text-center mx-3" href="#team">Team</a>
                        <a className="nav-item nav-link text-center mx-3" href="#contact">Contact</a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
            <div id="home" className="frontpage">
        <div className="wrapper">
            <header>
                <div className="row">
                    <div className="left col-12 col-lg-4">
                        <div className="col-4 d-none d-lg-block">
                            <div className="logo">
                                <a href="#">
                                    <img src={logo} alt="Logo" />
                                </a>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="header">
                                <div className="header-text">
                                    <h1 className='h1-text '>
                                        We <span className="highlighted">work</span> creatively
                                    </h1>
                                </div>
                            </div>
                            <div className="row justify-content-lg-start justify-content-center buttons">
                                <div className="col-7 col-sm-3 col-lg-5">
                                    <a className="main-button btn-view-portfolio text-center" href="#portfolio">View
                                        portfolio</a>
                                </div>
                                <div className="col-7 col-sm-3 col-lg-5">
                                    <a className="button text-center" href="#contact">Contact</a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-12">
                                <div className="indicators">
                                    <span className="indicator-main active" onclick="currentSlide(1)"></span>
                                    <span className="indicator-main" onclick="currentSlide(2)"></span>
                                    <span className="indicator-main" onclick="currentSlide(3)"></span>
                                    <span className="indicator-main" onclick="currentSlide(4)"></span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 ">
                               
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-12 col-lg-8">
                        <div className="gallery">
                            <div className="slide fade"  style={{display:'block'}}>
                                <img src={pic4} alt="woman" />
                            </div>
                        
                            <div className="arrows d-none d-lg-block">
                                <a className="arrow-right" onclick="plusSlides(1)"><i className="bi bi-arrow-right"></i></a>
                                <a className="arrow-left" onclick="plusSlides(-1)"><i className="bi bi-arrow-left"></i></a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </header>
        </div>
    </div>
            </>
        )

    }
}

export default Homepage;