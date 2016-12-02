import React, {Component} from 'react';
import styles from './Index.less';
export default class Index extends Component {
  constructor(props, context) {
    super(props, context);
    this.context.router
  }
  render() {
    return (
      <div className={styles.index}>
        <h1>Index</h1>
        <p>This is Index</p>
      </div>
    );
  }
}
Index.contextTypes = {
  router: Object
}
