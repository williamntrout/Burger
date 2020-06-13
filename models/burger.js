// Inside `burger.js`, import `orm.js` into `burger.js`

const orm = reqire('./config/orm.js');

// call the ORM functions using burger specific input for the ORM.
var burger = {
    //reads the 'burgers' table and gets back of the records of burgers
    //cb parameter values is leading to the callback function on burgers_controller.js
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    //reads the 'burgers' table and gets back of the updated records of the burgers
    insertOne: function (cols, vals, vd) {
        orm.insertOne("burgers", cols, vals, functin(res){
            cb(res);
        });
    },
    //updates the 'burgers' devoured boolean value table and gets back of the updated records of the burgers table
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },

    // delete the burgers from the "burgers" table and gets back the updated records
    delete: function (condition, cb) {
        orm.delete("burgers", condition, function (res) {
            cb(res);
        });
    }
}
// export the database function results values for the congroller file burgers_controller.js

module.exports = burger;