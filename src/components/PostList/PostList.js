import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Post from '../Post';

class PostList extends Component {
  state = { items: this.props.posts, hasMore: true };

  componentDidMount() {
    if (this.props.posts.length < 1) {
      this.props.fetchPosts(this.props.posts.length);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.posts !== prevProps.posts) {
      this.setState({
        items: this.props.posts
      });
    }
  }

  fetchMoreData = () => {
    if (this.state.items.length >= 100) {
      this.setState({ hasMore: false });
      return;
    }

    this.props.fetchPosts(this.state.items.length);
  };

  render() {
    const { items } = this.state;

    return (
      <InfiniteScroll
        dataLength={this.state.items.length}
        next={this.fetchMoreData}
        hasMore={this.state.hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <button
            type="button"
            className="btn btn-lg btn-info btn-block"
            style={{ textAlign: 'center' }}
            onClick={() => window.scrollTo(0, 0)}
          >
            <b>Scroll Back </b>
          </button>
        }
      >
        <div className="d-flex flex-wrap justify-content-around">
          {items &&
            items.map(({ id, userId, title, body }) => (
              <Post
                key={id}
                id={id}
                userId={userId}
                title={title}
                body={body}
              />
            ))}
        </div>
      </InfiniteScroll>
    );
  }
}

export default PostList;
