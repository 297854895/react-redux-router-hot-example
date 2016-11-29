import React, { Component, PropTypes } from 'react';
import styles from './component.less';
export default class Component_ extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div className={styles.component}>
        <h1>Component</h1>
        <p>This is Component</p>
      </div>
    );
  }
}
