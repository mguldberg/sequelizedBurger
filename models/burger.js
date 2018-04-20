// CREATE TABLE burgers
// (
// 	id int NOT NULL AUTO_INCREMENT,
// 	burger_name varchar(255) NOT NULL,
//     devoured_bool boolean NOT NULL,
// 	PRIMARY KEY (id)
// );

module.exports = function (sequelize, DataTypes) {
    var BetterBurger = sequelize.define("BetterBurger", {
        burger_name: {
            type: DataTypes.STRING,
            // len is a validation that checks that our todo is between 1 and 140 characters
            allowNull: false,
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

    BetterBurger.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        BetterBurger.hasMany(models.BetterBurgerDiner, {
        
        });
      };
    
    return BetterBurger;
};

