import React from 'react';
import { browserHistory } from 'react-router';

class SiteTile extends React.Component {
  render() {
    return (
      <div className="col col-sm-6 site-tile" onClick={this.props.onTileClick.bind(this, this.props._id)}>
        <h1>{this.props.name}</h1>
        {/* <p>{this.props.url}</p> */}
        {/* on click, edit modal needs to pop up */}
        {/* <button>edit</button>
        <button onClick={this.props.onDelete}>delete</button> */}
      </div>
    );
  }
}

export default SiteTile;
