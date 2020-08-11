import React, { Component } from 'react';
import imgURL from "../assets/avatar.jpg";
import './HeadPart.css';

class HeadPart extends Component {
    render(props) {
      return(
      <div className="headpart">
        <img src = {imgURL}></img>
        <h1>Hello,</h1>
        <h2>MY NAME IS {this.props.name} AND THIS IS MY RESUME.</h2>
        <hr/>
        <div className="floatClear"></div>
      </div>
      );
    }
  }

export default HeadPart;