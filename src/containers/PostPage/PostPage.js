import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import withJsonService from '../../hoc';
import {
  fetchUser,
  fetchComments,
  fetchPost,
  createComment
} from '../../store/actions';
import './Postpage.css';

class PostPage extends Component {
  state = {
    formData: {
      name: '',
      email: '',
      body: '',
      userId: this.props.match.params.userId,
      id: ''
    },
    start: 0,
    limit: 2
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    const { userId } = this.props.match.params;
    this.props.fetchPost(id);
    this.props.fetchUser(userId);
    this.props.fetchComments(id);
  }

  renderComments = (comments, start, limit) => {
    return comments.slice(start, limit).map(comment => (
      <div className="card p-0 m-1" key={comment.id}>
        <div className="card-header">
          <h5 className="card-title">Name: {comment.name}</h5>
          <h6 className="card-subtitle">E-mail: {comment.email}</h6>
        </div>
        <p className="card-body py-1 mb-0">{comment.body}</p>
      </div>
    ));
  };

  onSubmitHandler = e => {
    e.preventDefault();
    this.props.createComment(this.state.formData);
    this.setState({ limit: this.state.limit + 1 });

    window.scroll({
      top: 200,
      left: 0,
      behavior: 'smooth'
    });
  };

  onChangeHandler = e => {
    const name = e.target.name;
    this.setState({
      formData: { ...this.state.formData, [name]: e.target.value }
    });
  };

  render() {
    const { post, user, comments } = this.props;
    const { formData, start, limit } = this.state;

    if (post && user) {
      return (
        <div className="card mt-3 mx-auto PostPage-container">
          <div className="card-header bg-info text-white">
            <Link
              to={`/author-page/${user.id}`}
              style={{ textDecoration: 'none' }}
              className="btn btn-primary"
            >
              <h4 className="card-title mb-1">{user.name}</h4>
            </Link>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="card PostPage">
                <div className="card-header bg-secondary border-bottom-0">
                  <h4 className="card-title">{post.title}</h4>
                </div>
                <hr />
                <p className="card-text lead">
                  <strong>{post.body}</strong>{' '}
                </p>
              </div>
            </li>
            <li className="list-group-item">
              <div className="card-header bg-success text-white">
                <h4 className="card-title mb-0">Comments:</h4>
              </div>
              {comments && this.renderComments(comments, start, limit)}

              <button
                type="button"
                className="btn btn-block btn-outline-secondary"
                onClick={() => {
                  if (this.state.limit > 0) {
                    this.setState({ limit: this.state.limit - 1 });
                    window.scrollBy({
                      top: -150,
                      left: 0,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                Show less
              </button>
              <button
                type="button"
                className="btn btn-block btn-outline-secondary"
                onClick={() => {
                  if (this.state.limit < comments.length) {
                    this.setState({ limit: this.state.limit + 1 });
                    window.scrollBy({
                      top: 150,
                      left: 0,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                Show more
              </button>

              <form
                onSubmit={this.onSubmitHandler}
                className="w-50 mx-auto mt-2"
              >
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={this.onChangeHandler}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail:</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={this.onChangeHandler}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="body">Body:</label>
                  <textarea
                    className="form-control"
                    name="body"
                    id="body"
                    value={formData.body}
                    onChange={this.onChangeHandler}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-success">
                  Comment
                </button>
              </form>
            </li>
          </ul>
        </div>
      );
    }
    return <div />;
  }
}

const mapStateToProps = ({ user, posts, comments }) => {
  return {
    user: user.user,
    posts: posts.posts,
    post: posts.post,
    comments: comments.comments
  };
};

const mapDispatchToProps = (dispatch, { jsonService }) => {
  return bindActionCreators(
    {
      fetchUser: fetchUser(jsonService),
      fetchComments: fetchComments(jsonService),
      fetchPost: fetchPost(jsonService),
      createComment: createComment(jsonService)
    },
    dispatch
  );
};

export default withJsonService(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostPage)
);
