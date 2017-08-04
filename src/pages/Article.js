import React, {Component} from 'react';
import { Link } from 'react-router-dom';
class Article extends Component{
  render() {
    const {title} = this.props;
    return(
      <div className="col-md-4">
      <h2>{title}</h2>
      <p> lorem ipsum</p>
      <a className="btn btn-default" href ="#">more info</a>
      </div>
    );
  }
}

export default Article;
