import React from "react"

// want to change structure to class extends components to make it cleaner!

function StyleCards() {
    return (
        <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="card">
                <div id="carouselExampleControls" className="carousel slide" data-bs-interval="false">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="https://i.pinimg.com/564x/df/48/30/df4830ab70ee533606acf37c249aad2c.jpg" className="d-block w-100"alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src="https://i.pinimg.com/564x/11/9b/15/119b153e415253cfb896468b336dfc49.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src="https://i.pinimg.com/564x/39/c7/15/39c715a66d110302790f0d2a2746e5f7.jpg" className="d-block w-100" alt="..."/>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                  </a>
                </div>
              <div className="card-body">
                <h5 className="card-title">American Traditional</h5>
                  <p className="card-text">Also known as American Trad. Clean black outlines, vivid colours, minimal shading, and imagery of roses, women, and dark or nautical scenes. In 1930’s these tattoos symbolised a rejection of the American dream.</p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="card">
            <div id="carouselExampleControls2" className="carousel slide" data-bs-interval="false">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="https://i.pinimg.com/564x/ae/0d/b5/ae0db51d389d8b9e8d7065de7fc51832.jpg" className="d-block w-100"alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src="https://i.pinimg.com/564x/ed/d5/45/edd5451a6bce3da0e371b589e9569554.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src="https://i.pinimg.com/564x/e7/38/0e/e7380e0045213dd2503e4e58e3e9c02b.jpg" className="d-block w-100" alt="..."/>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleControls2" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleControls2" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                  </a>
                </div>
                  <div className="card-body">
                    <h5 className="card-title">Black & Grey</h5>
                    <p className="card-text">A style of tattooing that uses only black ink in varying shades, thought to have originated from prisons in the 1970s and 1980s and later popularised. These tattoos can be illustrative or photo realistic.</p>
                  </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="card">
                <div id="carouselExampleControls3" className="carousel slide" data-bs-interval="false">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="https://i.pinimg.com/474x/41/70/6a/41706aee34131032c632a2ddf5797980.jpg" className="d-block w-100"alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src="https://i.pinimg.com/474x/69/76/6a/69766adfebd9e128a4c71b00db45da1d.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src="https://i.pinimg.com/474x/43/70/59/4370599f968768d2a2a6069c9be63d56.jpg" className="d-block w-100" alt="..."/>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleControls3" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleControls3" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                  </a>
                </div>
                  <div className="card-body">
                    <h5 className="card-title">Destrutturato</h5>
                    <p className="card-text">A very recent style of tattooing invented by tattoo artist, Mattia Mambo, in 2016. Mambo worked as a graphic designer and the simplicity of the logos and icons he worked with inspired Destrutturato.</p>
                  </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="card">
                  <div id="carouselExampleControls4" className="carousel slide" data-bs-interval="false">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="https://i.pinimg.com/474x/9f/a5/c4/9fa5c4c5c6e3aff1137070b9e49dd8e1.jpg" className="d-block w-100"alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src="https://i.pinimg.com/474x/ae/92/2e/ae922ea4204a858c9817b4faf297cedf.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src="https://i.pinimg.com/564x/3f/c7/e3/3fc7e320c2fabac11b668df1d5d32691.jpg" className="d-block w-100" alt="..."/>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleControls4" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleControls4" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                  </a>
                </div>
                  <div className="card-body">
                    <h5 className="card-title">Etching/ Woodcut</h5>
                    <p className="card-text">This Style of tattooing replicates imagery found in 15th and 16th Century European woodcuts. In these tattoos you typically see depictions of religious scenes, monsters, the occult and anatomy.</p>
                  </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="card">
                  <div id="carouselExampleControls5" className="carousel slide" data-bs-interval="false">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="https://i.pinimg.com/564x/9e/09/0e/9e090e15b1895e84c354700075347e03.jpg" className="d-block w-100"alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src="https://i.pinimg.com/474x/9d/0c/b5/9d0cb51be85964d8b16cc81e79edbbcc.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src="https://i.pinimg.com/564x/a1/56/d5/a156d52c1d757ddcf0a94f3759f2b95e.jpg" className="d-block w-100" alt="..."/>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleControls5" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleControls5" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                  </a>
                </div>
                  <div className="card-body">
                    <h5 className="card-title">Fineline</h5>
                    <p className="card-text">Very precise fineline tattoos can be achieved through the artist using a single needle tattooing method. It is common to see straight or curved lines with less graduation of colour. Sometimes there may be dotwork.</p>
                  </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="card">
                  <div id="carouselExampleControls6" className="carousel slide" data-bs-interval="false">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="https://i.pinimg.com/564x/3f/43/3b/3f433bf47e60802b6c56213321ca0233.jpg" className="d-block w-100"alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src="https://i.pinimg.com/564x/99/f3/11/99f311061693cda437ceec0138cefd88.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src="https://i.pinimg.com/474x/98/67/00/98670037bb3829776280349a1554e9a2.jpg" className="d-block w-100" alt="..."/>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleControls6" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleControls6" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                  </a>
                </div>
                  <div className="card-body">
                    <h5 className="card-title">Geometric/ Pattern</h5>
                    <p className="card-text">Geometric tattoos draw their simplicity from the use of common shapes – lines, circles squares, triangles. However, these simple shapes joint together form beautiful and intricate patterns.</p>
                  </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="card">
                  <div id="carouselExampleControls7" className="carousel slide" data-bs-interval="false">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="https://i.pinimg.com/564x/b5/6a/f1/b56af18898f1e87db37801aa14d920ab.jpg" className="d-block w-100"alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src="https://i.pinimg.com/564x/45/21/f7/4521f70dfec928a175849589e867c861.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src="https://i.pinimg.com/564x/31/23/64/312364b3b1650a6f4469a44b3207d9cb.jpg" className="d-block w-100" alt="..."/>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleControls7" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleControls7" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                  </a>
                </div>
                  <div className="card-body">
                    <h5 className="card-title">Handpoke/ Ignorant</h5>
                    <p className="card-text">These tattoos are handmade by the artist who repeatedly pokes the skin with a point and deposits ink to create desired patterns with clean lines. Ignorant tattoos, however, have a purposeful DIY look.</p>
                  </div>
                </div>
            </div>
            
            <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="card">
                  <div id="carouselExampleControls8" className="carousel slide" data-bs-interval="false">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="https://i.pinimg.com/564x/6f/19/2c/6f192ce8eced2555857a592d74ef97ca.jpg" className="d-block w-100"alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src="https://i.pinimg.com/564x/ab/7a/73/ab7a730a77893b412840cc842fc0d474.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src="https://i.pinimg.com/564x/94/ac/d0/94acd04b6e1783671dc969876fdf1a0e.jpg" className="d-block w-100" alt="..."/>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleControls8" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleControls8" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                  </a>
                </div>
                  <div className="card-body">
                    <h5 className="card-title">Japanese</h5>
                    <p className="card-text">A style of tattooing that is created using large scale motifs based on Japanese mythology, historical characters and scenes from nature, the elements, and well known Japanese fables. Common in backpieces and sleeves.</p>
                  </div>
                </div>
            </div>

          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="card">
                   <div id="carouselExampleControls9" className="carousel slide" data-bs-interval="false">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="https://i.pinimg.com/564x/06/c9/0b/06c90ba09024795a7fd3da1c174e1743.jpg" className="d-block w-100"alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src="https://i.pinimg.com/564x/de/d5/b6/ded5b6ccc98647a93127e0691af75787.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src="https://i.pinimg.com/564x/61/96/c3/6196c335168785fc8ee180500d2e24df.jpg" className="d-block w-100" alt="..."/>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleControls9" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleControls9" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                  </a>
                </div>
                  <div className="card-body">
                    <h5 className="card-title">Lettering</h5>
                    <p className="card-text">Lettering tattoos are inspired by many different styles of signage, aesthetics, and historical movements. Specifically calligraphy found in Old English, Gothic, and other fonts from the distant past.</p>
                  </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="card">
                  <div id="carouselExampleControls10" className="carousel slide" data-bs-interval="false">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="https://i.pinimg.com/564x/cd/60/6a/cd606a7869fe1f544fd0142c80f2943c.jpg" className="d-block w-100"alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src="https://i.pinimg.com/564x/f6/81/43/f68143cf08472367d80fd5434db3a31e.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src="https://i.pinimg.com/474x/70/77/29/707729fb0f6149e3d52a406c75fd3c0a.jpg" className="d-block w-100" alt="..."/>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleControls10" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleControls10" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                  </a>
                </div>
                  <div className="card-body">
                    <h5 className="card-title">Neo-traditional</h5>
                    <p className="card-text">Known for their lush, decorative details as well as the use of natural imagery such as florals and animals. Unlike traditional tattoos, neo-traditional designs have a broader range of motifs and colours.</p>
                  </div>
                </div>
            </div>
            
            <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="card">
                  <div id="carouselExampleControls11" className="carousel slide" data-bs-interval="false">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="https://i.pinimg.com/564x/72/a7/ca/72a7cac702a873517317b8aff65293c9.jpg" className="d-block w-100"alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src="https://i.pinimg.com/564x/bf/94/d3/bf94d3c88b71156a39751509cc298cb4.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src="https://i.pinimg.com/564x/f7/ea/80/f7ea809f6ecde559d8f1a3c2b5bf499e.jpg" className="d-block w-100" alt="..."/>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleControls11" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleControls11" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                  </a>
                </div>
                  <div className="card-body">
                    <h5 className="card-title">Trash Polka</h5>
                    <p className="card-text">The characteristics of Trash Polka tattoos can be a combination of naturalistic, surrealistic, photorealistic motifs with graphic, lettering and calligraphic elements in mainly black & red. Originated in Germany.</p>
                  </div>
                </div>
            </div>
          
            <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="card">
                  <div id="carouselExampleControls12" className="carousel slide" data-bs-interval="false">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="https://i.pinimg.com/564x/12/ed/9f/12ed9fca5f154df6fb4d657d53efac2c.jpg" className="d-block w-100"alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src="https://i.pinimg.com/474x/66/6e/80/666e800e9b39a2bd864e2b955789a56e.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src="https://i.pinimg.com/474x/68/bc/85/68bc85ec4ade876fc53bcba81f5a17b7.jpg" className="d-block w-100" alt="..."/>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleControls12" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleControls12" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                  </a>
                </div>
                  <div className="card-body">
                    <h5 className="card-title">Watercolour</h5>
                    <p className="card-text">Popularized by artists defying the traditions of the tattoo industry, these tattoos involve the artist blending different shades of colour seamlessly, fading out at the edges instead of ending in sharp, solid lines.</p>
                  </div>
                </div>
            </div>
          </div>

          
    )
}

export default StyleCards;
