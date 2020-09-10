import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Post =(props)=>{
    const [postData, setPostData]=useState({});
    const routeUrl = 'https://jsonplaceholder.typicode.com/posts/'+props.id;
    useEffect( ()=>{
        let mounted = true;
        axios.get(routeUrl, )
            .then( response=>{
                    if(mounted){
                        setPostData(response.data);
                        console.log(response.data);
                    }
                    
                }
            )
        return () => mounted = false;
    }, []);


    return(
        <div>
            <h2>{postData.title}</h2>
            <p>{postData.body}</p>
        </div>
    )
}

export default Post;