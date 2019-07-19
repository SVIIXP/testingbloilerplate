import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Single from './Single'


export default class Grid extends Component {
  renderList() {
    const { items } = this.props
    return items.map(item => (
      <Single key={item.id} item={item} />
    ));
  }

  render() {
    return (
      <div>
        <div className="row">
          <ul>
            {this.renderList()}
          </ul>
        </div>
      </div>
    )
  }
}

Grid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    release_date: PropTypes.string,
    views: PropTypes.string,
    image: PropTypes.string,
  })).isRequired,
};
