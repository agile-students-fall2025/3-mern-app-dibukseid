const express = require("express");
const router = express.Router();

// Static JSON response for "About Us"
router.get("/", (req, res) => {
  res.json({
    name: "Buki Seid",
    description: [
      "I'm a comp sci 4th year student at NYU.",
      "I am from the beautiful island of Palau",
      "my passions include spearfishing, ocean conservation, and gaming"
    ],
    image: "http://localhost:7002/images/me.jpg"
  });
});

module.exports = router;
