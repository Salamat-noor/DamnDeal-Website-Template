import React from "react";
import { Row, Col } from "antd";

import { StyledBlogContainer } from "./styles";

const BlogPost = ({ JSONDATA }) => {
  return (
    <StyledBlogContainer className="blog-post-container">
      <nav className="blog-post-nav">
        <h1>Blog Posts</h1>
        <button type="button" id="blog-post-BTn">
          See All
        </button>
      </nav>

      <Row id="blogPostRow" justify={"space-between"}>
        {JSONDATA.map((el, index) => (
          <Col xs={24} md={7} key={el.id} id="blogCol">
            <div id="blogIMGContainer">
              <img src={el.src} alt="" />
            </div>
            <p>{el.logoTitle}</p>
            <h3>{el.title}</h3>
            <p>{el.desc}</p>
          </Col>
        ))}
      </Row>
    </StyledBlogContainer>
  );
};

export default BlogPost;
