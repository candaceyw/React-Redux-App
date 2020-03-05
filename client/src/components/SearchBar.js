import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchLaunch } from '../store/actions/spacexActions';

const SearchBar = ({ searchLaunch }) => {
  const text = useRef('');

  const onChange = e => {
    e.preventDefault();
    searchLaunch(text.current.value);
  };

  return (
    <nav style={{ marginBottom: '30px' }} className='blue'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input id='search' type='search' ref={text} onChange={onChange} />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

SearchBar.propTypes = {
  searchLaunch: PropTypes.func.isRequired
};

export default connect(null, { searchLaunch })(SearchBar);
