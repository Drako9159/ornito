import React from "react";
class Posts extends React.Component {
  state = {
    posts: [],
  };
  async componentDidMount() {
    const res = await fetch(
      "https://my-json-server.typicode.com/typicode/demo/posts"
    );
    const data = await res.json();
    this.setState({ posts: data });
    console.log(data);
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        {this.state.posts.map((e) => {
          return (
            <div key={e.id}>
              <h3>{e.title}</h3>
              <span>{e.id}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Posts;
