import React from "react";

function ArtistList(props) {
  return (
    <ul className="ArtistList">
      {props.theArtists.map(a => (
        <li key={a.id}>
          {a.first_name} {a.last_name}, {a.pronouns}, {a.city}, Style: {a.style_one}
        </li>
      ))}
    </ul>
  );
}

export default ArtistList;