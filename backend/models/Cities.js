module.exports = function(sequelize, DataTypes) {
    var Cities = sequelize.define("cities", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    });
    return Cities
}