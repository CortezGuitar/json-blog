import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import withJsonService from '../../hoc';
import { fetchUser, fetchUserPosts } from '../../store/actions';
import Post from '../../components/Post';

class AuthorPage extends Component {
  componentDidMount() {
    const { userId } = this.props.match.params;
    this.props.fetchUser(userId);
    this.props.fetchUserPosts(userId);
  }

  //   // {
  // "id": 1,
  // "name": "Leanne Graham",
  // "username": "Bret",
  // "email": "Sincere@april.biz",
  // "address": {},
  // "phone": "1-770-736-8031 x56442",
  // "website": "hildegard.org",
  // "company": {
  // "name": "Romaguera-Crona",
  // "catchPhrase": "Multi-layered client-server neural-net",
  // "bs": "harness real-time e-markets"
  // }
  // }

  render() {
    const { user, posts } = this.props;

    if (user && posts) {
      const { name, username, email, address, phone, website, company } = user;
      return (
        <div className="card">
          <div className="card-header bg-secondary">
            <h4>
              <ol className="breadcrumb bg-transparent m-0 p-0 justify-content-center">
                <li className="breadcrumb-item">{name}</li>
                <li className="breadcrumb-item">"{username}"</li>
                <li className="breadcrumb-item">{email}</li>
                <li className="breadcrumb-item">{website}</li>
              </ol>
            </h4>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <ol className="breadcrumb bg-transparent m-0 p-0">
                <li className="breadcrumb-item">
                  <strong>Street: </strong>
                  {address.street}
                </li>
                <li className="breadcrumb-item">
                  <strong>Suite: </strong> {address.suite}
                </li>
                <li className="breadcrumb-item">
                  <strong>City: </strong> {address.city}
                </li>
                <li className="breadcrumb-item">
                  <strong>Zipcode: </strong> {address.zipcode}
                </li>
                <li className="breadcrumb-item">
                  <strong>Phone: </strong> {phone}
                </li>
              </ol>
            </li>
            <li className="list-group-item">
              <ol className="breadcrumb bg-transparent m-0 p-0">
                <li className="breadcrumb-item">
                  <strong>Company: </strong>
                  {company.name}
                </li>
                <li className="breadcrumb-item">{company.catchPhrase}</li>
                <li className="breadcrumb-item">{company.bs}</li>
              </ol>
            </li>
            <li className="list-group-item d-flex flex-wrap justify-content-around">
              {posts.map(({ id, userId, title, body }) => (
                <Post
                  key={id}
                  id={id}
                  userId={userId}
                  title={title}
                  body={body}
                />
              ))}
            </li>
          </ul>
        </div>
      );
    }
    return <p>Loading...</p>;
  }
}

const mapStateToProps = ({ user, posts }) => {
  return {
    user: user.user,
    posts: posts.userPosts
  };
};

const mapDispatchToProps = (dispatch, { jsonService }) => {
  return bindActionCreators(
    {
      fetchUser: fetchUser(jsonService),
      fetchUserPosts: fetchUserPosts(jsonService)
    },
    dispatch
  );
};

export default withJsonService(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AuthorPage)
);
