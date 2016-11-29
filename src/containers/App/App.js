import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as clientAC from '../../redux/actions/client';
import styles from './App.less';
import {Public} from '../../components';
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
  render() {
    return (
      <div className={styles.container}>
        <Public />
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
