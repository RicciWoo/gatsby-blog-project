import React from 'react';

import styles from './Posts.module.css';
import Post from './Post/Post';

const Posts = ({ posts }) => {
  return (
    <section className={styles.posts}>
      <h1>Ricky Wu</h1>
      <h4>Personal Blog</h4>
      <div className={styles.center}>
        {posts.map(({ node }, index) => {
          return <Post key={index} post={node} />;
        })}
      </div>
    </section>
  );
};

export default Posts;
