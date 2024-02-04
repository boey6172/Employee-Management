module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define("Users", {
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            // allowNull: false,
            primaryKey:true,
        },
        username:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type:DataTypes.STRING,
            allowNull: false,
        },  
        donor:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        role:{
            type:DataTypes.UUID,
            allowNull: false,
        },
        email:{
            type:DataTypes.STRING,
            allowNull: false,
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
            allowNull: true,
        },
        
        contact_no:{
            type:DataTypes.STRING,
            allowNull: false,
        }
    })
    Users.associate = (models) => {
        Users.belongsTo(models.Role, {
            foreignKey: 'role',
            onDelete:'NO ACTION'
        })
        // Users.belongsTo(models.Employees, {
        //     foreignKey: 'employee',
        //     onDelete:'NO ACTION'
        // })
    }
    return Users
} 