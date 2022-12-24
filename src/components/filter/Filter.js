import React from 'react';
// import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <>
      <label className={css.filter__label}>
        Find contacts by name
        <input
          className={css.filter__input}
          type="text"
          value={filter}
          onChange={onChangeFilter}
        />
      </label>
    </>
  );
};

Filter.prototype = {
  filter: PropTypes.string,
  onChangeFilter: PropTypes.func,
};
