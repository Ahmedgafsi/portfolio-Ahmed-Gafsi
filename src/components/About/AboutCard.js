import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ahmed Ameur Gafsi   </span>
            from <span className="purple"> tunisia.</span>
            <br />
            a skilled web and mobile developer specializing in React.js, Next.js, and React Native
            <br />
            with a strong background in building robust applications using Node.js, TypeScript, and databases like MySQL.
            <br />
            I am passionate about delivering innovative
            <br />
            <br />
            Always eager to learn and adopt new technologies, I thrive in dynamic environments where I can contribute to impactful projects.
          </p>
          <footer className="blockquote-footer">Ahmed Gafsi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
