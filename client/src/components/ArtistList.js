import React from "react";

function ArtistList(props) {
  return (
    <ul className="ArtistList">
      {props.theArtists.map(a => (
        <li key={a.id}>
          {a.first_name} {a.last_name}, {a.pronouns}, {a.city}, Styles: {a.style_one} {a.style_two} {a.style_three}
        </li>
      ))}
    </ul>
  );
}

export default ArtistList;