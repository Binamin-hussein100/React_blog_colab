import React,{useEffect,useState} from "react"


function HomePage(){
const[blogdata,setBlogdata]= useState({
    title:"",
    author:"",
    date:"",
    content:"",
    tags:[]
    
})
useEffect(()=>{
    fetch("http://localhost:8080/blogs/1")
    .then(res => res.json())
    .then(data => setBlogdata(data))


},[])
console.log(blogdata)
    return(
        <>
                <div >
                    <div>
                        <h1 className="title"> <span className="span">Latest</span> Blog</h1></div>
                    <div className="blog">
                  <h2> {blogdata.title}</h2>
                  <h3> {blogdata.author}</h3>
                  <h4> {blogdata.date}</h4>
                  <p className="content"> {blogdata.content}</p>
                  <p className="tags">{blogdata.tags.map((tag)=>(
                    <li key={tag}>{tag}</li>
                  ))}</p>

                    </div>
                </div>




        </>
    )
}
export default HomePage;