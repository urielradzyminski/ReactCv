import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Post from './Post'
import axios from 'axios'
import { Route, Switch, Link } from "react-router-dom";

class Posts extends Component { 
    constructor(props) {
        super(props);
        this.state={
            posts:[],
            currentPage:1
        };
        this.increasePageHandler = this.increasePageHandler.bind(this);
        this.decreasePageHandler = this.decreasePageHandler.bind(this);
    }
    
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts', )
            .then( response=>{
                    this.setState({posts: response.data})
                }
            )
    }
    
    increasePageHandler(){
        this.setState({currentPage: this.state.currentPage+1});
        console.log(this.state.currentPage)
    }

    decreasePageHandler(){
        this.setState({currentPage: this.state.currentPage-1});
        console.log(this.state.currentPage)
    }

    render () {
        const startingPost = (this.state.currentPage-1)*10
        const endingPost = (this.state.currentPage)*10-1
        const currentPagePosts= this.state.posts.slice(startingPost, endingPost)
        const posts = currentPagePosts.map(post =>{
            const route = "/posts/" + post.id;
            return (
                <Row key={post.id} className='py-4 px-5'>
                    <Link to={route}>
                        <h2>{post.title}</h2>
                    </Link>
                </Row>
            );
        })

        return (
            <div>
                <button onClick={this.decreasePageHandler}>Prev Page</button>
                <button onClick={this.increasePageHandler}>Next Page</button>
                <Switch>
                    
                    <Route 
                        exact path="/posts/:postId"
                        render={(matchProps)=>{
                            return(<div>
                                <Post
                                    id={matchProps.match.params.postId}
                                />
                            </div>)
                        }}
                    />
                    <Route path="/posts">
                        <Container>
                            {posts}
                        </Container>
                    </Route>
                </Switch>
                </div>


        )
    }
        
}
export default Posts;