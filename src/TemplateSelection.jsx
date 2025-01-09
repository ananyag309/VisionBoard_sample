import React, { useState } from "react";
import "./TemplateSelection.css"; // Import the TemplateSelection styling

const TemplateSelection = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const templates = [
    { id: 1, name: "Template 1", imageUrl: "template1.jpg" },
    { id: 2, name: "Template 2", imageUrl: "template2.jpg" },
    { id: 3, name: "Template 3", imageUrl: "template3.jpg" }
  ];

  const handleSelectTemplate = (template) => {
    setSelectedTemplate(template);
  };

  return (
    <div className="template-selection">
      <h2>Select a Template</h2>
      <div className="template-gallery">
        {templates.map((template) => (
          <div
            key={template.id}
            className="template-item"
            onClick={() => handleSelectTemplate(template)}
          >
            <img src={template.imageUrl} alt={template.name} />
            <p>{template.name}</p>
          </div>
        ))}
      </div>
      {selectedTemplate && (
        <div className="selected-template">
          <h3>Selected Template: {selectedTemplate.name}</h3>
          <img src={selectedTemplate.imageUrl} alt={selectedTemplate.name} />
        </div>
      )}
    </div>
  );
};

export default TemplateSelection;
