import React, { useState } from "react";
import { paragraphs, ParagraphContent } from "./AartiContent.ts";
import "../Aarti.css";
import { Helmet } from "react-helmet";

const SaiBabaAarti: React.FC = () => {
  const [selectedParagraph, setSelectedParagraph] =
    useState<ParagraphContent | null>(null);

  const handleTileClick = (para: ParagraphContent) => {
    setSelectedParagraph(para);
  };

  const closeModal = () => {
    setSelectedParagraph(null);
  };

  return (
    <div className="aarti-container">
      <Helmet>
        <title>Sai Baba Aarti</title>
      </Helmet>
      <div className="decorative-side left"></div>
      <div className="decorative-side right"></div>
      <h1 className="aarti-title">Baba Aarti</h1>
      <p className="aarti-intro">
        || Shri Satchitaanand Sadguru Sainaath Maharaaj ki Jai ||
      </p>

      <div className="aarti-grid">
        {paragraphs.map((para, index) => (
          <div
            key={index}
            className="aarti-tile"
            onClick={() => handleTileClick(para)}
          >
            <img src={para.image} alt={para.title} className="aarti-image" />
            <p className="aarti-description">{para.title}</p>
            <p>{para.description}</p>
          </div>
        ))}
      </div>

      {selectedParagraph && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              ×
            </button>
            <h3>{selectedParagraph.title}</h3>
            <div className="aarti-modal-content">
              {Array.isArray(selectedParagraph.content) ? (
                selectedParagraph.content.map((section, index) => (
                  <div key={index} className="aarti-section">
                    <h4 className="aarti-title">{section.subtitle}</h4>
                    <p dangerouslySetInnerHTML={{ __html: section.text }} />
                  </div>
                ))
              ) : (
                <p
                  dangerouslySetInnerHTML={{
                    __html: selectedParagraph.content,
                  }}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SaiBabaAarti;
