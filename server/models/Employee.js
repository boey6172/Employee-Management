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
        birthday:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        gender:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        contactNumber:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        address:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        empDate:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        philNumber:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        gsisNumber:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        nhmcNumber:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        tinNumber:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        taxstat:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        salaryGrade:{
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