import React, { useState, useEffect } from "react";
import "./Post.css"

const BASE_URL = "http://127.0.0.1:8000/"

function Post({post}) {
    const [imageUrl, setImageUrl] = useState("")

    useEffect(() => {
        setImageUrl(BASE_URL + post.image_url);
    }, []);

    const handleDelete = (e) => {
        e?.preventDefault();

        const requestOptions = {
            method: "DELETE"
        }

        fetch(BASE_URL + "post/" + post.id, requestOptions)
            .then(response => {
                if (response.ok) {
                    window.location.reload();
                }
                throw response;
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="post">
            <img className="post-image" src={imageUrl}></img>
            <div className="post-content">
                <div className="post-title">{post.title}</div>
                <div className="post-creator">by {post.creator}</div>
                <div className="post-text">{post.content}</div>
                <div className="post-delete">
                    <button className="btn-delete" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Post;