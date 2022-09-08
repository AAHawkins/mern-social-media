import React, { Fragment } from 'react';
import Post from './post/Post';

import useStyles from './styles.js';

const Posts = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <h1>Posts</h1>
      <Post />
      <Post />
    </Fragment>
  );
};

export default Posts;
