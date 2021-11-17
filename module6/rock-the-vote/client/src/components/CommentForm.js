import React from "react"


export default function CommentForm(){
    return(
        <div className="comment-form-container">
            <form>
                <input type="text">
                    comment
                </input>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}