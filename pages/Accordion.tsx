import React, { useState } from 'react';

const Accordion = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    if (index === activeSection) {
      setActiveSection(null);
    } else {
      setActiveSection(index);
    }
  };

  const sections = [
    {
      title: 'Section 1',
      content: 'Content of Section 1',
    },
    {
      title: 'Section 2',
      content: 'Content of Section 2',
    },
    {
      title: 'Section 3',
      content: 'Content of Section 3',
    },
  ];

  return (
    <div>
      {sections.map((section, index) => (
        <div key={index} className="mb-2">
          <button
            onClick={() => toggleSection(index)}
            className="w-full py-2 px-4 bg-gray-200 hover:bg-gray-300 focus:outline-none"
          >
            {section.title}
          </button>
          {activeSection === index && (<div className="bg-white p-2">{section.content}</div>)}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
