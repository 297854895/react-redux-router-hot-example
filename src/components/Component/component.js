import React, { Component , PropTypes} from 'react';
import styles from './component.less';
export default class Component_ extends Component{
  constructor(props, context) {
    super(props,context);
    this.context.router;
  }
  toNot = () => {
    this.context.router.push({pathname: '/not'})
  }
  render(){
    return (
      <div className={styles.component} id="component">
        <h1>Component</h1>
        <p>This is Component</p>
        <b onClick={this.toNot}>to not</b>
      </div>
    );
  }
}
Component_.contextTypes = {
  router: Object
}
