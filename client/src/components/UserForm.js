import React, { useState } from "react";

const blankForm = {
  city: "",
  pricepoint: "",
  style_one: ""
};

const userObj = {
  city: "",
  pricepoint: "",
  style_one: ""
};

function UserForm(props) {
  const [formData, setFormData] = useState(blankForm); // change this to user/set user? User object?


  return (
    <div className="UserForm">
    <form onSubmit={handleSubmit}>
      <label> Select Your City
          <select name="city" 
          value={formData.city}
          onChange={handleChange}>
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
      </label>
      <br></br>

      <label> Desired Hourly Price
          <select name="pricepoint" 
          value={formData.pricepoint}
          onChange={handleChange}>
              <option>Under £100</option>
              <option>£100 - £200</option>
              <option>Any</option>
              </select>
      </label>
      <br></br>

      <label> Style 1
          <select name="style_one" 
          value={formData.style_one}
          onChange={handleChange}>
              <option>Portrait</option>
              <option>Japanese</option>
              <option>New School</option>
              </select>
      </label>
      <br></br>

      <div className="formbutton">
        <button type="submit">Find My Ideal Tattoo Artist</button>
        </div>

      </form>
      </div>
  );
}


     
{/* 
          <input type="checkbox" id="americanTraditional" name="style_one" value="americanTraditional"/>
          <label for="americanTraditional"> American Traditional</label><br></br>

          <input type="checkbox" id="blackGrey" name="style_one" value="blackGrey"/>
          <label for="blackGrey"> Black and Grey</label><br></br>

          <input type="checkbox" id="handpoke" name="handpoke" value="handpoke"/>
          <label for="handpoke"> Handpoke</label><br></br>

          <input type="checkbox" id="japanese" name="japanese" value="japanese"/>
          <label for="japanese"> Japanese</label><br></br>

          <input type="checkbox" id="lettering" name="lettering" value="lettering"/>
          <label for="lettering"> Lettering</label><br></br>

          <input type="checkbox" id="mambo" name="mambo" value="mambo"/>
          <label for="mambo"> Mambo/Destrutturato</label><br></br>

          <input type="checkbox" id="fineline" name="fineline" value="fineline"/>
          <label for="fineline"> Fineline/Micro</label><br></br>

          <input type="checkbox" id="newSchool" name="newSchool" value="newSchool"/>
          <label for="newSchool"> New School</label><br></br>

          <input type="checkbox" id="portrait" name="portrait" value="portrait"/>
          <label for="portrait"> Portrait</label><br></br>

          <input type="checkbox" id="trashPolka" name="trashPolka" value="trashPolka"/>
          <label for="trashPolka"> Trash Polka</label><br></br>

          <div className="formbutton">
        <button type="submit">Find My Ideal Tattoo Artist</button>
        </div> */}
  
export default UserForm;
