import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);

  // Access the first definition
  const firstDefinition = props.meaning.definitions[0];

  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {firstDefinition && (
        <div>
          <p>
            <strong>Definition:</strong> {firstDefinition.definition}
          </p>
          {firstDefinition.example && (
            <p>
              <strong>Example:</strong> {firstDefinition.example}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
