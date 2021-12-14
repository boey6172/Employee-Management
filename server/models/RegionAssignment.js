module.exports = (sequelize, DataTypes) => {

    const Posts = sequelize.define("RegionAssignments", {
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            // allowNull: false,
            primaryKey:true,
        },
        regionAssignment:{
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