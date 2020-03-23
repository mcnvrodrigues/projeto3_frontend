import React, { Component } from 'react';

class DefaultMessage extends Component {
  render() {
    return (
        <div className='container'> 
            <div className='box  has-background-primary'>
                <h3 className='subtitle is-3'>{this.props.title}</h3>
                <p>{this.props.message}</p>
                
            </div> 
        </div>
    );
  }
}

export default DefaultMessage;