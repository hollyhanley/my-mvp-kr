import React from "react";

function ArtistList(props) {
  return (
    <div className="ArtistList">

    {props.theArtists.map(a => (
        
        <div className="card"key={a.id}>
          <div class="card-body">
          <h5 class="card-title">{a.first_name} {a.last_name}, {a.pronouns}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{a.city}</h6>
          <h6 class="card-subtitle mb-2 text-muted">{a.style_one}</h6>
          <p class="card-text">Paragraph about artist to put in database later</p>
        </div>
        </div>
      ))}
      </div>
  );
}

export default ArtistList;
