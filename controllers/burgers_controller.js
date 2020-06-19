const express = require("express");
const router = express.Router();

// import the model from burger.js
const burger = require("../models/burger.js");

// create the routes and set up logic inside the routes
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    const hBarObject = {
      burgers: data,
    };
    console.log(hBarObject);
    res.render("index", hBarObject);
  });
});

//.post express call method in posting new burgers to the db
router.put("/api/burgers/:id", function (req, res) {
  const condition = "id = " + req.params.id;
  console.log("condition", condition);
  console.log(condition);
  burger.updateOne(
    {
      devoured: req.body.devoured,
    },
    condition,
    function (result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

// delete express call method in deleteing a burger form the db

router.delete("/api/burgers/:id", function (req, res) {
  const condition = "id = " + req.params.id;
  burger.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// export routes for server.js

module.exports = router;
