module.exports = (sequelize, DataTypes) => {

    const Donors = sequelize.define("Donors", {
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
        refferalId:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        // gender:{
        //     type:DataTypes.UUID,
        //     allowNull: false,
        // },
        level:{
            type:DataTypes.UUID,
            allowNull: false,
        },      
        status:{
            type:DataTypes.UUID,
            allowNull: false,
        },
        // regionAssignment:{
        //     type:DataTypes.UUID,
        //     allowNull: false,
        // },
        // religion:{
        //     type:DataTypes.UUID,
        //     allowNull: false,
        // },
        // address:{
        //     type:DataTypes.STRING,
        //     allowNull: false,
        // },
        contactNumber:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        depositSlip:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        depositfile:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        bankfile:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        validIdFile:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        bankAccount:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        philId:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        // pagIbigNumber:{
        //     type:DataTypes.STRING,
        //     allowNull: false,
        // },
        // gsisNumber:{
        //     type:DataTypes.STRING,
        //     allowNull: false,
        // },
        // nhmcNumber:{
        //     type:DataTypes.STRING,
        //     allowNull: false,
        // },
        // tinNumber:{
        //     type:DataTypes.STRING,
        //     allowNull: false,
        // },
        // taxstat:{
        //     type:DataTypes.UUID,
        //     allowNull: false,
        // },
        // salaryGrade:{
        //     type:DataTypes.STRING,
        //     allowNull: false,
        // },
    })
    // Employees.associate = (models) => {
    //     Employees.hasOne(models.Gender,{
    //         foreignKey: {
    //             name: 'gender'
    //         },
    //     })
    // }
    Donors.associate = (models)=> {
        // Employees.belongsTo(models.Gender, {
        //     foreignKey: 'gender',
        //     onDelete:'NO ACTION'
        // })
        Donors.belongsTo(models.Level, {
            foreignKey: 'level',
            onDelete:'NO ACTION'
        })
        Donors.belongsTo(models.Status, {
            foreignKey: 'status',
            onDelete:'NO ACTION'
        })
        // Employees.belongsTo(models.RegionAssignments, {
        //     foreignKey: 'regionAssignment',
        //     onDelete:'NO ACTION'
        // })
        // Employees.belongsTo(models.Religions, {
        //     foreignKey: 'religion',
        //     onDelete:'NO ACTION'
        // })
        // Employees.belongsTo(models.TaxStatuses, {
        //     foreignKey: 'taxstat',
        //     onDelete:'NO ACTION'
        // })
    };
      
    return Donors
} 