import React, { Component } from 'react';
import LineDetail from './LineDetail';
import './Education.css';


class Education extends Component {
    render(props) {
      return(
      <div className="education">
        <h2>EDUCATION</h2>
        <table>
        <LineDetail year="1990" firstLine = "I was born in Katowice" secondLine = "Lorem inpsm dolor sit amet, 
        consectetur adipisicing elit.Sapiente, exercitationem, totam, dolores iste dolore est aut modi."/>
        <LineDetail year="2005" firstLine = "Secondary school specializing in artistic" secondLine = "Eos, explicabo,
         nam, teneturet ab eius deserunt aspernatur ipsum ducimus quibusdam quis voluptatibus."/>
        <LineDetail year="2009" firstLine = "First level graduation in Graphic Design" secondLine = "Aspernatur, 
        molitia, quos maxime eiussuscipit sed beatae ducimus quaerat quibusdam perferendis? lusto, quibusdam asperiores 
        unde repellat."/>
        <LineDetail year="2015" firstLine = "Second level graduation in Graphic Design" secondLine = "Ducimus, aliquam 
        tempore autem itaqueet accusantium!"/>
        </table>
      </div>
      );
    }
  }

export default Education;