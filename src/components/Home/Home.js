import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../Layout/Layout';
import Posts from '../Posts/Posts';

const getPosts = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
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
        }
      }
    }
  }
`;

const Home = () => {
  const { allMdx } = useStaticQuery(getPosts);
  const posts = allMdx.edges;

  return (
    <Layout>
      <Posts posts={posts} />
    </Layout>
  );
};

export default Home;
