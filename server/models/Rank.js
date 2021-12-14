module.exports = (sequelize, DataTypes) => {

    const Posts = sequelize.define("Ranks", {
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            // allowNull: false,
            primaryKey:true,
        },
        rank:{
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