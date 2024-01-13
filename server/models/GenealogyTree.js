module.exports = (sequelize, DataTypes) => {

    const GenealogyTree = sequelize.define("GenealogyTree", {
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            // allowNull: false,
            primaryKey:true,
        },
        uplineId:{
            type:DataTypes.UUID,
            allowNull: false,
        },
        downlineId:{
            type:DataTypes.UUID,
            allowNull: false,
        },
        level:{
            type:DataTypes.UUID,
            allowNull: false,
        },
 
    })
    // Users.associate = (models) => {
    //     Users.belongsTo(models.Role, {
    //         foreignKey: 'role',
    //         onDelete:'NO ACTION'
    //     })
    //     // Users.belongsTo(models.Employees, {
    //     //     foreignKey: 'employee',
    //     //     onDelete:'NO ACTION'
    //     // })
    // }
    return GenealogyTree
} 