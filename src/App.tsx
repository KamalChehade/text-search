import React, { useState } from "react";
import { articles } from "./data/articles.ts";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const highlightText = (text, search) => {
    if (!search) return text;

    const regex = new RegExp(`(${search})`, "gi");
    return text.split(regex).map((part, index) =>
      regex.test(part) ? (
        <span key={index} style={{ backgroundColor: "yellow" }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

 
  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Text Search</h1>
      <input
        type="text"
        placeholder="Search articles..."
        value={searchTerm}
        onChange={handleSearch}
        style={{
          width: "60%",
          padding: "10px",
          marginBottom: "10px",
          fontSize: "16px",
        }}
      />

      {}
      {searchTerm && (
        <div style={{ marginBottom: "10px", fontSize: "16px", color: "#555" }}>
          {filteredArticles.length} post(s) found
        </div>
      )}

      {}
      <div>
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <div key={article.id} style={{ marginBottom: "20px" }}>
              <h2>{highlightText(article.title, searchTerm)}</h2>
              <p>{highlightText(article.content, searchTerm)}</p>
            </div>
          ))
        ) : (
          <p>No articles found.</p>
        )}
      </div>
    </div>
  );
};

export default App;
