module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define("Users", {
        username:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        employee:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        role:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        contact_no:{
            type:DataTypes.STRING,
            allowNull: false,
        }
    })
    // Users.associate = (models) => {
    //     Users.hasMany(models.Employee,{
    //         ondelete: "cascade",
    //     })
    // }
    return Users
} 