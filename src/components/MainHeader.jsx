import { MdPostAdd, MdMessage } from 'react-icons/md';

import classes from './MainHeader.module.css';

import PropTypes from 'prop-types';

function MainHeader({ onCreatePost }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React: Posting App 
      </h1>
      <p>
        <button className={classes.button} onClick={onCreatePost}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
}

MainHeader.propTypes = {
    onCreatePost: PropTypes.node.isRequired
};

export default MainHeader;