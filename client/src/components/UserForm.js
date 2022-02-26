import React, { useState } from "react";

const blankForm = {
  city: "",
  style_one: "",
};

function UserForm({handleChange, handleSubmit, formData }) {
  

  return (

    <div>
    <h3>Test of Card Grid within form</h3>
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card">
                  <img src="https://i.pinimg.com/564x/c2/a6/4b/c2a64b0ea3ad67bb95816fa99b98c00a.jpg" class="card-img-top" alt="American Traditional"/>
                  <div className="card-body">
                    <h5 className="card-title">American Traditional</h5>
                    <p className="card-text">AKA American Trad. A style with clean black outlines, vivid colours, minimal shading, and imagery of roses, anchors, and ladies. In 1930’s these tattoos symbolised a rejection of the American dream.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card">
                  <img src="https://i.pinimg.com/564x/e0/a0/ea/e0a0ea1a2ac76f91831efa6aae7aad9c.jpg" class="card-img-top" alt="Black & Grey"/>
                  <div className="card-body">
                    <h5 className="card-title">Black & Grey</h5>
                    <p className="card-text">A style of tattooing that uses only black ink in varying shades, thought to have originated from prisons in the 1970s and 1980s and later popularised. These tattoos can be illustrative or photo realistic.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card">
                  <img src="https://i.pinimg.com/564x/33/42/fd/3342fd7cdc0514a06ff5bb3393969263.jpg" class="card-img-top" alt="Destrutturato"/>
                  <div className="card-body">
                    <h5 className="card-title">Destrutturato</h5>
                    <p className="card-text">A very recent style of tattooing invented by tattoo artist, Mattia Mambo, in 2016. Mambo worked as a graphic designer and the simplicity of the logos and icons he worked with inspired Destrutturato.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card">
                  <img src="https://i.pinimg.com/564x/f3/8f/b0/f38fb06a31523e17ffc42d115b5c2674.jpg" class="card-img-top" alt="Etching/ Woodcut"/>
                  <div className="card-body">
                    <h5 className="card-title">Etching/ Woodcut</h5>
                    <p className="card-text">This Style of tattooing replicates imagery found in 15th and 16th Century European woodcuts. In these tattoos you typically see depictions of religious scenes, monsters, the occult and anatomy.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card">
                  <img src="https://i.pinimg.com/564x/ea/8d/cf/ea8dcfbd2725f15cfae037fe736311f9.jpg" class="card-img-top" alt="Fineline"/>
                  <div className="card-body">
                    <h5 className="card-title">Fineline</h5>
                    <p className="card-text">Very precise fineline tattoos can be achieved through the artist using a single needle tattooing method. It is common to see straight or curved lines with no graduation of colour. Sometimes there may be dotwork.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card">
                  <img src="https://i.pinimg.com/564x/3f/43/3b/3f433bf47e60802b6c56213321ca0233.jpg" class="card-img-top" alt="Geometric"/>
                  <div className="card-body">
                    <h5 className="card-title">Geometric/ Pattern</h5>
                    <p className="card-text">Geometric tattoos draw their simplicity from the use of common shapes – lines, circles squares, triangles. However, these simple shapes joint together form beautiful and intricate patterns.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card">
                  <img src="https://i.pinimg.com/564x/70/97/ee/7097ee84d789b373006769d3c98cc737.jpg" class="card-img-top" alt="Handpoke"/>
                  <div className="card-body">
                    <h5 className="card-title">Handpoke/ Ignorant</h5>
                    <p className="card-text">These tattoos are handmade by the artist who repeatedly pokes the skin with a point and deposits ink to create desired patterns with clean lines. Ignorant tattoos, however, have a purposeful DIY look.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
            </div>
            
            <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card">
                  <img src="https://i.pinimg.com/736x/5a/ef/7e/5aef7ee947c178384778d56c80ee22f4.jpg" class="card-img-top" alt="Japanese"/>
                  <div className="card-body">
                    <h5 className="card-title">Japanese</h5>
                    <p className="card-text">A style of tattooing that is created using large scale motifs based on Japanese mythology and religious icons, historical characters and scenes from nature, the elements, and well known Japanese fables.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
            </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card">
                  <img src="https://i.pinimg.com/474x/03/67/ca/0367ca562d77ff2953160aad07ff04a6.jpg" class="card-img-top" alt="Lettering"/>
                  <div className="card-body">
                    <h5 className="card-title">Lettering</h5>
                    <p className="card-text">Lettering tattoos are inspired by many different styles of signage, aesthetics, and historical movements. Specifically calligraphy found in Old English, Gothic, and other fonts from the distant past.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card">
                  <img src="https://i.pinimg.com/564x/11/3d/e4/113de4ba8d689efde3375dd7de0c6228.jpg" class="card-img-top" alt="Neo-traditional"/>
                  <div className="card-body">
                    <h5 className="card-title">Neo-traditional</h5>
                    <p className="card-text">Known for their lush, decorative details as well as the use of natural imagery such as florals and animals. Unlike traditional tattoos, neo-traditional designs have a broader range of motifs and colours.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
            </div>
            
            <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card">
                  <img src="https://i.pinimg.com/564x/cf/fb/94/cffb9482e76a2dba61520058c78b4fb0.jpg" class="card-img-top" alt="Trash Polka"/>
                  <div className="card-body">
                    <h5 className="card-title">Trash Polka</h5>
                    <p className="card-text">The characteristics of Trash Polka tattoos can be a combination of naturalistic, surrealistic, photorealistic motifs with graphic, lettering and calligraphic elements in mainly black & red.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
            </div>
          
            <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card">
                  <img src="https://i.pinimg.com/564x/12/ed/9f/12ed9fca5f154df6fb4d657d53efac2c.jpg" class="card-img-top" alt="Watercolour"/>
                  <div className="card-body">
                    <h5 className="card-title">Watercolour</h5>
                    <p className="card-text">Popularized by artists defying the traditions of the tattoo industry, watercolour tattoos involve the artist blending different shades of colour seamlessly, fading out at the edges instead of ending in sharp, solid lines.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
            </div>
          </div>


   

      <div className="UserForm">
      <form onSubmit={handleSubmit}>
          <div class="form-group">
          <label for="exampleFormControlSelect1">Example select</label>
          <select name="city"
          value={formData.city}
          onChange={handleChange}
          class="form-control"
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

          <div class="form-group">
          <label for="exampleFormControlSelect1">Choose your style</label>
          <select name="style_one"
          value={formData.style_one}
          onChange={handleChange}
          class="form-control" 
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
  );
}


    
  
export default UserForm;
