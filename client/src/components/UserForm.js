import React, { useState } from "react";


const blankForm = {
  city: "",
  style_one: "",
  style_two: "",
  style_three: ""
};

function UserForm({handleChange, handleSubmit, formData}) {

  return (
    <div>
      <div className="row">
      <div className="offset-md-2 col-md-8 offset-lg-3 col-lg-6">
      <div className="UserForm">
      <form onSubmit={handleSubmit}>
          <div className="form-group">
          <label for="exampleFormControlSelect1">Enter City</label>
          <select name="city"
          value={formData.city}
          onChange={handleChange}
          className="form-select" 
          id="exampleFormControlSelect1" aria-label="Default select example">
              <option selected>Select</option>
              <option >Belfast</option>
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
          <label for="exampleFormControlSelect1">Choose first style</label>
          <select name="style_one"
          value={formData.style_one}
          onChange={handleChange}
          className="form-select" 
          id="exampleFormControlSelect1" aria-label="Default select example">
              <option selected>Select</option>
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

          <div className="form-group">
          <label for="exampleFormControlSelect1">Choose second style</label>
          <select name="style_two"
          value={formData.style_two}
          onChange={handleChange}
          className="form-select" 
          id="exampleFormControlSelect1" aria-label="Default select example">
              <option selected>Select</option>
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

          <div className="form-group">
          <label for="exampleFormControlSelect1">Choose third style</label>
          <select name="style_three"
          value={formData.style_three}
          onChange={handleChange}
          className="form-select" 
          id="exampleFormControlSelect1" aria-label="Default select example">
              <option selected>Select</option>
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
