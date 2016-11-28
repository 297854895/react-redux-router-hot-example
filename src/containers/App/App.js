import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as clientAC from '../../redux/actions/client';

@connect(
  state => ({clientState: state.client}),
  dispatch => ({clientBoundAC: bindActionCreators(clientAC, dispatch)})
)
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    return (
      <div className="container">
        <h1>Hello</h1>
        <p>This is a example for React</p>
        <a href="/component">component</a>
        <div></div>
        <a href="/">Hello</a>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}
