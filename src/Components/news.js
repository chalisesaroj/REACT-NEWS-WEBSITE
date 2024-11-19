import React, { useState, useEffect } from "react";
import "./News.css";

function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNews = async () => {
    try {
      const url =
        "https://newsapi.org/v2/everything?q=tesla&from=2024-10-18&sortBy=publishedAt&apiKey=4857213ac0f748399fd19690d30ab513";
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.articles); // Set articles from the JSON response
      setLoading(false);
      console.log(data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    fetchNews();

    
  }, []);

  return (
    <div className="news-container">
      <h1 className="news-title">Latest News</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="news-grid">
          {articles.map((article, index) => (
            <div className="news-card" key={index}>
              <img
                src={article.urlToImage || "https://via.placeholder.com/150"}
                alt={article.title}
                className="news-image"
              />
              <div className="news-content">
                <h2 className="news-headline">{article.title}</h2>
                <p className="news-description">
                  {article.description || "No description available."}
                </p>
                <p className="news-author">
                  <strong>Author:</strong> {article.author || "Unknown"}
                </p>
                <p className="news-source">
                  <strong>Source:</strong> {article.source.name || "Unknown"}
                </p>
                <p className="news-published">
                  <strong>Published:</strong>{" "}
                  {new Date(article.publishedAt).toLocaleString() || "Unknown"}
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="news-link"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default News;
