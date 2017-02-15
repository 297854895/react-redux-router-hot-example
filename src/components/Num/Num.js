
import React, { Component , PropTypes} from 'react';
import styles from './Num.less';
export default class Num extends Component{
  constructor(props) {
    super(props);
  }
  toNot = () => {
    this.props.router.push({pathname: '/not'})
  }
  render(){
    return (
      <div className={styles.component} id="component">
        <h1>Num component</h1>
        <p>This is Num component</p>
        <b onClick={this.toNot}>click to notfound</b>
      </div>
    );
  }
}
