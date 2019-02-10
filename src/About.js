import React, { Component } from 'react';
import parth from './parthBackground.jpeg';
import lawrence from './lawrence.jpg';


class About extends Component {
  render() {
    return (
      <div>
        <h2>
          {this.props.header}
        </h2>
        <img src={this.props.profPic} />
        <p>
          {this.props.description}
        </p>
      </div>
    );
  }
}

export default About;
