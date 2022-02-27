var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET all artists that match user city and user style preferences */

router.get("/", function(req, res, next) {
  // console.log(req.query);
  let { city, style_one} = req.query;
  if (city && style_one) {
    db(`SELECT * FROM mvp_artists WHERE city = '${city}' AND style_one = '${style_one}';`)
    
    .then(results => {
      console.log(results);
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
  } else {
    db("SELECT * FROM mvp_artists;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
  }
});

//get artist by id

router.get("/:id", async (req, res, next) => {
    let { id } = req.params;
  
    try {
      let result = await db(`SELECT * FROM mvp_artists WHERE id = ${id}`);
      let artist = result.data;
      if (artist.length === 0) {
        res.status(404).send({ error: "student not found" });
      } else {
        res.send(artist[0]);
      }
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });


//get all artists from 'user_faves' table by if 'user_id' matches 'id' from 'mvp_users'

router.get("/:id", async (req, res, next) => {
  let { id } = req.params; // mvp_users id

  try {
    let result = await db(`SELECT fave_artists_id FROM user_faves WHERE user_id = ${id}`); 
    //eg select all artists from user_faves table where 'user_id' is 1 and 'id' is 1
    let faveArtist = result.data;
    if (faveArtist.length === 0) {
      res.status(404).send({ error: "no artists found" });
    } else {
      res.send(faveArtist[0]);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});


module.exports = router;