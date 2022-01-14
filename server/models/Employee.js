module.exports = (sequelize, DataTypes) => {

    const Posts = sequelize.define("Employees", {
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            // allowNull: false,
            primaryKey:true,
        },
        firstname:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        middlename:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        lastname:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        suffix:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        birthdate:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        gender:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        contact_no:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        address:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        employment_date:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        phil_no:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        gsis_no:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        nhmc_acc_no:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        tin_no:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        tax_status:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        salary_grade:{
            type:DataTypes.STRING,
            allowNull: false,
        },
    })
    // Posts.associate = (models) => {
    //     Posts.hasMany(models.Comments,{
    //         ondelete: "cascade",
    //     })
    // }
    return Posts
} 