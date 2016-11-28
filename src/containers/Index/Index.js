import React, {Component} from 'react';
import styles from './Index.less';

export default class Index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="index">
        <h1>Index</h1>
        <p>This is Index</p>
      </div>
    );
  }
}
