import React,{useState,useEffect} from "react";
import "./News.css";
function MapDemo(){
    const[title,setTitle]=useState("");
    useEffect(()=>{
document.title="Saroj News";
    },[])

   
      
return(
    <div className="news-container">
        <h1 className="news-title">News-Monkey:Top Headlines</h1>
    <div className="news-grid">
    {newsdata.articles.slice().reverse().map((article,index)=>{
     return <div className="news-card">
<div className="news-content">
<h2 className="news-headline">{article.title}</h2>
        <img src={article.urlToImage || "https://via.placeholder.com/150"} className="news-image"/>
        <p className="news-content">{article.description||"some error"}</p> 
        <p> Author:<strong>{article.author||"unknown"}</strong> </p>
       <p> Source:<strong>{article.source.name||"unknown"}</strong></p>
      <p> Published at:<strong>{new Date(article.publishedAt).toLocaleString()||"unknown"}</strong></p>
      
        <br></br>
        <a href={article.url}><strong>Read more</strong></a>
</div>
        </div>
    })}
    </div>
    </div>
)}
export default MapDemo;