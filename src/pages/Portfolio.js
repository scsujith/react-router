import React, {Component} from 'react';
import { Link } from 'react-router-dom';
class Portfolio extends Component{

  render(){
    return(
      <section className="no-padding" id="portfolio">
        <div className="container-fluid">
            <div className="row no-gutter popup-gallery">
                <div className="col-lg-4 col-sm-6">
                    <Link to= "https://www.google.co.in" className="portfolio-box">
                        <img src={require('../img/portfolio/thumbnails/1.jpg')} className="img-responsive" alt="" />
                        <div className="portfolio-box-caption">
                            <div className="portfolio-box-caption-content">
                                <div className="project-category text-faded">
                                    Category
                                </div>
                                <div className="project-name">
                                    Project Name
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <Link to="../img/portfolio/fullsize/2.jpg" className="portfolio-box">
                        <img src={require('../img/portfolio/thumbnails/2.jpg')} className="img-responsive" alt="" />
                        <div className="portfolio-box-caption">
                            <div className="portfolio-box-caption-content">
                                <div className="project-category text-faded">
                                    Category
                                </div>
                                <div className="project-name">
                                    Project Name
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <Link to="img/portfolio/fullsize/3.jpg" className="portfolio-box">
                        <img src={require('../img/portfolio/thumbnails/3.jpg')} className="img-responsive" alt="" />
                        <div className="portfolio-box-caption">
                            <div className="portfolio-box-caption-content">
                                <div className="project-category text-faded">
                                    Category
                                </div>
                                <div className="project-name">
                                    Project Name
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <Link to="img/portfolio/fullsize/4.jpg" className="portfolio-box">
                        <img src={require('../img/portfolio/thumbnails/4.jpg')} className="img-responsive" alt="" />
                        <div className="portfolio-box-caption">
                            <div className="portfolio-box-caption-content">
                                <div className="project-category text-faded">
                                    Category
                                </div>
                                <div className="project-name">
                                    Project Name
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <Link to="img/portfolio/fullsize/5.jpg" className="portfolio-box">
                        <img src={require('../img/portfolio/thumbnails/5.jpg')} className="img-responsive" alt="" />
                        <div className="portfolio-box-caption">
                            <div className="portfolio-box-caption-content">
                                <div className="project-category text-faded">
                                    Category
                                </div>
                                <div className="project-name">
                                    Project Name
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <Link to="img/portfolio/fullsize/6.jpg" className="portfolio-box">
                        <img src={require('../img/portfolio/thumbnails/6.jpg')} className="img-responsive" alt="" />
                        <div className="portfolio-box-caption">
                            <div className="portfolio-box-caption-content">
                                <div className="project-category text-faded">
                                    Category
                                </div>
                                <div className="project-name">
                                    Project Name
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        <aside className="bg-dark">
        <div className="container text-center">
            <div className="call-to-action">
                <h2>Free Download at Start Bootstrap!</h2>
                <Link to="http://startbootstrap.com/template-overviews/creative/" className="btn btn-default btn-xl sr-button">Download Now!</Link>
            </div>
        </div>
    </aside>
    </section>

    );
  }
}

export default Portfolio;
