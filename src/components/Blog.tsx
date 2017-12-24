import * as React from 'react';

class Post {
    id: number;
    title: string;
    content: string;
}

interface ISidebar {
    posts: Array<Post>;
}

class Sidebar extends React.Component<ISidebar> {
    render() {
        return (
            <ul>
                {this.props.posts.map(
                    (post) =>
                        <li key={post.id}>{post.title}</li>
                )}
            </ul>
        );
    }
}

class Content extends React.Component<ISidebar> {
    render() {
        return (
            <div>
                {this.props.posts.map(
                    (post) =>
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                        </div>
                )}
            </div>
        );
    }
}

class Blog extends React.Component<ISidebar> {
    render() {
        return (
            <div>
                <h1>List and Keys</h1>
                <Sidebar posts={this.props.posts} />
                <hr />
                <Content posts={this.props.posts} />
            </div>
        );
    }
}

export default Blog;