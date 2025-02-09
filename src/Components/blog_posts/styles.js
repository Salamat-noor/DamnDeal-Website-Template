import styled from "styled-components";

export const StyledBlogContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 25px 0px !important;

  .blog-post-nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0 !important ;
  }
  .blog-post-nav > h1 {
    font-size: 2rem;
  }
  #blog-post-BTn {
    border: none;
    outline: none;
    font-size: 1rem;
    padding: 0;
    padding: 5px 0px;
    background-color: inherit;
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }
  #blog-post-BTn::before {
    content: "";
    width: 100%;
    height: 2px;
    background-color: #333;
    position: absolute;
    left: -30%;
    bottom: 0;
  }
  #blogPostRow {
    margin: 15px 0px;
  }
  #blogCol {
    overflow: hidden;
    text-align: left;
  }
  #blogIMGContainer > img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  @media (max-width: 426px) {
    .blog-post-container {
      margin: 50px 0px;
    }
    #blogPostRow {
      gap: 3rem;
    }
    #blogCol {
      margin: 50px 0px;
      text-align: center;
    }
    .blog-post-nav > h1 {
      font-size: 18px;
    }
  }
`;
