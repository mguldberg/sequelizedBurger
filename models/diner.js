// CREATE TABLE burgers
// (
// 	id int NOT NULL AUTO_INCREMENT,
// 	burger_name varchar(255) NOT NULL,
//     devoured_bool boolean NOT NULL,
// 	PRIMARY KEY (id)
// );

module.exports = function (sequelize, DataTypes) {
    var BetterBurgerDiner = sequelize.define("BetterBurgerDiner", {
        diner_name: {
            type: DataTypes.STRING,
            // AllowNull is a flag that restricts a todo from being entered if it doesn't
            // have a text value
            allowNull: false,
            // len is a validation that checks that our todo is between 1 and 140 characters
            len: {
                args: [2, 15],
                msg: "Your name is not long enough or too long.  It must be between 2 and 15 characters."
            }
        },
        burgers_eaten: {
            type: DataTypes.INTEGER,
            // AllowNull is a flag that restricts a todo from being entered if it doesn't
            // have a text value
            defaultValue: 0
        },
    });

    // BetterBurgerDiner.associate = function(models) {
    //     // Associating Author with Posts
    //     // When an Author is deleted, also delete any associated Posts
    //     BetterBurgerDiner.hasMany(models.BetterBurger, {
        
    //     });
    //   };

    return BetterBurgerDiner;
};
