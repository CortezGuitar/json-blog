import React, { Component } from 'react';

class CreatePost extends Component {
  state = {
    formData: { title: '', body: '' }
  };

  onSubmitHandler = e => {
    e.preventDefault();
    this.props.createPost(this.state.formData);
    this.props.history.push('/');
  };

  onChangeHandler = e => {
    const name = e.target.name;
    this.setState({
      formData: { ...this.state.formData, [name]: e.target.value }
    });
  };

  render() {
    const { formData } = this.state;
    return (
      <form onSubmit={this.onSubmitHandler} className="w-50 mx-auto">
        <div className="form-group">
          <label htmlFor="title">
            <h5>Title:</h5>
          </label>
          <input
            type="text"
            className="form-control"
            name="title"
            id="title"
            value={formData.title}
            onChange={this.onChangeHandler}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">
            <h5>Content:</h5>
          </label>
          <textarea
            className="form-control"
            name="body"
            id="body"
            value={formData.body}
            onChange={this.onChangeHandler}
            required
          />
        </div>
        <div className="text-right">
          <div className="btn-group">
            <button type="submit" className="btn btn-lg btn-success ">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-lg btn-danger"
              onClick={() => this.props.history.push('/')}
            >
              Back
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default CreatePost;
