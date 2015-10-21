import React, { Component, PropTypes } from 'react';
import provide from 'react-redux-provide';

@provide({
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  createItem: PropTypes.func.isRequired
})
export default class GoodTimes extends Component {
  addTime() {
    this.props.createItem({
      time: Date.now()
    });
  }

  render() {
    return (
      <div className="good-times">
        {this.renderButton()}
        {this.renderTimes()}
      </div>
    );
  }

  renderButton() {
    const style = {
      fontSize: '20px',
      marginBottom: '20px'
    };
    
    return (
      <input
        type="button"
        style={style}
        value="Let the good times roll"
        onClick={::this.addTime}
      />
    );
  }

  renderTimes() {
    return this.props.list.map(
      item => (
      	<li key={item.time}>
      	  {new Date(item.time).toString()}
      	</li>
      )
    );
  }
}