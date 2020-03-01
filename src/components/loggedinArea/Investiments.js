import React, { Component } from "react";
import Cards from './Cards';

class Invetiments extends Component{
  render(){
    return(
      <React.Fragment>
         <Cards />
         <Cards />
         <Cards />
         <Cards />
      </React.Fragment>
    );
  }
}

export default Invetiments