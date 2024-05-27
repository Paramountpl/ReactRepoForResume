import React from "react";
import photo from "./Naresh_Photo.jpg"

const Photo: React.FC = () => (
  <div className="card mb-3">
    <div className="card-body text-center">
        <img className="photo" src={photo} alt="Logo" />
    </div>
  </div>
);

export default Photo;
