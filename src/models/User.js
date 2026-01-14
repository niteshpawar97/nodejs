const sequelize = require("../config/dbConfig");
const { DataTypes} = require("sequelize");
const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true


    }
})

sequelize.sync();
module.exports = User;