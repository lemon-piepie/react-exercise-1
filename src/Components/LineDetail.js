import React, { Component } from 'react';
import './LineDetail.css';

class LineDetail extends Component {
    render(props) {
      return(
      <tr>
          <td className="year">{this.props.year}</td>
          <td className="detail">
            <h4>{this.props.firstLine}</h4>
            <p>{this.props.secondLine}</p>
          </td>
      </tr>
      );
    }
  }

export default LineDetail;