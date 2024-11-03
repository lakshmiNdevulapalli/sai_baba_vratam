import React, { useState } from "react";
import stories from "./katha";
import "../Vratakatha.css";
import { Helmet } from "react-helmet";

const SaiBabaVrataKatha: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleStory = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="vratakatha-container">
      <Helmet>
        <title>Sai Baba Vratam Stories</title>
      </Helmet>
      <div className="decorative-side left"></div>
      <div className="decorative-side right"></div>
      <h1 className="vratakatha-title">Sai Baba Vratakatha</h1>
      <p className="vratakatha-intro">
        Discover the sacred stories of Sai Baba and the powerful teachings that
        accompany each one.
      </p>
      <div className="vratakatha-stories">
        {stories.map((story, index) => (
          <div
            key={index}
            className={`story-tile ${expandedIndex === index ? "expanded" : ""}`}
            onClick={() => toggleStory(index)}
          >
            <img src={story.image} alt={story.title} className="story-image" />
            <div>
              <h2 className="story-title">{story.title}</h2>
              <p
                className="story-content"
                dangerouslySetInnerHTML={{
                  __html:
                    expandedIndex === index
                      ? story.content
                      : story.content.slice(0, 200) + "...",
                }}
              />
              <span className="show-more-button">
                {expandedIndex === index ? "Show Less" : "Read More"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SaiBabaVrataKatha;
