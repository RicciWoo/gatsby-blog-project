import React from 'react';
import Image from 'gatsby-image';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import styles from './PostTemplate.module.css';
import Layout from '../components/Layout/Layout';

const PostTemplate = ({ data }) => {
  const { title, date, author, image } = data.mdx.frontmatter;
  const { fluid } = image.childImageSharp;
  const { body } = data.mdx;

  return (
    <Layout>
      <section className={styles.template}>
        <Link className={styles.link}>Back to All Posts</Link>
        <div className={styles.info}>
          <h1>{title}</h1>
          <h4>
            <span>by {author}</span> / <span>{date}</span>
          </h4>
        </div>
        <Image fluid={fluid} />
        <div className={styles.content}>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        date(formatString: "MMMM Do, YYYY")
        author
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      body
    }
  }
`;

export default PostTemplate;
