import React from 'react';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

import styles from './Post.module.css';

const Post = ({ post }) => {
  const { title, date, author, slug } = post.frontmatter;
  const image = post.frontmatter.image.childImageSharp.fluid;

  return (
    <article className={styles.post}>
      <div className={styles.image}>
        <Image fluid={image} />
      </div>
      <div className={styles.info}>
        <div>
          <h2>{title}</h2>
          <h6>
            <span>by {author}</span> / <span>{date}</span>
          </h6>
          <p>{post.excerpt}</p>
          <Link to={slug} className={styles.link}>
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Post;
