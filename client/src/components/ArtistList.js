import React from "react";

function ArtistList(props) {
  return (
    <div className="ArtistList">

    {props.theArtists.map(a => (
      <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-3">
        <div className="card" key={a.id}>
          <img class="card-img-top" src={a.cover_photo} alt="Profile Picture"></img>
          <div class="card-body text-center">
          <img class="avatar rounded-circle" src={a.profile_pic} alt="Profile Picture"/>
          <br></br>
          <h4 class="card-title">{a.first_name} {a.last_name}, {a.pronouns}</h4>
          <h6 class="card-subtitle mb-2 text-muted">{a.city}</h6>
          <h6 class="card-subtitle mb-2 text-muted">{a.style_one}</h6>
          <p class="card-text">Paragraph about artist to put in database later</p>
          <a href="#" class="btn btn-info">Follow</a>
          <a href="#" class="btn btn-outline-info">Message</a>
          </div>
          </div>
        </div>
        </div>
        
      ))}
      </div>
  );
}

export default ArtistList;

