import React, {Component} from 'react';
import { Link } from 'react-router-dom';
class Layout extends Component{
  //  navigate(){
  //    console.log(this.props);
  //  }
  render(){
    return(
      <div>
      <h1>killer news </h1>
      {this.props.children}
      <Link to="/Portfolio" className="btn btn-success">protfolio</Link>
    {/*}  <button onClick={this.navigate.bind(this)}>featured</button> */}
      </div>
    );
  }
}

export default Layout;
