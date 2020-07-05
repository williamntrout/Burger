// Inside `burger.js`, import `orm.js` into `burger.js`

const orm = require("../config/orm.js");

// call the ORM functions using burger specific input for the ORM.
const burger = {
  //reads the 'burgers' table and gets back of the records of burgers
  //cb parameter values is leading to the callback function on burgers_controller.js
  selectAll: (cb) => {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },

  //reads the 'burgers' table and gets back of the updated records of the burgers
  insertOne: (cols, vals, cb) => {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  //updates the 'burgers' devoured boolean value table and gets back of the updated records of the burgers table
  updateOne: (objColVals, condition, cb) => {
    orm.updateOne("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },

  // delete the burgers from the "burgers" table and gets back the updated records
  delete: (condition, cb) => {
    orm.delete("burgers", condition, function (res) {
      cb(res);
    });
  },
};
// export the database function results values for the congroller file burgers_controller.js

module.exports = burger;
