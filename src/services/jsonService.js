import axios from 'axios';

export default class JsonService {
  static _apiBase = `https://jsonplaceholder.typicode.com/`;

  async getResource(url) {
    try {
      const resp = await axios.get(`${JsonService._apiBase}${url}`);
      return resp.data;
    } catch (err) {
      return err;
    }
  }

  async postResource(url, body) {
    try {
      const resp = await axios.post(`${JsonService._apiBase}${url}`, body);
      return resp.data;
    } catch (err) {
      return err;
    }
  }

  randomId = id => {
    return `${id}_${Math.random()
      .toString(36)
      .substr(2, 9)}`;
  };

  getPosts = async start => {
    const resp = await this.getResource(`posts?_start=${start}&_limit=10`);
    return resp;
  };

  getUserPosts = async id => {
    const resp = await this.getResource(`posts?userId=${id}`);
    return resp;
  };

  getPost = async id => {
    const resp = await this.getResource(`posts/${id}`);
    return resp;
  };

  createPost = async body => {
    const resp = await this.postResource('posts', body);
    return {
      id: this.randomId(resp.id),
      userId: resp.userId,
      title: resp.title,
      body: resp.body
    };
  };

  getUser = async id => {
    const resp = await this.getResource(`users/${id}`);
    return resp;
  };

  getComments = async postId => {
    const resp = await this.getResource(`comments?postId=${postId}`);
    return resp;
  };

  createComment = async body => {
    const resp = await this.postResource(`comments`, body);
    return { ...resp, id: this.randomId(resp.id) };
  };
}
