import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Link, Switch } from 'react-router-dom';

import CreatePost from '../../components/CreatePost';
import PostsList from '../../components/PostList';
import withJsonService from '../../hoc';
import { fetchPosts, createPost } from '../../store/actions';
import PostPage from '../PostPage';
import AuthorPage from '../AuthorPage';

class HomePage extends Component {
  render() {
    const { fetchPosts, createPost, posts, postsLength, newPosts } = this.props;

    return (
      <div>
        <div className="jumbotron bg-info text-white py-3">
          <h1 className="display-4">
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              JSON-BLOG
            </Link>
          </h1>
          <hr className="my-4 bg-white" />
          <div className="text-center mx-auto" style={{ maxWidth: '16rem' }}>
            <Link
              to="/create-post"
              className="btn btn-block btn-lg btn-primary disabled"
            >
              Create Post
            </Link>
          </div>
        </div>
        <Switch>
          <Route path="/author-page/:userId" component={AuthorPage} />
          <Route path="/post-page/:userId/:id" component={PostPage} />
          <Route
            path="/create-post"
            render={props => <CreatePost {...props} createPost={createPost} />}
          />
          <PostsList
            fetchPosts={fetchPosts}
            posts={posts}
            postsLength={postsLength}
            newPosts={newPosts}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => {
  return {
    posts: posts.posts,
    postsLength: posts.postsLength,
    newPosts: posts.newPosts
  };
};

const mapDispatchToProps = (dispatch, { jsonService }) => {
  return bindActionCreators(
    {
      fetchPosts: fetchPosts(jsonService),
      createPost: createPost(jsonService)
    },
    dispatch
  );
};

export default withJsonService(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomePage)
);
