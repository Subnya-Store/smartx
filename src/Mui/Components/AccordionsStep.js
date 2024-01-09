import React, { useState } from "react";

const AccordionsStep = ({ heading, paragraph }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <div
    data-aos="fade-up"
    className="mb-4 border-primary border-2 p-1  rounded-2xl">
      <h2
        className="cursor-pointer flex justify-between text-primary font-extrabold sm:font-bold"
        onClick={toggleAccordion}
      >
        {heading}
        <span className="ml-2">{expanded ? "▲" : "▼"}</span>
      </h2>
      {expanded && <p className="text-primary font-bold sm:font-normal">{paragraph}</p>}
    </div>
  );
};

export default AccordionsStep;
