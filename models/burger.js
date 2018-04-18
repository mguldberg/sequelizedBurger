// CREATE TABLE burgers
// (
// 	id int NOT NULL AUTO_INCREMENT,
// 	burger_name varchar(255) NOT NULL,
//     devoured_bool boolean NOT NULL,
// 	PRIMARY KEY (id)
// );

module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("BetterBurger", {
        burger_name: {
            type: DataTypes.STRING,
            // AllowNull is a flag that restricts a todo from being entered if it doesn't
            // have a text value
            allowNull: false,
            // len is a validation that checks that our todo is between 1 and 140 characters
            validate: {
                len: [1, 30]
            }
        },
        devoured_bool: {
            type: DataTypes.BOOLEAN,
            // defaultValue is a flag that defaults a burger to false - aka not eaten       // it isn't supplied one
            defaultValue: false
        }
    });
    return Burger;
};

