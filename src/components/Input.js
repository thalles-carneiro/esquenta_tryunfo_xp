import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { label, name, type, value, callback } = this.props;

    return (
      <label htmlFor={ name }>
        { label }
        <input
          name={ name }
          type={ type }
          value={ value }
          onChange={ callback }
          data-testid={ `${name}-input` }
        />
      </label>
    );
  }
}

Input.defaultProps = {
  type: 'text',
};

const { string, number, oneOfType, func } = PropTypes;

Input.propTypes = {
  label: string.isRequired,
  name: string.isRequired,
  type: string,
  value: oneOfType([string, number]).isRequired,
  callback: func.isRequired,
};

export default Input;
