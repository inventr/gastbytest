import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'


class Blog extends React.Component {
  //{config.siteTitle} seo title
  render() {
    let data = this.props.data.api.getContentHome.content;
    console.log(data.sentence1a);
    return (
      <Layout>
        <SEO title="Page two" />
        <h1>{data.sentence1a}</h1>
        <p>{data.sentence1d}</p>
        <img src={data.image2} alt=""/>

        {data.listProducts.map(post => (
          <div>
            <img src={post.image} alt=""/>
            <h2> {post.name} </h2>
          </div>
        ))}

        <Link to="/">Mas 57</Link>
      </Layout>
    );
  }
}

export default Blog;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery2{
  api{
    getContentHome{
      content
    }
  }
}
`;

