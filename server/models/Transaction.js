module.exports = (sequelize, DataTypes) => {

    const Transactions = sequelize.define("Transactions", {
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            // allowNull: false,
            primaryKey:true,
        },
        transaction:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        donor:{
            type:DataTypes.UUID,
            allowNull: false,
        },
        amount:{
            type:DataTypes.INTEGER,
            allowNull: true,
        },
        created_by:{
            type:DataTypes.UUID,
            allowNull: false,
        },
        updated_by:{
            type:DataTypes.UUID,
            allowNull: false,
        },
        deleted_at:{
            type:DataTypes.STRING,
            allowNull: true,
        },
    })
    Transactions.associate = (models)=> {
        Transactions.belongsTo(models.Donors, {
            foreignKey: 'donor',
            onDelete:'NO ACTION'
        })
        Transactions.belongsTo(models.Users, {
            foreignKey: 'created_by',
            onDelete:'NO ACTION'
        })
        Transactions.belongsTo(models.Users, {
            foreignKey: 'updated_by',
            onDelete:'NO ACTION'
        })
    };
    return Transactions
} 