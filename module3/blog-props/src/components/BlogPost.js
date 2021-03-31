import React from "react"
import DisplayBlogs from "./DisplayBlogs"
import blogList from './BlogList'

function BlogPost(){
    const blogData = blogList.map(function(post) {
        console.log(blogList, 111)
        return(
            <DisplayBlogs key 
            title = {post.title}
            subTitle={post.subTitle}
            author={post.author} 
            date={post.date}/>
            )
        })
        return <div className="blogs1">  
                        {blogData} 
                </div>
}

export default BlogPost
