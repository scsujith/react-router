import React, {Component} from 'react';
import { Link } from 'react-router-dom';
{/*import LogoImg from '../img/portfolio/thumbnails/1.jpg'; */}
class Home extends Component {
  render(){
    return(
      <header>
        <div className="header-content">
            <div className="header-content-inner">
                <h1 id="homeHeading">Your Favorite Source of Free Bootstrap Themes</h1>
                <hr />
                <p>Start Bootstrap can help you build better websites using the Bootstrap CSS framework! Just download your template and start going, no strings attached!</p>
                <Link to="/Services" className="btn btn-primary btn-xl page-scroll">Find Out More</Link>
              { /*  <img src={LogoImg} className="img-responsive" alt="" />
               <img src={require('./1.jpg')} /> */}
            </div>
        </div>
    </header>
    );
  }
}

export default Home;
