module.exports = (sequelize, DataTypes) => {

    const Reason = sequelize.define("Reason", {
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            // allowNull: false,
            primaryKey:true,
        },
        reason:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        // isDonorSolictorType:{
        //     type:DataTypes.BOOLEAN,
        //     allowNull: true,
        // },
        deleted_at:{
            type:DataTypes.STRING,
            allowNull: true,
        },
    })
    // Posts.associate = (models) => {
    //     Posts.hasMany(models.Comments,{
    //         ondelete: "cascade",
    //     })
    // }
    return Reason
} 