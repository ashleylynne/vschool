import React from "react"

function DisplayBlogs(props){
    console.log(props,444)    
    return(
        <div className="blogs2">
            <div>
                <span className="blog-title">{props.title}</span>

            </div>
                <span className="subtitle">{props.subTitle} </span>
            <span>
                <p className="author-and-date"> Posted by <space></space>
                    <span className = "author">
                        {props.author}
                    </span>
                    <span className = "date">
                        {props.date}
                    </span>
                </p>
            </span>


            
        
        </div>

        )
}

export default DisplayBlogs