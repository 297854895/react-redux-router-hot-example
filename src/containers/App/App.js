import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as clientAC from '../../redux/actions/client';
// import styles from './App.less';
@connect(
  state => ({clientState: state.client}),
  dispatch => ({clientBoundAC: bindActionCreators(clientAC, dispatch)})
)
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate = () => {
    return false;
  }
  componentWillMount = () => {
    console.log('componentWillMount');
  }
  componentDidMount = () => {
    console.log('componentDidMount');
  }
  componentWillReceiveProps = () => {
    console.log('componentWillReceiveProps');
  }
  componentWillUpdate = () => {
    console.log('componentWillUpdate');
  }
  componentDidUpdate = () => {
    console.log('componentDidUpdate');
  }
  componentWillUnmount = () => {
    console.log('componentWillUnmount');
  }
  render() {
    return (
      <div className="container">
        <h1>App</h1>
        <p>This is a example for React</p>
        <a href="/component">component</a>
        <div></div>
        <a href="/">Index</a>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}
