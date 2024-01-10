import React, { useState} from "react";
import "./NewPost.css"

const BASE_URL = "http://127.0.0.1:8000/"

function NewPost() {
    const [image, setImage] = useState(null);
    const [creator, setCreator] = useState("");
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    return (
        <div className="newpost-content">
            <div className="newpost-image">
                <input type="file" id="fileInput" onChange={null}/>
            </div>
            <div className="newpost-creator">
                <input type="text"
                       className="newpost-creator"
                       id="creator-input"
                       placeholder="Creator"
                       onChange={(event) => setCreator(event.target.value)}
                       value={creator}/>
            </div>
            <div className="newpost-title">
                <input type="text"
                       className="newpost-title"
                       id="title-input"
                       placeholder="Title"
                       onChange={(event) => setTitle(event.target.value)}
                       value={title}/>
            </div>
            <div className="newpost-text">
                <textarea className="newpost-text"
                          rows="10"
                          id="content-input"
                          placeholder="Content"
                          onChange={(event) => setText(event.target.value)}
                          value={text} />
            </div>
            <div>
                <button className="create-button" onClick={null}>Publish</button>
            </div>
        </div>
    )
}

export default NewPost;