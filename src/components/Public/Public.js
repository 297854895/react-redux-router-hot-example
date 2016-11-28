import React, { Component, PropTypes } from 'react';

export default class Public extends Component{
  constructor(props) {
    super(props);
    this.state = { num: 0 }
  }
  componentDidMount = () => {
    setInterval(()=>{
      this.setState({num : this.state.num += 1});
    },1000);
  }
  render(){
    return (
        <h1>{this.state.num}</h1>
    );
  }
}
