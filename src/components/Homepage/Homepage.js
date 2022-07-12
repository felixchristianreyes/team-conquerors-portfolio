import React from 'react';
import logo from './img/logo.png';
import pic4 from './img/pic4.jpg';




class Homepage extends React.Component {
    render() {
        return (
            <>
                <nav id="navbar" class="navbar navbar-expand-lg d-flex justify-content-center align-items-center ">

                    <div class="collapse shadow-bg navbar-collapse d-flex justify-content-between" id="navbarNavAltMarkup">
                        <div className="logo mx-5">
                         
                                <img src={logo} alt="Logo" />
                           
                        </div>
                        <div class="navbar-nav p-5">
                            <a className="nav-item nav-link text-center mx-3 active" href="#home">Home</a>
                            <a className="nav-item nav-link text-center mx-3" href="#portfolio">Portfolios</a>
                            <a className="nav-item nav-link text-center mx-3" href="#team">Team</a>
                            <a className="nav-item nav-link text-center mx-3" href="#contact">Contact</a>
                        </div>
                    </div>
                </nav>
                <div id="home" className="frontpage">
                    <div className="wrapper">
                        <header>
                            <div className="row">

                                <div className="header">
                                    <div className="header-text">
                                        <h1 className='h1-text '>
                                            We <span className="highlighted">work</span> creatively
                                        </h1>
                                        <div></div>
                                        <div class="row justify-content-lg-start justify-content-center buttons">
                                            <div class="col-7 col-sm-3 col-lg-5">
                                                <a class="main-button btn-view-portfolio text-center my-5" href="#portfolio">View
                                                    portfolio</a>
                                                    
                                            </div>
                                            
                                            
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <section>
                                <div id="accordion">
                                    <div class="expertize container">

                                        <div class="cards row justify-content-between">
                                            <div class="col-3">
                                                <div id="headingOne" class="card" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    <i class="card-icon bi bi-lightbulb"></i>
                                                    <p class="subtitles">Business <br /> Development</p>
                                                </div>
                                            </div>
                                            <div class="col-3">
                                                <div id="headingTwo" class="card collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    <i class="card-icon bi bi-palette2"></i>
                                                    <p class="subtitles">Graphic <br /> Design</p>
                                                </div>
                                            </div>
                                            <div class="col-3">
                                                <div id="headingThree" class="card collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    <i class="card-icon bi bi-diagram-3"></i>
                                                    <p class="subtitles">Project <br /> Management</p>
                                                </div>
                                            </div>
                                            <div class="col-3">
                                                <div id="headingThree" class="card collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                                                    <i class="card-icon bi bi-chat-dots"></i>
                                                    <p class="subtitles">Marketing &amp; <br /> Study</p>
                                                </div>
                                            </div>
                                        </div>


                                        <div id="collapseOne" class="content row collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div class="col-12 col-lg-6">
                                                <h2>Business <br /><span class="highlighted">Development</span></h2>
                                            </div>
                                            <div class="col-12 col-lg-6">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia et corporis
                                                    necessitatibus laborum soluta eligendi nesciunt ea nemo praesentium recusandae incidunt
                                                    fugit minus, veniam unde omnis, numquam deleniti est tempora.
                                                </p>
                                            </div>
                                        </div>

                                        <div id="collapseTwo" class="content row collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                            <div class="col-12 col-lg-6">
                                                <h2>Graphic <br /><span class="highlighted">Design</span></h2>
                                            </div>
                                            <div class="col-12 col-lg-6">
                                                <p>Quia et corporis necessitatibus laborum soluta eligendi nesciunt ea nemo praesentium
                                                    recusandae incidunt
                                                    fugit
                                                    minus, veniam unde omnis, numquam deleniti est tempora.
                                                </p>
                                            </div>
                                        </div>

                                        <div id="collapseThree" class="content row collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                            <div class="col-12 col-lg-6">
                                                <h2>Project <br /><span class="highlighted">Management</span></h2>
                                            </div>
                                            <div class="col-12 col-lg-6">
                                                <p>Earum non iste quasi quia! Quas asperiores tempore aliquid doloremque fugiat
                                                    quidem quia! Expedita, eligendi amet.</p>
                                            </div>
                                        </div>

                                        <div id="collapseFour" class="content row collapse" aria-labelledby="headingFour" data-parent="#accordion">
                                            <div class="col-12 col-lg-6">
                                                <h2>Marketing &amp;<br /><span class="highlighted">Study</span></h2>
                                            </div>
                                            <div class="col-12 col-lg-6">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolorum
                                                    aspernatur ipsa praesentium maiores totam, ipsam adipisci pariatur ad nihil!</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </section>
                        </header>
                    </div>

                </div>

            </>
        )

    }
}

export default Homepage;