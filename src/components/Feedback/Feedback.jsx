import React from 'react';
import ReactDOM from 'react-dom/client';
import { Component } from 'react';

export default Feedback;
class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleAddGoodComment = () => {
    this.setState(prevState => {
      return {
        good: prevState.value + 1,
      };
    });
  };
  handleAddNeutralComment = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.value + 1,
      };
    });
  };
  handleAddBadComment = () => {
    this.setState(prevState => {
      return {
        bad: prevState.value + 1,
      };
    });
  };

  render() {
    return;
    <div>
      <h2>Please leave feedback</h2>
      <div>
        <button type="button" onClick={this.handleAddGoodComment}>
          Good
        </button>
        <button type="button" onClick={this.handleAddNeutralComment}>
          Neutural
        </button>
        <button type="button" onClick={this.handleAddBadComment}>
          Bad
        </button>
      </div>
    </div>;
  }
}
