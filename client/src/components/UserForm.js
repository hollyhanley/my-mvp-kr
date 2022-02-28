import React, { useState } from "react";


const blankForm = {
  city: "",
  style_one: "",
};

function UserForm({handleChange, handleSubmit, formData}) {

  return (
    <div>
      <div className="row">
      <div className="offset-md-2 col-md-8 offset-lg-3 col-lg-6">
      <div className="UserForm">
      <form onSubmit={handleSubmit}>
          <div className="form-group">
          <label for="exampleFormControlSelect1">Example select</label>
          <select name="city"
          value={formData.city}
          onChange={handleChange}
          className="form-control" 
          id="exampleFormControlSelect1">
              <option>Options:</option>
              <option>Belfast</option>
              <option>Birmingham</option>
              <option>Bristol</option>
              <option>Brighton</option>
              <option>Cardiff</option>
              <option>Edinburgh</option>
              <option>Exeter</option>
              <option>Leeds</option>
              <option>Liverpool</option>
              <option>London</option>
              <option>Manchester</option>
              <option>Newcastle</option>
              <option>Nottingham</option>
              <option>Sheffield</option>
              <option>Truro</option>
          </select>
          </div>
          <br></br>

          <div className="form-group">
          <label for="exampleFormControlSelect1">Choose your style</label>
          <select name="style_one"
          value={formData.style_one}
          onChange={handleChange}
          className="form-control" 
          id="exampleFormControlSelect1">
              <option>Options:</option>
              <option>American Traditional</option>
              <option>Black & Grey</option>
              <option>Destrutturato</option>
              <option>Etching/ Woodcut</option>
              <option>Fineline</option>
              <option>Geometric</option>
              <option>Handpoke</option>
              <option>Japanese</option>
              <option>Lettering</option>
              <option>Neo-traditional</option>
              <option>Trash Polka</option>
              <option>Watercolour</option>
          </select>
          </div>

          <br></br>

          <button className="btn btn-primary formbutton"
          type="submit">Find My Ideal Tattoo Artist</button> 
          
      </form>
      </div>
      </div>
      </div>
    </div>
  );
}
  
export default UserForm;
