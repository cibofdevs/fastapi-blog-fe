import React, { useState, useEffect } from "react";
import "./Post.css"

const BASE_URL = "http://127.0.0.1:8000/"

function Post({post}) {
    const [imageUrl, setImageUrl] = useState("")

    useEffect(() => {
        setImageUrl(BASE_URL + post.image_url);
    }, []);

    return (
        <div className="post">
            <img className="post-image" src={imageUrl}></img>
        </div>
    )
}

export default Post;